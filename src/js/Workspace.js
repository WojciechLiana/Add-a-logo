export function Workspace(myWorkspacePanel) {

    this.workspaceImageDiv = document.querySelector(".workspace-image");
    this.workspaceLogoDiv = document.querySelector(".workspace-logo");
    this.isImageLoaded = false;
    this.isLogoLoaded = false;
    this.workspacePanel = myWorkspacePanel;
    this.isMouseDownOnLogo = false;
    this.mousePosition = {};
    this.offset = {};
}

Workspace.prototype.addImageToWorkspace = function (picture, container) {

    Workspace.prototype.removeImage(container);
    Workspace.prototype.addNewPicture.bind(this, container, picture)();
    Workspace.prototype.adjustImageSize.bind(this, picture)();
    if (this.isLogoLoaded) {
        const sliderValue = this.workspacePanel.workspaceSlider.value / 100;
        const logo = this.workspaceLogoDiv.firstElementChild;
        Workspace.prototype.adjustLogoSizeToImage.bind(this, logo, sliderValue)();
        this.workspacePanel.showWorkspaceRangeInputAndSave.bind(this.workspacePanel)();
    }
    this.isImageLoaded = true;

};

Workspace.prototype.addLogoToWorkspace = function (logo, container) {

    Workspace.prototype.removeImage(container);
    Workspace.prototype.addNewPicture.bind(this, container, logo)();
    Workspace.prototype.adjustLogoSize.bind(this, logo)();
    this.isLogoLoaded = true;

};

Workspace.prototype.addNewPicture = function (container, picture) {

    const pic = picture.cloneNode(true);
    container.appendChild(pic);
};

Workspace.prototype.adjustImageSize = function (picture) {

    const scale = Workspace.prototype.calculateScalePicture.bind(this, picture)();
    const image = this.workspaceImageDiv.firstChild;
    Workspace.prototype.changePictureSize(image, picture.naturalWidth / scale, picture.naturalHeight / scale);

};

Workspace.prototype.adjustLogoSize = function (logo) {

    if (this.isImageLoaded) {
        const sliderValue = this.workspacePanel.workspaceSlider.value / 100;
        Workspace.prototype.setElementLeftTopPosition(logo, 0, 0);
        Workspace.prototype.adjustLogoSizeToImage.bind(this, logo, sliderValue)();
        this.workspacePanel.showWorkspaceRangeInputAndSave.bind(this.workspacePanel)();
    } else {
        Workspace.prototype.adjustLogoSizeWhenNoImage.bind(this, logo)();
    }

};

Workspace.prototype.adjustLogoSizeWhenNoImage = function (logo) {

    const scale = Workspace.prototype.calculateScalePicture.bind(this, logo)();
    const logoElement = this.workspaceLogoDiv.firstChild;
    Workspace.prototype.changePictureSize(logoElement, logo.naturalWidth / scale, logo.naturalHeight / scale);
};

Workspace.prototype.adjustLogoSizeToImage = function (logo, sliderValue) {

    const adjustment = Workspace.prototype.calculateLogoSizeToImgSize.bind(this, logo)();
    const logoElement = this.workspaceLogoDiv.firstChild;
    Workspace.prototype.setElementLeftTopPosition(logo, 0, 0);
    Workspace.prototype.changePictureSize(
        logoElement, logo.naturalWidth / adjustment * sliderValue, logo.naturalHeight / adjustment * sliderValue);
};

Workspace.prototype.calculateLogoSizeToImgSize = function (logo) {

    const scaleX = logo.naturalWidth / this.workspaceImageDiv.firstElementChild.clientWidth;
    const scaleY = logo.naturalHeight / this.workspaceImageDiv.firstElementChild.clientHeight;

    return scaleX >= scaleY ? scaleX : scaleY;
};

Workspace.prototype.changePictureSize = function (picture, width, height) {

    picture.style.width = `${width}px`;
    picture.style.height = `${height}px`;
};

Workspace.prototype.calculateScalePicture = function (imageToBeScaled) {

    const widthScale = imageToBeScaled.naturalWidth / this.workspaceImageDiv.clientWidth;
    const heightScale = imageToBeScaled.naturalHeight / this.workspaceImageDiv.clientHeight;
    return widthScale >= heightScale ? widthScale : heightScale;
};

Workspace.prototype.handleClearButton = function () {

    this.isLogoLoaded = false;
    this.isImageLoaded = false;
    Workspace.prototype.removeImage(this.workspaceImageDiv);
    Workspace.prototype.removeImage(this.workspaceLogoDiv);
    this.workspacePanel.hideWorkspaceRangeInputAndSave();
};

Workspace.prototype.removeImage = function (container) {

    if (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
};

Workspace.prototype.moveLogoMouseDown = function (mouseMoveFnc, event) {

    if (event.target.tagName === "IMG" && this.isImageLoaded) {
        this.isMouseDownOnLogo = true;
        this.offset.X = event.target.offsetLeft - event.clientX;
        this.offset.Y = event.target.offsetTop - event.clientY;
        document.addEventListener("mousemove", mouseMoveFnc);
    }
};

Workspace.prototype.moveLogoMouseMove = function (mouseMoveEvent) {

    mouseMoveEvent.preventDefault();

    if (this.isMouseDownOnLogo) {
        const logo = this.workspaceLogoDiv.firstElementChild;
        const currentLeftPosition = Workspace.prototype.calculateLogoLeftPosition.bind(this, mouseMoveEvent)();
        const currentTopPosition = Workspace.prototype.calculateLogoTopPosition.bind(this, mouseMoveEvent)();
        Workspace.prototype.setElementLeftTopPosition(logo, currentLeftPosition, currentTopPosition);
    }
};

Workspace.prototype.calculateLogoLeftPosition = function (event) {

    const image = this.workspaceImageDiv.firstElementChild;
    const logo = this.workspaceLogoDiv.firstElementChild;
    this.mousePosition.X = event.clientX;
    if (this.mousePosition.X + this.offset.X <= 0) {
        return 0;
    } else if (image.width - logo.width - this.mousePosition.X - this.offset.X < 0) {
        return image.width - logo.width;
    } else {
        return this.mousePosition.X + this.offset.X;
    }
};

Workspace.prototype.calculateLogoTopPosition = function (event) {

    const image = this.workspaceImageDiv.firstElementChild;
    const logo = this.workspaceLogoDiv.firstElementChild;
    this.mousePosition.Y = event.clientY;
    if (this.mousePosition.Y + this.offset.Y <= 0) {
        return 0;
    } else if (image.height - logo.height - this.mousePosition.Y - this.offset.Y < 0) {
        return image.height - logo.height;
    } else {
        return this.mousePosition.Y + this.offset.Y;
    }
};

Workspace.prototype.moveLogoMouseUp = function (mouseMoveFnc) {

    this.isMouseDownOnLogo = false;
    document.removeEventListener("mousemove", mouseMoveFnc);
};

Workspace.prototype.setElementLeftTopPosition = function (element, leftPosition, topPosition) {

    element.style.left = `${leftPosition}px`;
    element.style.top = `${topPosition}px`;
};

Workspace.prototype.resizeLogoOnly = function (logoContainer) {

    const logo = logoContainer.firstElementChild.firstElementChild;
    const container = this.workspaceLogoDiv;
    Workspace.prototype.addLogoToWorkspace.bind(this, logo, container)();
};

Workspace.prototype.resizeLogoAndImage = function () {

    const image = this.activeImage;
    const container = this.workspaceImageDiv;
    Workspace.prototype.addImageToWorkspace.bind(this, image, container)();
};

Workspace.prototype.resize = function (logoContainer) {

    if (this.isImageLoaded) {
        Workspace.prototype.resizeLogoAndImage.bind(this, logoContainer)();
    } else if (this.isLogoLoaded) {
        Workspace.prototype.resizeLogoOnly.bind(this, logoContainer)();
    }
};