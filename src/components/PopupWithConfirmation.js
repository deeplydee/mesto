import { Popup } from './Popup.js';

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
  }

  setConfirmationHandler(func) {
    this._submitHandler = func;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler();
    });
  }
}
