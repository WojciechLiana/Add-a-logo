import {Workspace} from "./Workspace";

export function WorkspacePanel() {

    this.workspaceImageDiv = document.querySelector(".workspace-image");
    this.workspaceLogoDiv = document.querySelector(".workspace-logo");
    this.workspaceClearBtn = document.querySelector(".work-space__panel__clear");
}

WorkspacePanel.prototype.clearWorkspace = function () {

    Workspace.prototype.removeImage.bind(this)();
    Workspace.prototype.removeLogo.bind(this)();
    this.addImageToWorkspace = false;
    this.addLogoToWorkspace = false;

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