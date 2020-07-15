export function Workspace() {

    this.workspaceBoard = document.querySelector(".workspace");
    this.workspaceClearBtn = document.querySelector(".work-space__panel__clear");
    this.workspaceLogo = "";
    this.workspacePicture = "";

}

Workspace.prototype.addLogoToWorkspace = function (logo) {

    this.workspaceLogo = logo;
    const ctx = this.workspaceBoard.getContext("2d");
    ctx.drawImage(logo, 0, 0, 50, 50);

};

Workspace.prototype.addPictureToWorkspace = function (picture) {

    this.workspaceLogo = picture;
    const ctx = this.workspaceBoard.getContext("2d");
    ctx.drawImage(picture, 0, 0, 200, 200);
};

Workspace.prototype.clearWorkspace = function () {

    const ctx = this.workspaceBoard.getContext("2d");
    ctx.clearRect(0, 0, this.workspaceBoard.width, this.workspaceBoard.height);

};

