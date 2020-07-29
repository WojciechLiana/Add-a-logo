import {WorkspacePanel} from "./WorkspacePanel";

export function Workspace() {

    this.workspaceImageDiv = document.querySelector(".workspace-image");
    this.workspaceLogoDiv = document.querySelector(".workspace-logo");
    this.workspaceClearBtn = document.querySelector(".work-space__panel__clear");
    this.workspaceLogo = "";
    this.workspaceImage = "";
    this.isImageLoaded = false;
    this.isLogoLoaded = false;

}

Workspace.prototype.addImageToWorkspace = function (picture, container) {

    WorkspacePanel.prototype.removeImage.bind(this)();
    Workspace.prototype.addNewPicture.bind(this, container, picture)();
    Workspace.prototype.adjustImageSize.bind(this, picture)();
    if (this.isLogoLoaded) {
        const logo = this.workspaceLogoDiv.firstElementChild;
        Workspace.prototype.adjustLogoSizeToImage.bind(this, logo)();
    }
    this.isImageLoaded = true;

};

Workspace.prototype.addLogoToWorkspace = function (logo, container) {

    WorkspacePanel.prototype.removeLogo.bind(this)();
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
        Workspace.prototype.adjustLogoSizeToImage.bind(this, logo)();
    } else {
        Workspace.prototype.adjustLogoSizeWhenNoImage.bind(this, logo)();
    }

};

Workspace.prototype.adjustLogoSizeWhenNoImage = function (logo) {

    const scale = Workspace.prototype.calculateScalePicture.bind(this, logo)();
    const logoElement = this.workspaceLogoDiv.firstChild;
    Workspace.prototype.changePictureSize(logoElement, logo.naturalWidth / scale, logo.naturalHeight / scale);

};

Workspace.prototype.adjustLogoSizeToImage = function (logo) {

    const adjustment = Workspace.prototype.calculateLogoSizeToImgSize.bind(this, logo)();
    const logoElement = this.workspaceLogoDiv.firstChild;
    Workspace.prototype.changePictureSize(
        logoElement, logo.naturalWidth / adjustment * 0.9, logo.naturalHeight / adjustment * 0.9);

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