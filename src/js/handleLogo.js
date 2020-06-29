function handleLogo() {

    const logoInput = document.querySelector("#logo");
    const logoContainer = document.querySelector(".sidebar__logo__container");

    logoInput.addEventListener("change", updateLogo);

    function updateLogo() {
        logoContainer.src = URL.createObjectURL(logoInput.files[0]);
        logoContainer.style.height = "60px";
        logoContainer.style.maxWidth = "100%";
        logoContainer.onload = function () {
            URL.revokeObjectURL(this.src);
        }
    }
}

export default handleLogo;