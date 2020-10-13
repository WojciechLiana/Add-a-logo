import {Picture} from "./Picture";
import {Workspace} from "./Workspace";

export function PicturePanel(panelName) {

    this.panelName = panelName;
    this.imagesInput = document.querySelector("#pictures");
    this.imagesContainer = document.querySelector(".sidebar__pictures__container");
    this.logoInput = document.querySelector("#logo");
    this.logoContainer = document.querySelector(".sidebar__logo__container");

}

PicturePanel.prototype.updatePicture = function () {

    if (this.panelName === "imagesPanel") {
        PicturePanel.prototype.updateImages.bind(this)();
    } else if (this.panelName === "logoPanel") {
        const isLogoChosen = this.logoInput.files[0];
        if (isLogoChosen) {
            PicturePanel.prototype.deleteLogoBeforeNew(this.logoContainer);
            PicturePanel.prototype.updateLogo.bind(this)();
        }
    }
};

PicturePanel.prototype.deleteLogoBeforeNew = function (logoContainer) {

    if (logoContainer.firstChild) {
        logoContainer.removeChild(logoContainer.firstChild);
    }
};

PicturePanel.prototype.updateLogo = function () {

    const url = URL.createObjectURL(this.logoInput.files[0]);
    const Logo = new Picture("panel__logo", url);
    Logo.onload = function () {
        URL.revokeObjectURL(this.src);
    };
    this.logoContainer.appendChild(Logo.createPictureIcon());
};

PicturePanel.prototype.updateImages = function () {

    for (const picture in this.imagesInput.files) {
        if (this.imagesInput.files.hasOwnProperty(picture)) {
            const url = URL.createObjectURL(this.imagesInput.files[picture]);
            const Image = new Picture("panel__image", url);
            Image.onload = function () {
                URL.revokeObjectURL(this.src);
            };
            this.imagesContainer.appendChild(Image.createPictureIcon());
        }
    }
};

PicturePanel.prototype.handlePictureClick = function (event) {

    if (event.target.classList.contains("sidebar__pictures__container__image")) {
        PicturePanel.prototype.clickOnPicture(event);
    } else if (event.target.classList.contains("sidebar__pictures__container__panel__deleteBtn")) {
        PicturePanel.prototype.deletePictureClick(event);
    } else if (event.target.classList.contains("sidebar__pictures__container__panel__editBtn")) {
        PicturePanel.prototype.editPictureClick.bind(this, event)();
    }
};


PicturePanel.prototype.clickOnPicture = function (event) {

    event.target.nextElementSibling.classList.toggle("invisible");
};

PicturePanel.prototype.deletePictureClick = function (event) {

    event.currentTarget.firstElementChild.remove();
};

PicturePanel.prototype.editPictureClick = function (event) {

    if (event.target.classList.contains("panel__image")) {
        Workspace.prototype.addImageToWorkspace
            .bind(this, event.target.parentElement.previousElementSibling, this.workspaceImageDiv)();
        this.activeImage = event.target.parentElement.previousElementSibling;
    } else if (event.target.classList.contains("panel__logo")) {
        Workspace.prototype.addLogoToWorkspace
            .bind(this, event.target.parentElement.previousElementSibling, this.workspaceLogoDiv)();
    }

    PicturePanel.prototype.hidePicturePanelAfterClickE(event.target.parentElement);
};

PicturePanel.prototype.hidePicturePanelAfterClickE = function (elementToHide) {

    elementToHide.classList.toggle("invisible");
};