export class Card {
  constructor(
    {
      data,
      userId,
      handleCardClick,
      handleAddLikeCard,
      handleDeleteLikeCard,
      handleDeleteCard,
    },
    cardSelector
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._owner = data.owner._id;
    this._id = data._id;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleAddLikeCard = handleAddLikeCard;
    this._handleDeleteLikeCard = handleDeleteLikeCard;
    this._handleDeleteCard = handleDeleteCard;
    this._cardSelector = cardSelector;
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
    this._likeButton = this._card.querySelector('.card__like-button');
    this._likeCount = this._card.querySelector('.card__like-count');
    this._deleteButton = this._card.querySelector('.card__delete-button');
    this._card.querySelector('.card__title').textContent = this._name;

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._likeCount.textContent = this._likes.length;

    this._isOwner();
    this._isLiked();

    this._setEventListeners();

    return this._card;
  };

  getId() {
    return this._id;
  }

  _isOwner() {
    if (this._owner !== this._userId) {
      this._deleteButton.remove();
    }
  }

  _likeState() {
    this._likeButton.classList.contains('card__like-button_active')
      ? this._handleDeleteLikeCard(this._id)
      : this._handleAddLikeCard(this._id);
  }

  _isLiked() {
    if (
      this._likes.some((user) => {
        return this._userId === user._id;
      })
    ) {
      this._likeButton.classList.add('card__like-button_active');
    }
  }

  _setEventListeners = () => {
    this._likeButton.addEventListener('click', () => {
      this._likeState();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick();
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteCard();
    });
  };

  handleToggleLikeCard(data) {
    this._likes = data.likes;
    this._likeButton.classList.toggle('card__like-button_active');
    this._likeCount.textContent = this._likes.length;
  }

  handleClickDelete = () => {
    this._card.remove();
    this._card = null;
  };
}
