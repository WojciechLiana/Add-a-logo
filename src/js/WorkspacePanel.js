import {Workspace} from "./Workspace";

export function WorkspacePanel() {

    this.workspaceImageDiv = document.querySelector(".workspace-image");
    this.workspaceLogoDiv = document.querySelector(".workspace-logo");
    this.workspaceClearBtn = document.querySelector(".work-space__panel__clear");
    this.workspaceSlider = document.querySelector(".work-space__panel__slider-input");
}

WorkspacePanel.prototype.handleClearWorkspaceBtn = function () {

    WorkspacePanel.prototype.removeImage.bind(this)();
    WorkspacePanel.prototype.removeLogo.bind(this)();
    WorkspacePanel.prototype.hideWorkspaceRangeInput.bind(this)();

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

WorkspacePanel.prototype.hideWorkspaceRangeInput = function () {

    this.workspaceSlider.parentElement.classList.add("invisible");
};

WorkspacePanel.prototype.showWorkspaceRangeInput = function () {

    this.workspaceSlider.parentElement.classList.remove("invisible");
};