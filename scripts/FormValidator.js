export class FormValidator {
  constructor(validationConfig, formElement) {
    this._formElement = formElement;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
  }

  enableValidation = () => {
    this._setEventListeners();
  };

  _setEventListeners = () => {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  };

  toggleButtonState = () => {
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);

    buttonElement.disabled = !this._formElement.checkValidity();
    buttonElement.classList.toggle(this._inactiveButtonClass, !this._formElement.checkValidity());
  }

  _checkInputValidity = (inputElement) => {
    (!inputElement.validity.valid)
      ? this._showInputError(inputElement, inputElement.validationMessage)
      : this._hideInputError(inputElement);
  };

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  clearErrors = () => {
    const inputElement = Array.from(this._formElement.querySelectorAll(this._inputSelector));

    inputElement.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
}
