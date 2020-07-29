import "../css/main.sass";
import "../bootstrap/css/bootstrap.min.css"
import {Workspace} from "./Workspace";
import {PicturePanel} from "./PicturePanel";
import {WorkspacePanel} from "./WorkspacePanel";

document.addEventListener("DOMContentLoaded", function () {

    const myWorkspace = new Workspace();
    const myWorkspacePanel = new WorkspacePanel();
    const myImagesPanel = new PicturePanel("imagesPanel");
    const myLogoPanel = new PicturePanel("logoPanel");

    myWorkspacePanel.workspaceClearBtn.addEventListener("click", myWorkspacePanel.clearWorkspace.bind(myWorkspacePanel));
    myImagesPanel.imagesInput.addEventListener("change", myImagesPanel.updatePicture.bind(myImagesPanel));
    myLogoPanel.logoInput.addEventListener("change", myLogoPanel.updatePicture.bind(myLogoPanel));
    myImagesPanel.imagesContainer.addEventListener("click", myImagesPanel.handlePictureClick.bind(myWorkspace));
    myLogoPanel.logoContainer.addEventListener("click", myLogoPanel.handlePictureClick.bind(myWorkspace));
});