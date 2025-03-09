const images = [
    "Images/img1.jpg",
    "Images/img2.jpg",
    "Images/img3.jpg",
    "Images/img4.jpg",
    "Images/img5.jpg",
    "Images/img6.jpg",
    "Images/img7.jpg",
    "Images/img8.jpg",
    "Images/img9.jpg",
    "Images/img10.jpg",
    "Images/img11.jpg",
    "Images/img12.jpg",
    "Images/img13.jpg",
    "Images/img14.jpg",
    "Images/img15.jpg",
    "Images/img16.jpg",
    "Images/img17.jpg",
    "Images/img18.jpg",
    "Images/img19.jpg",
    "Images/img20.jpg",
    "Images/img21.jpg",
    "Images/img22.jpg",
    
];

let currentIndex = 0;
const slider = document.getElementById("slider");

function updateImage() {
    slider.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Initialize with the first image
updateImage();