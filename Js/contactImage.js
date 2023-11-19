
const rotatingImage = document.getElementById('rotating-image');
const imageSources = ['../images/Bouton/Picto_Tel-1.png', '../images/Bouton/Picto_Tel-2.png', '../images/Bouton/Picto_Tel-3.png']; 
 // Ajoutez plus de chemins d'images au besoin
let currentImageIndex = 0;

function rotateImage() {
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    rotatingImage.src = imageSources[currentImageIndex];
}

setInterval(rotateImage, 1000); // Changez les images toutes les 1 seconde (ajustez l'intervalle au besoin)
