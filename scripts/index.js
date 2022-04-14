const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const formElementEditProfile = document.querySelector('.popup__form'); // Находим форму в DOM
const nameInput = document.querySelector('.popup__text-input_edit_name-profile'); // Находим поля формы в DOM
const jobInput = document.querySelector('.popup__text-input_edit_job-profile');

const popupEditProfile = document.querySelector('.popup');
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

//

const formElementAddCard = document.querySelector('.popup__form_element_add-card'); // Находим форму в DOM
const nameAddCardInput = document.querySelector('.popup__text-input_element_name-add-card'); // Находим поля формы в DOM
const linkAddCardInput = document.querySelector('.popup__text-input_element_link-add-card');

const popupAddCard = document.querySelector('.popup_add-card');
const buttonOpenPopupAddCard = document.querySelector('.profile__add-button');

//

const popupOverview = document.querySelector(".popup_overview");
const popupOverviewImage = document.querySelector(".overview__image");
const popupOverviewTitle = document.querySelector(".overview__title");

const buttonOpenPopupOverview = document.querySelector('.photo-grid__image');
const buttonClosePopupOverview = document.querySelector('.popup__close-button_overview');

const popupCloseButton = document.querySelectorAll('.popup__close-button');

//

function togglePopup(popup) {
  popup.classList.toggle("popup_opened")
}

function formSubmitHandler (evt) { // Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    nameInputValue = (nameInput.value);
    jobInputValue = (jobInput.value);

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInputValue;
    profileJob.textContent = jobInputValue;

    togglePopup(popupEditProfile);
}

function openPopupProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  togglePopup(popupEditProfile);
}

//

function formSubmitHandlerAddCard (evt) { // Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  const inputNameValue = document.querySelector('.popup__text-input_element_name-add-card').value;
  const inputLinkValue = document.querySelector('.popup__text-input_element_link-add-card').value;
  const element = getElement({name: inputNameValue, image: inputLinkValue});
  listContainer.prepend(element);

  togglePopup(formElementAddCard);
}

function openPopupAddCard() {
  formElementAddCard.reset();
  togglePopup(popupAddCard);
}

//

const listContainer = document.querySelector('.photo-grid__list');
const template = document.querySelector(".template-cards");

function render() {
  const html = initialCards.map(getElement);
  listContainer.prepend(...html);
}

function getElement(item) {
  const getElementTemplate = template.content.cloneNode(true);
  const name = getElementTemplate.querySelector('.photo-grid__title');
  name.textContent = item.name;
  const image = getElementTemplate.querySelector('.photo-grid__image');
  image.src = item.link;

  const likeCard = getElementTemplate.querySelector('.photo-grid__like');
  likeCard.addEventListener('click', likeCards);

  const deleteCard = getElementTemplate.querySelector('.photo-grid__delete-button');
  deleteCard.addEventListener('click', deleteCards);

  image.addEventListener("click", () => {
    popupOverviewImage.src = item.link;
    popupOverviewTitle.textContent = item.name;
    togglePopup(popupOverview);
  });

  return getElementTemplate;
}

function likeCards(evt) {
  evt.target.classList.toggle('photo-grid__like_active');
}

function deleteCards(evt) {
  const element = evt.target.closest(".photo-grid__item");
  element.remove();
}

render();

//

formElementEditProfile.addEventListener('submit', formSubmitHandler); // Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»

buttonOpenPopupProfile.addEventListener('click', openPopupProfile);
popupCloseButton.forEach((element) => element.addEventListener("click", () => togglePopup(element.closest(".popup"))));

//

formElementAddCard.addEventListener('submit', formSubmitHandlerAddCard); // Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»

buttonOpenPopupAddCard.addEventListener('click', openPopupAddCard);
