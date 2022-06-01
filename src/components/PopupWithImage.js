import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupOverviewTitle = this._popup.querySelector('.overview__title');
    this._popupOverviewImage = this._popup.querySelector('.overview__image');
  }

  open(data) {
    this._popupOverviewImage.src = data.link;
    this._popupOverviewTitle.textContent = data.name;
    this._popupOverviewImage.alt = data.name;
    super.open();
  }
}
