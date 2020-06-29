function handlePictures() {

    const picturesInput = document.querySelector("#pictures");
    const picturesContainer = document.querySelector(".sidebar__pictures__container");

    picturesInput.addEventListener("change", updatePictures);


    function updatePictures() {
        if (picturesInput.files.length === 0) {
            picturesContainer.innerHTML = "Your pictures";
        } else {
            picturesContainer.innerHTML = "";
            for (const picture in picturesInput.files) {
                if (picturesInput.files.hasOwnProperty(picture)) {
                    const image = document.createElement("img");
                    image.src = URL.createObjectURL(picturesInput.files[picture]);
                    image.style.height = "60px";
                    image.style.maxWidth = "100%";
                    picturesContainer.appendChild(image);
                    image.onload = function () {
                        URL.revokeObjectURL(this.src);
                    }
                }
            }
        }
    }
}

export default handlePictures;