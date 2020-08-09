import {WorkspacePanel} from "./WorkspacePanel";

export function Workspace(myWorkspacePanel) {

    this.workspaceImageDiv = document.querySelector(".workspace-image");
    this.workspaceLogoDiv = document.querySelector(".workspace-logo");
    this.workspaceClearBtn = document.querySelector(".work-space__panel__clear");
    this.workspaceLogo = "";
    this.workspaceImage = "";
    this.isImageLoaded = false;
    this.isLogoLoaded = false;
    this.workspacePanel = myWorkspacePanel;

}

Workspace.prototype.addImageToWorkspace = function (picture, container) {

    WorkspacePanel.prototype.removeImage.bind(this)();
    Workspace.prototype.addNewPicture.bind(this, container, picture)();
    Workspace.prototype.adjustImageSize.bind(this, picture)();
    if (this.isLogoLoaded) {
        const sliderValue = this.workspacePanel.workspaceSlider.value / 100;
        const logo = this.workspaceLogoDiv.firstElementChild;
        Workspace.prototype.adjustLogoSizeToImage.bind(this, logo, sliderValue)();
        WorkspacePanel.prototype.showWorkspaceRangeInput.bind(this.workspacePanel)();
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
        const sliderValue = this.workspacePanel.workspaceSlider.value / 100;
        Workspace.prototype.adjustLogoSizeToImage.bind(this, logo, sliderValue)();
        WorkspacePanel.prototype.showWorkspaceRangeInput.bind(this.workspacePanel)();
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

Workspace.prototype. handleClearButton = function () {

    this.isLogoLoaded = false;
    this.isImageLoaded = false;
};