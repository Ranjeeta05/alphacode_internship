const images = document.querySelectorAll(".gallery img");

let currentIndex = 0;

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

lightbox.innerHTML = `
    <button id="close">&times;</button>
    <button id="prev">&#10094;</button>
    <img id="lightbox-image">
    <button id="next">&#10095;</button>
`;

document.body.appendChild(lightbox);

const lightboxImage = document.getElementById("lightbox-image");

function showImage(index) {
    currentIndex = index;
    lightboxImage.src = images[currentIndex].src;
    lightbox.style.display = "flex";
}

images.forEach((image, index) => {
    image.addEventListener("click", () => showImage(index));
});

document.getElementById("close").onclick = () => {
    lightbox.style.display = "none";
};

document.getElementById("next").onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImage.src = images[currentIndex].src;
};

document.getElementById("prev").onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImage.src = images[currentIndex].src;
 };
  function filterImages(category) {
    images.forEach((image) => {
        if (category === "all" || image.dataset.category === category) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
}