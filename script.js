// FASE DI PREPARAZIONE

// Preparo le sorgenti delle immagini per poterle inserire nel DOM
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

// Prendo gli elementi di mio interesse dal DOM
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselGallery = document.querySelector('.gallery'); // Prendo la galleria del carosello dal DOM per poterci generare le immagini dentro
const thumbGallery = document.getElementById('thumbnails'); // Prendo la galleria delle miniature dal DOM per poterci generare le immagini dentro

// Genero le immagini
let imgs = ''; // Preparo la stringa vuota

for(let i = 0; i < sources.length; i++){ // Ciclo una volta per ogni elemento dell'array
    imgs += `<img alt='image-${i + 1}' src='${sources[i]}'>`; // Aggiunto il tag immagine dentro la stringa vuota (riga 12)
}

carouselGallery.innerHTML = imgs; // Inserisco le immagini nel div gallery
thumbGallery.innerHTML = imgs; // Inserisco le immagini delle miniature

const images = document.querySelectorAll('#carousel img'); // Raccolgo le immagini del carosello
const thumbs = document.querySelectorAll('#thumbnails img'); // Raccolgo le immagini delle miniature

// Attribuisco la classe active alla prima immagine (come fatto prima su html) per rendere visibile la prima immagine
let currentImage = 0;
images[currentImage].classList.add('active');
thumbs[currentImage].classList.add('active')

// EVENTI DINAMICI

// Next
nextButton.addEventListener('click', function(){
    images[currentImage].classList.remove('active'); // Tolgo la classe active all'immagine che ce l'ha
    thumbs[currentImage].classList.remove('active'); // Tolgo la classe active all'immagine che ce l'ha

    currentImage++; // Incremento l'indice, quindi passo all'immagine successiva

    if(currentImage === images.length){  // Controllo se ho superato l'indice massimo dell'array e nel caso riporto l'indice a 0. Così facendo ricomincio il giro
        currentImage = 0;
    }

    images[currentImage].classList.add('active'); // Aggiungo la classe active all'immagine successiva
    thumbs[currentImage].classList.add('active'); // Aggiungo la classe active all'immagine successiva
});

// Prev
prevButton.addEventListener('click', function(){
    images[currentImage].classList.remove('active'); // Tolgo la classe active all'immagine che ce l'ha
    thumbs[currentImage].classList.remove('active'); // Tolgo la classe active all'immagine che ce l'ha

    currentImage--; // Decremento l'indice, quindi passo all'immagine precedente

    if(currentImage < 0){
        currentImage = images.length - 1; // Controllo se l'indice dell'array va in negativo (faccio indietro quando sono nella prima img) e nel caso riporto l'indice a 4. Così facendo ricomincio il giro
    }

    images[currentImage].classList.add('active'); // Aggiungo la classe active all'immagine precedente
    thumbs[currentImage].classList.add('active'); // Aggiungo la classe active all'immagine precedente
});

// Per ogni thumbnails

for(let i = 0; i < thumbs.length; i++){
    const thumbnail = thumbs[i]; // Per ogni singolo thumb

    thumbnail.addEventListener('click', function(){ // Quando clicco su un thumb reagisco all'evento del click
        images[currentImage].classList.remove('active'); // Tolgo la classe active all'immagine che ce l'ha
        thumbs[currentImage].classList.remove('active'); // Tolgo la classe active all'immagine che ce l'ha

        // Imposto il valore dell'indice in base al valore del thumb
        currentImage = i;

        images[currentImage].classList.add('active'); // Aggiungo la classe active all'immagine precedente
        thumbs[currentImage].classList.add('active'); // Aggiungo la classe active all'immagine precedente

    })
}


