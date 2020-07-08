export function Picture() {

}

Picture.prototype.createPictureFrame = function () {

    const frame = document.createElement("div");
    frame.classList.add("sidebar__pictures__container__frame", "my-1", "mx-1", "position-relative");
    frame.appendChild(Picture.prototype.createImage());
    frame.appendChild(Picture.prototype.createPicPanel());

    return frame;
};

Picture.prototype.createImage = function () {

    const image = document.createElement("img");
    image.classList.add("sidebar__pictures__container__image");

    return image;
};

Picture.prototype.createPicPanel = function () {

    const picPanel = document.createElement("div");
    picPanel.classList.add("sidebar__pictures__container__panel");
    picPanel.appendChild(Picture.prototype.createDeleteBtn());
    picPanel.appendChild(Picture.prototype.createEditBtn());

    return picPanel;
};

Picture.prototype.createDeleteBtn = function () {

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("sidebar__pictures__container__panel__editBtn");
    deleteBtn.innerText = ("D");

    return deleteBtn;
};

Picture.prototype.createEditBtn = function () {

    const editBtn = document.createElement("button");
    editBtn.classList.add("sidebar__pictures__container__panel__deleteBtn");
    editBtn.innerText = ("E");

    return editBtn;
};

Picture.prototype.updateImage = function (frame, image) {

    frame.src = image;

};