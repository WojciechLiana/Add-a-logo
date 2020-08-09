import "../css/main.sass";
import "../bootstrap/css/bootstrap.min.css"
import {Workspace} from "./Workspace";
import {PicturePanel} from "./PicturePanel";
import {WorkspacePanel} from "./WorkspacePanel";

document.addEventListener("DOMContentLoaded", function () {

    const myWorkspacePanel = new WorkspacePanel();
    const myWorkspace = new Workspace(myWorkspacePanel);
    const myImagesPanel = new PicturePanel("imagesPanel");
    const myLogoPanel = new PicturePanel("logoPanel");

    myWorkspacePanel.workspaceClearBtn.addEventListener("click", myWorkspacePanel.handleClearWorkspaceBtn.bind(myWorkspacePanel));
    myWorkspacePanel.workspaceClearBtn.addEventListener("click", myWorkspace.handleClearButton.bind(myWorkspace));
    myWorkspacePanel.workspaceSlider.addEventListener("input", myWorkspacePanel.handleSlider.bind(myWorkspacePanel));
    myImagesPanel.imagesInput.addEventListener("change", myImagesPanel.updatePicture.bind(myImagesPanel));
    myLogoPanel.logoInput.addEventListener("change", myLogoPanel.updatePicture.bind(myLogoPanel));
    myImagesPanel.imagesContainer.addEventListener("click", myImagesPanel.handlePictureClick.bind(myWorkspace));
    myLogoPanel.logoContainer.addEventListener("click", myLogoPanel.handlePictureClick.bind(myWorkspace));
});