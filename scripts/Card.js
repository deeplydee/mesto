import { openPopup } from './index.js';

const popupOverview = document.querySelector('.popup_type_overview');
const popupOverviewImage = document.querySelector('.overview__image');
const popupOverviewTitle = document.querySelector('.overview__title');

export class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = document.querySelector('.template-card');
  }

  _getTemplate = () => {
    this._card = this._cardSelector.content
      .querySelector('.card')
      .cloneNode(true);

    return this._card;
  }

  generateCard = () => {
    this._card = this._getTemplate();

    this._card.querySelector('.card__title').textContent = this._name;
    this._card.querySelector('.card__image').src = this._link;
    this._card.querySelector('.card__image').alt = this._name;

    this._setEventListeners();

    return this._card;
  }

  _setEventListeners = () => {
    this._card.querySelector('.card__delete-button').addEventListener('click', this._deleteClickHandler);
    this._card.querySelector('.card__like-button').addEventListener('click', this._toggleLikeCard);

    this._card.querySelector('.card__image').addEventListener('click', this._openOverview);
  }

  _deleteClickHandler = () => {
    this._card.remove();
  }

  _toggleLikeCard = () => {
    this._card.querySelector('.card__like-button').classList.toggle('card__like-button_active');
  }

  _openOverview = () => {
    popupOverviewImage.src = this._link;
    popupOverviewImage.alt = this._name;
    popupOverviewTitle.textContent = this._name;
    openPopup(popupOverview);
  }
}
