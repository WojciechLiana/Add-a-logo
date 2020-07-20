export function Workspace() {

    this.workspacePictureDiv = document.querySelector(".workspace-image");
    this.workspaceLogoDiv = document.querySelector(".workspace-logo");
    this.workspaceClearBtn = document.querySelector(".work-space__panel__clear");
    this.workspaceSheet = document.querySelector(".work-space__sheet");
    this.workspaceLogo = "";
    this.workspacePicture = "";

}

Workspace.prototype.addLogoToWorkspace = function (logo) {

    this.workspaceLogo = logo.cloneNode(true);
    this.workspaceLogoDiv.appendChild(this.workspaceLogo);
    const scale = Workspace.prototype.calculateScaleLogo.bind(this, logo)();
    Workspace.prototype.adjustLogoSize.bind(this, logo.naturalWidth, logo.naturalHeight, scale)();
};

Workspace.prototype.addPictureToWorkspace = function (picture) {

    this.workspacePicture = picture.cloneNode(true);
    this.workspacePictureDiv.appendChild(this.workspacePicture);
    const scale = Workspace.prototype.calculateScalePicture.bind(this, picture)();
    Workspace.prototype.adjustImageSize.bind(this, picture.naturalWidth, picture.naturalHeight, scale)();

};

Workspace.prototype.adjustImageSize = function (width, height, scale) {

    this.workspacePicture.style.width = `${width / scale}px`;
    this.workspacePicture.style.height = `${height / scale}px`;

};

Workspace.prototype.adjustLogoSize = function (width, height, scale) {

    this.workspaceLogo.style.width = `${width / scale}px`;
    this.workspaceLogo.style.height = `${height / scale}px`;

};

Workspace.prototype.calculateScalePicture = function (imageToBeScaled) {

    const widthScale = imageToBeScaled.naturalWidth / this.workspacePictureDiv.clientWidth;
    const heightScale = imageToBeScaled.naturalHeight / this.workspacePictureDiv.clientHeight;
    return widthScale >= heightScale ? widthScale : heightScale;

};

Workspace.prototype.calculateScaleLogo = function (imageToBeScaled) {

    const widthScale = imageToBeScaled.naturalWidth / this.workspaceLogoDiv.clientWidth;
    const heightScale = imageToBeScaled.naturalHeight / this.workspaceLogoDiv.clientHeight;
    return widthScale >= heightScale ? widthScale : heightScale;

};

Workspace.prototype.clearWorkspace = function () {

};

