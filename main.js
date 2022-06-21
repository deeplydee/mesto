(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers}var n,r;return n=t,(r=[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getUserData",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"updateProfileData",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addLikeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addItemPrepend",value:function(e){this._container.prepend(e)}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function e(t,n){var r=this,o=t.data,a=t.userId,c=t.handleCardClick,u=t.handleAddLikeCard,l=t.handleDeleteLikeCard,s=t.handleDeleteCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"generateCard",(function(){return r._card=r._getTemplate(),r._cardImage=r._card.querySelector(".card__image"),r._likeButton=r._card.querySelector(".card__like-button"),r._likeCount=r._card.querySelector(".card__like-count"),r._deleteButton=r._card.querySelector(".card__delete-button"),r._card.querySelector(".card__title").textContent=r._name,r._cardImage.src=r._link,r._cardImage.alt=r._name,r._likeCount.textContent=r._likes.length,r._isOwner(),r._isLiked(),r._setEventListeners(),r._card})),i(this,"_setEventListeners",(function(){r._likeButton.addEventListener("click",(function(){r._likeState()})),r._cardImage.addEventListener("click",(function(){r._handleCardClick()})),r._deleteButton.addEventListener("click",(function(){r._handleDeleteCard()}))})),i(this,"handleClickDelete",(function(){r._card.remove(),r._card=null})),this._name=o.name,this._link=o.link,this._likes=o.likes,this._owner=o.owner._id,this._id=o._id,this._userId=a,this._handleCardClick=c,this._handleAddLikeCard=u,this._handleDeleteLikeCard=l,this._handleDeleteCard=s,this._cardSelector=n}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return this._card=document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0),this._card}},{key:"getId",value:function(){return this._id}},{key:"_isOwner",value:function(){this._owner!==this._userId&&this._deleteButton.remove()}},{key:"_likeState",value:function(){this._likeButton.classList.contains("card__like-button_active")?this._handleDeleteLikeCard(this._id):this._handleAddLikeCard(this._id)}},{key:"_isLiked",value:function(){var e=this;this._likes.some((function(t){return e._userId===t._id}))&&this._likeButton.classList.add("card__like-button_active")}},{key:"handleToggleLikeCard",value:function(e){this._likes=e.likes,this._likeButton.classList.toggle("card__like-button_active"),this._likeCount.textContent=this._likes.length}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=u((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"enableValidation",(function(){r._setEventListeners()})),l(this,"_setEventListeners",(function(){r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r.toggleButtonState()}))}))})),l(this,"toggleButtonState",(function(){r._buttonElement.disabled=!r._formElement.checkValidity(),r._buttonElement.classList.toggle(r._inactiveButtonClass,!r._formElement.checkValidity())})),l(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),l(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(r._inputErrorClass),n.textContent=t,n.classList.add(r._errorClass)})),l(this,"_hideInputError",(function(e){var t=r._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),l(this,"clearErrors",(function(){r.toggleButtonState(),r._inputList.forEach((function(e){r._hideInputError(e)}))})),this._formElement=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}));function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t){var n=t.profileNameSelector,r=t.profileDescriptionSelector,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileNameElement=document.querySelector(n),this._profileDescriptionElement=document.querySelector(r),this._profileAvatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{profileName:this._profileNameElement.textContent,profileDescription:this._profileDescriptionElement.textContent,profileAvatar:this._profileAvatarElement.src}}},{key:"setUserInfo",value:function(e){this._profileNameElement.textContent=e.name,this._profileDescriptionElement.textContent=e.about,this._profileAvatarElement.src=e.avatar,this._id=e._id}},{key:"getUserId",value:function(){return this._id}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_is-opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_is-opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function g(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._popupForm=t._popup.querySelector(".popup__form"),t._inputList=t._popup.querySelectorAll(".popup__data-input"),t._submitFormButton=t._popup.querySelector(".popup__form-submit"),t}return t=a,n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"_setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;m(k(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){m(k(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"open",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];m(k(a.prototype),"open",this).call(this),this._setInputValues(e)}},{key:"loading",value:function(e){this._submitFormButton.textContent=e?"Сохранение...":"Сохранить"}}],n&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(h);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function P(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupOverviewTitle=t._popup.querySelector(".overview__title"),t._popupOverviewImage=t._popup.querySelector(".overview__image"),t}return t=a,(n=[{key:"open",value:function(e){this._popupOverviewImage.src=e.link,this._popupOverviewTitle.textContent=e.name,this._popupOverviewImage.alt=e.name,C(L(a.prototype),"open",this).call(this)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(h);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=A(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},D.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function R(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupForm=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"setConfirmationHandler",value:function(e){this._submitHandler=e}},{key:"setEventListeners",value:function(){var e=this;D(x(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler()}))}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(h),F={formSelector:".popup__form",inputSelector:".popup__data-input",submitButtonSelector:".popup__form-submit",inactiveButtonClass:"popup__form-submit_type_disabled",inputErrorClass:"popup__data-input_type_error",errorClass:"popup__error_visible"},N=document.querySelector(".profile__edit-button"),V=(document.querySelector(".popup__form_type_profile-edit"),document.querySelector(".popup__data-input_type_profile-name"),document.querySelector(".popup__data-input_type_profile-description"),document.querySelector(".profile__add-button")),H=(document.querySelector(".popup__form_type_card-add"),document.querySelector(".popup__data-input_type_card-name"),document.querySelector(".popup__data-input_type_card-link"),document.querySelector(".profile__avatar-button"));function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var G={},M=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-43",headers:{authorization:"ac643db8-86ab-4268-82ab-47aab28e37b0","Content-Type":"application/json"}});Promise.all([M.getInitialCards(),M.getUserData()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];W.setUserInfo(i),$.renderItems(o)})).catch((function(e){console.log(e)}));var z,$=new r({renderer:function(e){$.addItem(K(e))}},".photo-grid__list"),K=function(e){var t=new a({data:e,userId:W.getUserId(),handleCardClick:function(){Z.open(e)},handleAddLikeCard:function(){M.addLikeCard(t.getId()).then((function(e){t.handleToggleLikeCard(e)})).catch((function(e){console.log(e)}))},handleDeleteLikeCard:function(){M.deleteLikeCard(t.getId()).then((function(e){t.handleToggleLikeCard(e)})).catch((function(e){console.log(e)}))},handleDeleteCard:function(){ee.open(),ee.setConfirmationHandler((function(){M.deleteCard(t.getId()).then((function(){t.handleClickDelete(),ee.close()})).catch((function(e){console.log(e)}))}))}},".template-card");return t.generateCard()},Q=new w({popupSelector:".popup_type_card-add",handleFormSubmit:function(e){Q.loading(!0),M.addNewCard(e).then((function(e){$.addItemPrepend(K(e)),Q.close()})).catch((function(e){console.log(e)})).finally((function(){Q.loading(!1)}))}}),W=new p({profileNameSelector:".profile__name",profileDescriptionSelector:".profile__description",profileAvatarSelector:".profile__avatar"}),X=new w({popupSelector:".popup_type_profile-edit",handleFormSubmit:function(e){X.loading(!0),M.updateProfileData(e).then((function(e){W.setUserInfo(e),X.close()})).catch((function(e){console.log(e)})).finally((function(){X.loading(!1)}))}}),Y=new w({popupSelector:".popup_type_change-avatar",handleFormSubmit:function(e){Y.loading(!0),M.updateAvatar(e).then((function(e){W.setUserInfo(e),Y.close()})).catch((function(e){console.log(e)})).finally((function(){Y.loading(!1)}))}}),Z=new I(".popup_type_overview"),ee=new U(".popup_type_delete-card");N.addEventListener("click",(function(){var e=W.getUserInfo();X.open({name:e.profileName,about:e.profileDescription}),G["profile-edit"].clearErrors()})),V.addEventListener("click",(function(){G["card-add"].clearErrors(),Q.open({name:"",link:""})})),H.addEventListener("click",(function(){var e=W.getUserInfo();Y.open({avatar:e.profileAvatar}),G.avatar.clearErrors()})),z=F,Array.from(document.querySelectorAll(z.formSelector)).forEach((function(e){var t=new s(F,e),n=e.getAttribute("name");G[n]=t,t.enableValidation()})),X.setEventListeners(),Q.setEventListeners(),Z.setEventListeners(),Y.setEventListeners(),ee.setEventListeners()})();
//# sourceMappingURL=main.js.map