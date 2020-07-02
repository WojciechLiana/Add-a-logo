import "../css/main.sass";
import "../bootstrap/css/bootstrap.min.css"
import {Logo} from "./Logo";
import {Workspace} from "./Workspace";

document.addEventListener("DOMContentLoaded", function () {

    const myLogo = new Logo();
    const myWorkspace = new Workspace();

    myLogo.input.addEventListener("change", myLogo.changeLogoSrc.bind(myLogo));
    myLogo.container.addEventListener("click", myLogo.handleClick.bind(myLogo));
    myLogo.deleteBtn.addEventListener("click", myLogo.deleteLogo.bind(myLogo));
    myLogo.editBtn.addEventListener("click", myWorkspace.addLogoToWorkspace.bind(myWorkspace, myLogo.container));
    myWorkspace.workspaceClearBtn.addEventListener("click", myWorkspace.clearWorkspace.bind(myWorkspace));

});