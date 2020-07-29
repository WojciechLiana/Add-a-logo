import {Picture} from "./Picture";
import {Workspace} from "./Workspace";

export function PicturePanel(panelName) {

    this.panelName = panelName;
    this.imagesInput = document.querySelector("#pictures");
    this.imagesContainer = document.querySelector(".sidebar__pictures__container");
    this.logoInput = document.querySelector("#logo");
    this.logoContainer = document.querySelector(".sidebar__logo__container");
    this.workspaceImageDiv = document.querySelector(".workspace-image");
    this.workspaceLogoDiv = document.querySelector(".workspace-logo");

}

PicturePanel.prototype.updatePicture = function () {

    if (this.panelName === "imagesPanel") {
        PicturePanel.prototype.updateImages.bind(this)();
    } else if (this.panelName === "logoPanel") {
        PicturePanel.prototype.deleteLogoBeforeNew(this.logoContainer);
        PicturePanel.prototype.updateLogo.bind(this)();
    }

};

PicturePanel.prototype.deleteLogoBeforeNew = function (logoContainer) {

    logoContainer.removeChild(logoContainer.firstChild);
};

PicturePanel.prototype.updateLogo = function () {

    const Logo = new Picture();
    this.logoContainer.appendChild(Logo.createPictureFrame());
    const logo = this.logoContainer.firstElementChild.firstElementChild;
    Logo.updateImage(logo, URL.createObjectURL(this.logoInput.files[0]));
    Logo.onload = function () {
        URL.revokeObjectURL(this.src);
    }
};

PicturePanel.prototype.updateImages = function () {

    for (const picture in this.imagesInput.files) {
        if (this.imagesInput.files.hasOwnProperty(picture)) {
            const Image = new Picture();
            this.imagesContainer.appendChild(Image.createPictureFrame());
            const image = this.imagesContainer.lastElementChild.firstElementChild;
            Image.updateImage(image, URL.createObjectURL(this.imagesInput.files[picture]));
            Image.onload = function () {
                URL.revokeObjectURL(this.src);
            }
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

    event.target.parentElement.parentElement.remove();
};

PicturePanel.prototype.editPictureClick = function (event) {

    if(event.target.parentElement.parentElement.parentElement.classList.contains("sidebar__pictures__container")){
        Workspace.prototype.addImageToWorkspace
            .bind(this, event.target.parentElement.previousElementSibling, this.workspaceImageDiv)();
    } else if (event.target.parentElement.parentElement.parentElement.classList.contains("sidebar__logo__container")) {
        Workspace.prototype.addLogoToWorkspace
            .bind(this, event.target.parentElement.previousElementSibling, this.workspaceLogoDiv)();
    }

    PicturePanel.prototype.hidePicturePanelAfterClickE(event.target.parentElement);
};

PicturePanel.prototype.hidePicturePanelAfterClickE = function (elementToHide) {

    elementToHide.classList.toggle("invisible");
};