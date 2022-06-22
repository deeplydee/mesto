import '../pages/index.css';

import { Api } from '../components/Api.js';

import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';

import { FormValidator } from '../components/FormValidator.js';

import { UserInfo } from '../components/UserInfo.js';

import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';

import {
  validationConfig,
  cardListSelector,

  buttonOpenPopupEditProfile,
  buttonOpenPopupAddCard,
  buttonOpenPopupChangeAvatar,
} from '../utils/constants.js';

const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(validationConfig, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
  headers: {
    authorization: 'ac643db8-86ab-4268-82ab-47aab28e37b0',
    'Content-Type': 'application/json',
  },
});

Promise.all([api.getInitialCards(), api.getUserData()])
  .then(([initialCards, userData]) => {
    profileInfo.setUserInfo(userData);
    cardList.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(err);
  });

const cardList = new Section(
  {
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  cardListSelector
);

const createCard = (data) => {
  const card = new Card(
    {
      data,
      userId: profileInfo.getUserId(),
      handleCardClick: () => {
        popupWithImage.open(data);
      },
      handleAddLikeCard: () => {
        api
          .addLikeCard(card.getId())
          .then((data) => {
            card.handleToggleLikeCard(data);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      handleDeleteLikeCard: () => {
        api
          .deleteLikeCard(card.getId())
          .then((data) => {
            card.handleToggleLikeCard(data);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      handleDeleteCard: () => {
        popupWithConfirmation.open();
        popupWithConfirmation.setConfirmationHandler(() => {
          popupWithConfirmation.loading(true);
          api
            .deleteCard(card.getId())
            .then(() => {
              card.handleClickDelete();
              popupWithConfirmation.close();
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => {
              popupWithConfirmation.loading(false);
            });
        });
      },
    },
    '.template-card'
  );

  return card.generateCard();
};

const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_type_card-add',
  handleFormSubmit: (data) => {
    popupAddCard.loading(true);
    api
      .addNewCard(data)
      .then((data) => {
        cardList.addItemPrepend(createCard(data));
        popupAddCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAddCard.loading(false);
      });
  },
});

const profileInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileDescriptionSelector: '.profile__description',
  profileAvatarSelector: '.profile__avatar',
});

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_profile-edit',
  handleFormSubmit: (data) => {
    popupEditProfile.loading(true);
    api
      .updateProfileData(data)
      .then((data) => {
        profileInfo.setUserInfo(data);
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditProfile.loading(false);
      });
  },
});

const popupChangeAvatar = new PopupWithForm({
  popupSelector: '.popup_type_change-avatar',
  handleFormSubmit: (data) => {
    popupChangeAvatar.loading(true);
    api
      .updateAvatar(data)
      .then((data) => {
        profileInfo.setUserInfo(data);
        popupChangeAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupChangeAvatar.loading(false);
      });
  },
});

const popupWithImage = new PopupWithImage('.popup_type_overview');

const popupWithConfirmation = new PopupWithConfirmation(
  '.popup_type_delete-card'
);

buttonOpenPopupEditProfile.addEventListener('click', () => {
  const getInfo = profileInfo.getUserInfo();
  popupEditProfile.open({
    name: getInfo.profileName,
    about: getInfo.profileDescription,
  });
  formValidators['profile-edit'].clearErrors();
});

buttonOpenPopupAddCard.addEventListener('click', () => {
  formValidators['card-add'].clearErrors();
  popupAddCard.open({ name: '', link: '' });
});

buttonOpenPopupChangeAvatar.addEventListener('click', () => {
  popupChangeAvatar.open({ avatar: '' });
  formValidators['avatar'].clearErrors();
});

enableValidation(validationConfig);

popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
popupWithImage.setEventListeners();
popupChangeAvatar.setEventListeners();
popupWithConfirmation.setEventListeners();
