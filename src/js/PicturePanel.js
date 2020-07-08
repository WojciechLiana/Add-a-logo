import {Picture} from "./Picture";

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
