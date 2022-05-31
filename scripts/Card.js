export class Card {
  constructor({ name, link }, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    this._card = document
      .querySelector(this._cardSelector)
      .content.querySelector('.card')
      .cloneNode(true);

    return this._card;
  }

  generateCard = () => {
    this._card = this._getTemplate();

    this._cardImage = this._card.querySelector('.card__image');

    this._card.querySelector('.card__title').textContent = this._name;
    this._card.querySelector('.card__image').alt = this._name;

    this._cardImage.src = this._link;

    this._setEventListeners();

    return this._card;
  };

  _setEventListeners = () => {
    this._likeButton = this._card.querySelector('.card__like-button');

    this._card
      .querySelector('.card__delete-button')
      .addEventListener('click', this._deleteClickHandler);
    this._card
      .querySelector('.card__like-button')
      .addEventListener('click', this._toggleLikeCard);

    this._cardImage.addEventListener('click', () =>
      this._handleCardClick({ name: this._name, link: this._link })
    );
  };

  _deleteClickHandler = () => {
    this._card.remove();
  };

  _toggleLikeCard = () => {
    this._likeButton.classList.toggle('card__like-button_active');
  };
}
