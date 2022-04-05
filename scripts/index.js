let formElement = document.querySelector('.popup__form'); // Находим форму в DOM
let nameInput = document.querySelector('.popup__text-input_edit_name-profile'); // Находим поля формы в DOM
let jobInput = document.querySelector('.popup__text-input_edit_job-profile');

let popup = document.querySelector('.popup');
let buttonOpenPopup = document.querySelector('.profile__edit-button');
let buttonClosePopup = document.querySelector('.popup__close-button');

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

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
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler); // Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»

buttonOpenPopup.addEventListener('click', openPopup);
buttonClosePopup.addEventListener('click', closePopup);
