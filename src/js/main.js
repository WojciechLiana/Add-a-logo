import "../css/main.sass";
import "../bootstrap/css/bootstrap.min.css"
import handleAddPictures from "./handlePictures";
import {Logo} from "./Logo";

document.addEventListener("DOMContentLoaded", function () {

    const myLogo = new Logo();

    const logoInput = myLogo.input;
    const logoContainer = myLogo.container;
    logoInput.addEventListener("change", myLogo.changeLogoSrc.bind(myLogo));
    logoContainer.addEventListener("click", myLogo.handleClick.bind(myLogo));

});