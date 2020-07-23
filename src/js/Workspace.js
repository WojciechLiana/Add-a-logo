export function Workspace() {

    this.workspaceImageDiv = document.querySelector(".workspace-image");
    this.workspaceLogoDiv = document.querySelector(".workspace-logo");
    this.workspaceClearBtn = document.querySelector(".work-space__panel__clear");
    this.workspaceLogo = "";
    this.workspaceImage = "";

}

Workspace.prototype.addPictureToWorkspace = function (picture, container) {

    Workspace.prototype.removeImage.bind(this)();
    Workspace.prototype.addNewPicture.bind(this, container, picture)();
    const scale = Workspace.prototype.calculateScalePicture.bind(this, picture)();
    Workspace.prototype.adjustImageSize.bind(this, picture.naturalWidth, picture.naturalHeight, scale)();

};

Workspace.prototype.addLogoToWorkspace = function (logo, container) {

    Workspace.prototype.removeLogo.bind(this)();
    Workspace.prototype.addNewPicture.bind(this, container, logo)();
    const scale = Workspace.prototype.calculateScaleLogo.bind(this, logo)();
    Workspace.prototype.adjustLogoSize.bind(this, logo.naturalWidth, logo.naturalHeight, scale)();
};

Workspace.prototype.addNewPicture = function (container, picture) {

    const pic = picture.cloneNode(true);
    container.appendChild(pic);
};

Workspace.prototype.adjustImageSize = function (width, height, scale) {

    const image = this.workspaceImageDiv.firstChild;
    image.style.width = `${width / scale}px`;
    image.style.height = `${height / scale}px`;

};

Workspace.prototype.adjustLogoSize = function (width, height, scale) {

    const logo = this.workspaceLogoDiv.firstChild;
    logo.style.width = `${width / scale}px`;
    logo.style.height = `${height / scale}px`;

};

Workspace.prototype.calculateScalePicture = function (imageToBeScaled) {

    const widthScale = imageToBeScaled.naturalWidth / this.workspaceImageDiv.clientWidth;
    const heightScale = imageToBeScaled.naturalHeight / this.workspaceImageDiv.clientHeight;
    return widthScale >= heightScale ? widthScale : heightScale;

};

Workspace.prototype.calculateScaleLogo = function (imageToBeScaled) {

    const widthScale = imageToBeScaled.naturalWidth / this.workspaceLogoDiv.clientWidth;
    const heightScale = imageToBeScaled.naturalHeight / this.workspaceLogoDiv.clientHeight;
    return widthScale >= heightScale ? widthScale : heightScale;

};

Workspace.prototype.clearWorkspace = function () {

        Workspace.prototype.removeImage.bind(this)();
        Workspace.prototype.removeLogo.bind(this)();

};

Workspace.prototype.removeImage = function() {

    if(this.workspaceImageDiv.hasChildNodes()) {
        this.workspaceImageDiv.removeChild(this.workspaceImageDiv.firstChild);
    }
};

Workspace.prototype.removeLogo = function() {

    if(this.workspaceLogoDiv.hasChildNodes()){
    this.workspaceLogoDiv.removeChild(this.workspaceLogoDiv.firstChild);
    }
};

