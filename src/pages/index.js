import '../pages/index.css'

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
  popupEditProfileForm,
  popupEditProfileNameInput,
  popupEditProfileDescriptionInput,

  buttonOpenPopupAddCard,
  popupAddCardForm,
  popupAddCardNameInput,
  popupAddCardLinkInput,
} from '../utils/constants.js';

const EditProfileFormValidator = new FormValidator(
  validationConfig,
  popupEditProfileForm
);

const AddCardFormValidator = new FormValidator(
  validationConfig,
  popupAddCardForm
);

const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item, '.template-card', handleCardClick);
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    },
  },
  cardListSelector
);

const popupWithImage = new PopupWithImage('.popup_type_overview');

const handleCardClick = (data) => {
  popupWithImage.open(data);
};

const popupAddCard = new PopupWithForm(
  '.popup_type_card-add',
  handleSubmitAddCardForm
);

const popupEditProfile = new PopupWithForm(
  '.popup_type_profile-edit',
  handleSubmitEditProfileForm
);

const profileInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileDescriptionSelector: '.profile__description',
});

function setInputsProfileData() {
  const { profileName, profileDescription } = profileInfo.getUserInfo();
  popupEditProfileNameInput.value = profileName;
  popupEditProfileDescriptionInput.value = profileDescription;
}

function handleSubmitEditProfileForm() {
  profileInfo.setUserInfo({
    profileName: popupEditProfileNameInput.value,
    profileDescription: popupEditProfileDescriptionInput.value,
  });
}

function handleSubmitAddCardForm() {
  const data = {
    name: popupAddCardNameInput.value,
    link: popupAddCardLinkInput.value,
  };

  cardList.addItemPrepend(generateCard(data));
}

function generateCard(item) {
  const card = new Card(item, '.template-card', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
}

buttonOpenPopupEditProfile.addEventListener('click', () => {
  setInputsProfileData();
  EditProfileFormValidator.clearErrors();
  EditProfileFormValidator.toggleButtonState();
  popupEditProfile.open();
});

buttonOpenPopupAddCard.addEventListener('click', () => {
  AddCardFormValidator.clearErrors();
  AddCardFormValidator.toggleButtonState();
  popupAddCard.open();
});

cardList.renderItems();

EditProfileFormValidator.enableValidation();
AddCardFormValidator.enableValidation();

popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
popupWithImage.setEventListeners();
