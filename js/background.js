const images = ["1.jpeg", "2.JPG", "3.JPG", "4.JPG", "5.JPG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
