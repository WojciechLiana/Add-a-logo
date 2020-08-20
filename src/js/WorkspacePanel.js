import {Workspace} from "./Workspace";

export function WorkspacePanel() {

    this.workspaceImageDiv = document.querySelector(".workspace-image");
    this.workspaceLogoDiv = document.querySelector(".workspace-logo");
    this.workspaceClearBtn = document.querySelector(".work-space__panel__clear");
    this.workspaceSlider = document.querySelector(".work-space__panel__slider-input");
    this.workspaceSave = document.querySelector(".work-space__panel__save");
}

WorkspacePanel.prototype.handleClearWorkspaceBtn = function () {

    WorkspacePanel.prototype.removeImage.bind(this)();
    WorkspacePanel.prototype.removeLogo.bind(this)();
    WorkspacePanel.prototype.hideWorkspaceRangeInputAndSave.bind(this)();

};

WorkspacePanel.prototype.removeImage = function () {

    if (this.workspaceImageDiv.hasChildNodes()) {
        this.workspaceImageDiv.removeChild(this.workspaceImageDiv.firstChild);
    }
};

WorkspacePanel.prototype.removeLogo = function () {

    if (this.workspaceLogoDiv.hasChildNodes()) {
        this.workspaceLogoDiv.removeChild(this.workspaceLogoDiv.firstChild);
    }
};

WorkspacePanel.prototype.handleSlider = function () {

    Workspace.prototype.adjustLogoSizeToImage.bind(
        this, this.workspaceLogoDiv.firstElementChild, this.workspaceSlider.value / 100)();
};

WorkspacePanel.prototype.hideWorkspaceRangeInputAndSave = function () {

    this.workspaceSlider.parentElement.classList.add("invisible");
    this.workspaceSave.classList.add("invisible");
};

WorkspacePanel.prototype.showWorkspaceRangeInputAndSave = function () {

    this.workspaceSlider.parentElement.classList.remove("invisible");
    this.workspaceSave.classList.remove("invisible");
};

WorkspacePanel.prototype.savePicture = function (logoContainer, imageContainer) {

    const logo = logoContainer.firstElementChild;
    const picture = imageContainer.firstElementChild;
    const scale = picture.naturalWidth / picture.clientWidth;
    const canv = document.createElement("canvas");
    canv.width = picture.naturalWidth;
    canv.height = picture.naturalHeight;

    const context = canv.getContext('2d');
    context.drawImage(picture, 0, 0);
    context.drawImage(logo, logo.offsetLeft * scale, logo.offsetTop * scale, logo.clientWidth * scale, logo.clientHeight * scale);
    const download = document.getElementById("download");
    const image = canv.toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);

};