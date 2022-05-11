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

const popupOverview = document.querySelector('.popup_type_overview');
const popupOverviewImage = document.querySelector('.overview__image');
const popupOverviewTitle = document.querySelector('.overview__title');

const popupCloseButton = document.querySelectorAll('.popup__close-button');

const listContainer = document.querySelector('.photo-grid__list');
const template = document.querySelector('.template-card');

function openPopup(popupElement) {
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

  const element = getElement({name: popupAddCardNameInput.value, link: popupAddCardLinkInput.value});
  listContainer.prepend(element);

  closePopup(popupAddCard);
}

function renderInitialCards() {
  const cardElements = initialCards.map(getElement);
  listContainer.prepend(...cardElements);
}

function getElement(item) {
  const elementTemplate = template.content.cloneNode(true);

  const name = elementTemplate.querySelector('.card__title');
  const image = elementTemplate.querySelector('.card__image');
  const cardLikeButton = elementTemplate.querySelector('.card__like-button');
  const cardDeleteButton = elementTemplate.querySelector('.card__delete-button');

  name.textContent = item.name;
  image.src = item.link;
  image.alt = item.name;

  cardLikeButton.addEventListener('click', toggleLikeCard);
  cardDeleteButton.addEventListener('click', deleteCard);

  image.addEventListener('click', () => {
    popupOverviewImage.src = item.link;
    popupOverviewImage.alt = item.name;
    popupOverviewTitle.textContent = item.name;
    openPopup(popupOverview);
  });

  return elementTemplate;
}

function toggleLikeCard(evt) {
  evt.target.classList.toggle('card__like-button_active');
}

function deleteCard(evt) {
  evt.target.closest('.card').remove();
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

renderInitialCards();

buttonOpenPopupEditProfile.addEventListener('click', () => {
  clearErrors(validationConfig, popupEditProfileForm);
  setInputsProfileData();
  toggleButtonState(validationConfig, popupEditProfileForm);
  openPopup(popupEditProfile);
});

buttonOpenPopupAddCard.addEventListener('click', () => {
  popupAddCardForm.reset();
  clearErrors(validationConfig, popupAddCardForm);
  toggleButtonState(validationConfig, popupAddCardForm);
  openPopupAddCard();
});

popupEditProfileForm.addEventListener('submit', handleSubmitEditProfileForm);

popupAddCardForm.addEventListener('submit', handleSubmitAddCardForm);
