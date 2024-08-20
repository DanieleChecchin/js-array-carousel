// FASE DI PREPARAZIONE

// Preparo le sorgenti delle immagini per poterle inserire nel DOM
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp']

// Prendo gli elementi di mio interesse dal DOM
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselGallery = document.querySelector('.gallery'); // Prendo la galleria dal DOM per poterci generare le immagini dentro

// Genero le immagini
let imgs = ''; // Preparo la stringa vuota

for(let i = 0; i < sources.length; i++){ // Ciclo una volta per ogni elemento dell'array
    imgs += `<img alt='image-${i + 1}' src='${sources[i]}'>`; // Aggiunto il tag immagine dentro la stringa vuota (riga 12)
}

carouselGallery.innerHTML = imgs; // Inserisco le immagini nel div gallery

const images = document.querySelectorAll('#carousel img');

// Attribuisco la classe active alla prima immagine (come fatto prima su html) per rendere visibile la prima immagine
let currentImage = 0;
images[currentImage].classList.add('active');
