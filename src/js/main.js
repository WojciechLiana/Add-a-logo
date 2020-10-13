import "../css/main.sass";
import "../css/rangedInputStyle.css";
import "../bootstrap/css/bootstrap.min.css";
import {Workspace} from "./Workspace";
import {PicturePanel} from "./PicturePanel";
import {WorkspacePanel} from "./WorkspacePanel";

document.addEventListener("DOMContentLoaded", function () {

    const myWorkspacePanel = new WorkspacePanel();
    const myWorkspace = new Workspace(myWorkspacePanel);
    const myImagesPanel = new PicturePanel("imagesPanel");
    const myLogoPanel = new PicturePanel("logoPanel");

    const mouseMoveFnc = myWorkspace.moveLogoMouseMove.bind(myWorkspace);

    myWorkspacePanel.workspaceClearBtn.addEventListener("click", myWorkspace.handleClearButton.bind(myWorkspace));
    myWorkspacePanel.workspaceSlider.addEventListener("input", myWorkspacePanel.handleSlider.bind(
        myWorkspacePanel, myWorkspace.workspaceLogoDiv));
    myImagesPanel.imagesInput.addEventListener("change", myImagesPanel.updatePicture.bind(myImagesPanel));
    myLogoPanel.logoInput.addEventListener("change", myLogoPanel.updatePicture.bind(myLogoPanel));
    myImagesPanel.imagesContainer.addEventListener("click", myImagesPanel.handlePictureClick.bind(myWorkspace));
    myLogoPanel.logoContainer.addEventListener("click", myLogoPanel.handlePictureClick.bind(myWorkspace));
    myWorkspace.workspaceLogoDiv.addEventListener("mousedown", myWorkspace.moveLogoMouseDown.bind(myWorkspace, mouseMoveFnc));
    document.addEventListener("mouseup", myWorkspace.moveLogoMouseUp.bind(myWorkspace, mouseMoveFnc));
    myWorkspacePanel.workspaceSave.addEventListener("click", myWorkspacePanel.savePicture.bind(
        this, myWorkspace.workspaceLogoDiv, myWorkspace.workspaceImageDiv));
    window.addEventListener("resize", myWorkspace.resize.bind(myWorkspace, myLogoPanel.logoContainer));
});