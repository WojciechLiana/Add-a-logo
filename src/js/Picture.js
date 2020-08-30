export function Picture(kindOfPictureClass, pictureSrc) {

    this.kindOfPicture = kindOfPictureClass;
    this.pictureSrc = pictureSrc;
}

Picture.prototype.createPictureIcon = function () {

    const icon = document.createElement("div");
    icon.classList.add("sidebar__pictures__container__icon", "my-1", "mx-1", "position-relative");
    icon.appendChild(Picture.prototype.createImage(this.pictureSrc));
    icon.appendChild(Picture.prototype.createPicturePanel(this.kindOfPicture));

    return icon;
};

Picture.prototype.createImage = function (imageSrc) {

    const image = document.createElement("img");
    image.classList.add("sidebar__pictures__container__image", "position-relative");
    image.src = imageSrc;

    return image;
};

Picture.prototype.createPicturePanel = function (kindOfPictureClass) {

    const picturePanel = document.createElement("div");
    picturePanel.classList.add("sidebar__pictures__container__panel", "invisible");
    picturePanel.appendChild(Picture.prototype.createEditBtn(kindOfPictureClass));
    picturePanel.appendChild(Picture.prototype.createDeleteBtn());

    return picturePanel;
};

Picture.prototype.createDeleteBtn = function () {

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("sidebar__pictures__container__panel__deleteBtn");
    deleteBtn.innerText = ("D");

    return deleteBtn;
};

Picture.prototype.createEditBtn = function (kindOfPictureClass) {

    const editBtn = document.createElement("button");
    editBtn.classList.add("sidebar__pictures__container__panel__editBtn", `${kindOfPictureClass}`);
    editBtn.innerText = ("E");

    return editBtn;
};