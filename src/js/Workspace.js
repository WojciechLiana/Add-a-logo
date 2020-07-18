export function Workspace() {

    this.workspaceImageCanvas = document.querySelector(".workspace-image");
    this.workspaceLogoCanvas = document.querySelector(".workspace-logo");
    this.workspaceClearBtn = document.querySelector(".work-space__panel__clear");
    this.workspaceSheet = document.querySelector(".work-space__sheet");
    this.workspaceLogo = "";
    this.workspacePicture = "";

}

Workspace.prototype.addLogoToWorkspace = function (logo) {

    Workspace.prototype.adjustImageSize.bind(this, logo.naturalWidth, logo.naturalHeight, this.workspaceLogoCanvas)();
    this.workspaceLogo = logo;
    const ctx = this.workspaceLogoCanvas.getContext("2d");
    ctx.drawImage(logo, 0, 0);

};

Workspace.prototype.addPictureToWorkspace = function (picture) {

    Workspace.prototype.adjustImageSize.bind(this, picture.naturalWidth, picture.naturalHeight, this.workspaceImageCanvas)();
    this.workspaceLogo = picture;
    const ctx = this.workspaceImageCanvas.getContext("2d");
    ctx.drawImage(picture, 0, 0);
    const scale = Workspace.prototype.calculateScale(picture, this.workspaceLogo);

};

Workspace.prototype.adjustImageSize = function (width, height, canvas) {

    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = width;
    canvas.height = height;

};

Workspace.prototype.calculateScale = function (picture, logo) {

    return Math.ceil(picture.naturalHeight / logo.naturalHeight);

};

Workspace.prototype.clearWorkspace = function () {

    const ctxPicture = this.workspaceImageCanvas.getContext("2d");
    const ctxLogo = this.workspaceLogoCanvas.getContext("2d");
    ctxPicture.clearRect(0, 0, this.workspaceImageCanvas.width, this.workspaceImageCanvas.height);
    ctxLogo.clearRect(0, 0, this.workspaceLogoCanvas.width, this.workspaceLogoCanvas.height);

};

