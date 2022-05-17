import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

import { initialCards } from './cards.js';

const buttonOpenPopupEditProfile = document.querySelector('.profile__edit-button');

const popupEditProfile = document.querySelector('.popup_type_profile-edit');
const popupEditProfileForm = document.querySelector('.popup__form_type_profile-edit');
const popupEditProfileNameInput = document.querySelector('.popup__data-input_type_profile-name');
const popupEditProfileDescriptionInput = document.querySelector('.popup__data-input_type_profile-description');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const buttonOpenPopupAddCard = document.querySelector('.profile__add-button');

const popupAddCard = document.querySelector('.popup_type_card-add');
const popupAddCardForm = document.querySelector('.popup__form_type_card-add');
const popupAddCardNameInput = document.querySelector('.popup__data-input_type_card-name');
const popupAddCardLinkInput = document.querySelector('.popup__data-input_type_card-link');

const popupCloseButton = document.querySelectorAll('.popup__close-button');

const listContainer = document.querySelector('.photo-grid__list');
const template = document.querySelector('.template-card');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__data-input',
  submitButtonSelector: '.popup__form-submit',
  inactiveButtonClass: 'popup__form-submit_type_disabled',
  inputErrorClass: 'popup__data-input_type_error',
  errorClass: 'popup__error_visible'
}

const EditProfileFormValidator = new FormValidator(validationConfig, popupEditProfileForm);
EditProfileFormValidator.enableValidation();

const AddCardFormValidator = new FormValidator(validationConfig, popupAddCardForm);
AddCardFormValidator.enableValidation();

const renderElements = (data) => {
  const card = new Card(data);
  return card.generateCard();
}

initialCards.forEach((item) => {
  listContainer.append(renderElements(item));
});

export function openPopup(popupElement) {
  document.addEventListener('keyup', closePressButton);
  popupElement.addEventListener('mouseup', closeClickOverlay);
  popupElement.classList.add('popup_is-opened');
}

function closePopup(popupElement) {
  document.removeEventListener('keyup', closePressButton);
  popupElement.removeEventListener('mouseup', closeClickOverlay);
  popupElement.classList.remove('popup_is-opened');
}

function setInputsProfileData() {
  popupEditProfileNameInput.value = profileName.textContent;
  popupEditProfileDescriptionInput.value = profileDescription.textContent;
}

function handleSubmitEditProfileForm (evt) {
  evt.preventDefault();

  const popupEditProfileNameInputValue = popupEditProfileNameInput.value;
  const popupEditProfileDescriptionInputValue = popupEditProfileDescriptionInput.value;

  profileName.textContent = popupEditProfileNameInputValue;
  profileDescription.textContent = popupEditProfileDescriptionInputValue;

  closePopup(popupEditProfile);
}

function openPopupAddCard() {
  popupAddCardForm.reset();
  openPopup(popupAddCard);
}

function handleSubmitAddCardForm (evt) {
  evt.preventDefault();

  const element = renderElements({name: popupAddCardNameInput.value, link: popupAddCardLinkInput.value});
  listContainer.prepend(element);

  closePopup(popupAddCard);
}

function closePressButton(evt) {
  if (evt.key === 'Escape') {
    const popupIsOpened = document.querySelector('.popup_is-opened');
    closePopup(popupIsOpened);
  }
}

function closeClickOverlay(evt) {
  if (
    evt.target === evt.currentTarget ||
    evt.target.classList.contains('popup__close-button')
  ) {
    closePopup(evt.currentTarget);
  }
}

buttonOpenPopupEditProfile.addEventListener('click', () => {
  EditProfileFormValidator.clearErrors();
  setInputsProfileData();
  EditProfileFormValidator.toggleButtonState();
  openPopup(popupEditProfile);
});

buttonOpenPopupAddCard.addEventListener('click', () => {
  popupAddCardForm.reset();
  AddCardFormValidator.clearErrors();
  AddCardFormValidator.toggleButtonState();
  openPopupAddCard();
});

popupEditProfileForm.addEventListener('submit', handleSubmitEditProfileForm);

popupAddCardForm.addEventListener('submit', handleSubmitAddCardForm);
