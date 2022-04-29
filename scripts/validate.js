const allSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__data-input',
  submitButtonSelector: '.popup__form-submit',
  inactiveButtonClass: 'popup__form-submit_type_disabled',
  inputErrorClass: 'popup__data-input_type_error', //border-bottom
  errorClass: 'popup__error_visible' //span
}

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListeners(config, formElement);
  });
};

function setEventListeners(config, formElement) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(config, formElement, inputElement);
    });
  });
};

function toggleButtonState(config, formElement) {
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  buttonElement.disabled = !formElement.checkValidity();
  buttonElement.classList.toggle(config.inactiveButtonClass, !formElement.checkValidity());
}

function checkInputValidity(config, formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(config, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(config, formElement, inputElement);
  }

  toggleButtonState(config, formElement);
};

function showInputError(config, formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

function hideInputError(config, formElement, inputElement) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

function clearErrors(formElement) {
  const config = allSelectors;
  const inputElement = Array.from(formElement.querySelectorAll(config.inputSelector));

  inputElement.forEach((inputElement) => {
    hideInputError(config, formElement, inputElement);
  });
}

enableValidation(allSelectors);
