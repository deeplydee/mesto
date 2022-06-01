import '../pages/index.css';

import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';

import { FormValidator } from '../components/FormValidator.js';

import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';

import { initialCards } from '../utils/cards.js';

import {
  validationConfig,
  cardListSelector,

  buttonOpenPopupEditProfile,
  popupEditProfileNameInput,
  popupEditProfileDescriptionInput,

  buttonOpenPopupAddCard,
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

const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  cardListSelector
);

const createCard = (item) => {
  const card = new Card(item, '.template-card', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
};

const popupWithImage = new PopupWithImage('.popup_type_overview');

const handleCardClick = (data) => {
  popupWithImage.open(data);
};

const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_type_card-add',
  handleFormSubmit: (formData) => {
    cardList.addItemPrepend(createCard(formData));
  },
});

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_profile-edit',
  handleFormSubmit: (formData) => {
    profileInfo.setUserInfo({
      profileName: formData.name,
      profileDescription: formData.description,
    });
  },
});

const profileInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileDescriptionSelector: '.profile__description',
});

function setInputsProfileData({ profileName, profileDescription }) {
  popupEditProfileNameInput.value = profileName;
  popupEditProfileDescriptionInput.value = profileDescription;
}

buttonOpenPopupEditProfile.addEventListener('click', () => {
  const getInfo = profileInfo.getUserInfo();
  setInputsProfileData({
    profileName: getInfo.profileName,
    profileDescription: getInfo.profileDescription,
  });
  formValidators['profile-edit'].clearErrors();
  popupEditProfile.open();
});

buttonOpenPopupAddCard.addEventListener('click', () => {
  formValidators['card-add'].clearErrors();
  popupAddCard.open();
});

enableValidation(validationConfig);

cardList.renderItems();

popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
popupWithImage.setEventListeners();
