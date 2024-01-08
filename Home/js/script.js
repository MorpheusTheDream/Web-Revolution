const image = document.getElementById('image');
const slide = document.querySelector('.slide');
const wallpaper = document.querySelector('.wallpaper');

wallpaper.style.backgroundImage = "linear-gradient( to bottom, ghostwhite, rgba(90, 5, 5, .3)";
wallpaper.style.transition = `.5s`;

let isi = 0;

const img = ["PGR.JPG", "PGR2.JPG", "RE2.JPG", "RE4.JPEG"];
const backColor = ["darkred","green","salmon","skyblue"];

slide.addEventListener ( "click", function() {
    image.style.transition = ".5s";
    image.style.width = "1%";
    image.style.opacity = "0";


    setTimeout( () => {
        image.style.width = "50%";
        image.style.opacity = "1";

        if ( isi == img.length-1) {
            isi = 0;
            image.src = `img/${img[isi]}`;
            wallpaper.style.backgroundImage = `linear-gradient(to bottom, white, ${backColor[isi]})`;
        } else {
            isi ++;
            image.src = `img/${img[isi]}`;
            wallpaper.style.backgroundImage = `linear-gradient(to bottom, white, ${backColor[isi]})`;
        }
    }, 500)


})





