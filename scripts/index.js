let formElementEditProfile = document.querySelector('.popup__form'); // Находим форму в DOM
let nameInput = document.querySelector('.popup__text-input_edit_name-profile'); // Находим поля формы в DOM
let jobInput = document.querySelector('.popup__text-input_edit_job-profile');

let popupEditProfile = document.querySelector('.popup');
let buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
let buttonClosePopupProfile = document.querySelector('.popup__close-button');

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

//

let formElementAddCard = document.querySelector('.popup__form_element_add-card'); // Находим форму в DOM
let nameAddCardInput = document.querySelector('.popup__text-input_element_name-add-card'); // Находим поля формы в DOM
let linkAddCardInput = document.querySelector('.popup__text-input_element_link-add-card');

let popupAddCard = document.querySelector('.popup_add-card');
let buttonOpenPopupAddCard = document.querySelector('.profile__add-button');
let buttonClosePopupAddCard = document.querySelector('.popup__close-button_add-card');

//

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

    closePopup()
}

function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupEditProfile.classList.add('popup_opened');
}

function closePopup() {
  popupEditProfile.classList.remove('popup_opened');
}

//

function formSubmitHandlerAddCard (evt) { // Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  closePopupAddCard()
}

function openPopupAddCard() {
  popupAddCard.classList.add('popup_opened');
}

function closePopupAddCard() {
  popupAddCard.classList.remove('popup_opened');
}

//

formElementEditProfile.addEventListener('submit', formSubmitHandler); // Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»

buttonOpenPopupProfile.addEventListener('click', openPopup);
buttonClosePopupProfile.addEventListener('click', closePopup);

//

formElementAddCard.addEventListener('submit', formSubmitHandlerAddCard); // Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»

buttonOpenPopupAddCard.addEventListener('click', openPopupAddCard);
buttonClosePopupAddCard.addEventListener('click', closePopupAddCard);
