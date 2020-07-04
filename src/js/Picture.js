export function Picture() {

    this.frame = document.createElement("img");

}

Picture.prototype.createPictureFrame = function () {

    this.frame.classList.add("sidebar__pictures__container__picture", "my-1", "mx-1");
    return this.frame;
};

Picture.prototype.updateImage = function (frame, image) {

    frame.src = image;

};