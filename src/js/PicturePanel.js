import {Picture} from "./Picture";
import {Workspace} from "./Workspace";

export function PicturePanel() {

    this.picturesInput = document.querySelector("#pictures");
    this.picturesContainer = document.querySelector(".sidebar__pictures__container");

}

PicturePanel.prototype.updatePicture = function () {
    for (const picture in this.picturesInput.files) {
        if (this.picturesInput.files.hasOwnProperty(picture)) {
            const Image = new Picture();
            this.picturesContainer.appendChild(Image.createPictureFrame());
            const image = this.picturesContainer.lastElementChild.firstElementChild;
            Image.updateImage(image, URL.createObjectURL(this.picturesInput.files[picture]));
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

    Workspace.prototype.addPictureToWorkspace.bind(this, event.target.parentElement.previousElementSibling)();
};