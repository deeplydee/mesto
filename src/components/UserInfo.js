export class UserInfo {
  constructor({
    profileNameSelector,
    profileDescriptionSelector,
    profileAvatarSelector,
  }) {
    this._profileNameElement = document.querySelector(profileNameSelector);
    this._profileDescriptionElement = document.querySelector(
      profileDescriptionSelector
    );
    this._profileAvatarElement = document.querySelector(profileAvatarSelector);
  }

  getUserInfo() {
    return {
      profileName: this._profileNameElement.textContent,
      profileDescription: this._profileDescriptionElement.textContent,
      profileAvatar: this._profileAvatarElement.src,
    };
  }

  setUserInfo(data) {
    this._profileNameElement.textContent = data.name;
    this._profileDescriptionElement.textContent = data.about;
    this._profileAvatarElement.src = data.avatar;
    this._id = data._id;
  }

  getUserId() {
    return this._id;
  }
}
