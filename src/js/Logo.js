export function Logo() {
    this.logoChoosed = false;
    this.container = document.querySelector(".sidebar__logo__container");
    this.input = document.querySelector("#logo");

}

Logo.prototype.changeLogoSrc = function () {

    this.container.src = URL.createObjectURL(this.input.files[0]);
    this.logoChoosed = true;
    this.container.onload = function () {
        URL.revokeObjectURL(this.src);
    };

};

Logo.prototype.handleClick = function () {

    if(this.logoChoosed){
        this.container.nextElementSibling.classList.toggle("invisible");
    }
};