import {Workspace} from "./Workspace";

export function WorkspacePanel() {

    this.workspaceImageDiv = document.querySelector(".workspace-image");
    this.workspaceLogoDiv = document.querySelector(".workspace-logo");
    this.workspaceClearBtn = document.querySelector(".work-space__panel__clear");
    this.workspaceSlider = document.querySelector(".work-space__panel__slider-input");
    this.workspaceSave = document.querySelector(".work-space__panel__save");
}

WorkspacePanel.prototype.handleSlider = function () {

    Workspace.prototype.adjustLogoSizeToImage.bind(
        this, this.workspaceLogoDiv.firstElementChild, this.workspaceSlider.value / 100)();
};

WorkspacePanel.prototype.hideWorkspaceRangeInputAndSave = function () {

    this.workspaceSlider.parentElement.classList.add("d-none");
    this.workspaceSave.classList.add("d-none");
};

WorkspacePanel.prototype.showWorkspaceRangeInputAndSave = function () {

    this.workspaceSlider.parentElement.classList.remove("d-none");
    this.workspaceSave.classList.remove("d-none");
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