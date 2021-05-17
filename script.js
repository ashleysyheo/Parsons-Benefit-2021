let mainImage = document.getElementById('main-image');

window.onload = () => {
    if (document.body.clientWidth < 600) {
        mainImage.src= "./images/main_mobile.png";
    } else {
        mainImage.src= "./images/main_web.png";
    }
};