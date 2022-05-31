export class UserInfo {
  constructor({ profileNameSelector, profileDescriptionSelector }) {
    this._profileNameElement = document.querySelector(profileNameSelector);
    this._profileDescriptionElement = document.querySelector(
      profileDescriptionSelector
    );
  }

  getUserInfo() {
    return {
      profileName: this._profileNameElement.textContent,
      profileDescription: this._profileDescriptionElement.textContent,
    };
  }

  setUserInfo({ profileName, profileDescription }) {
    this._profileNameElement.textContent = profileName;
    this._profileDescriptionElement.textContent = profileDescription;
  }
}
