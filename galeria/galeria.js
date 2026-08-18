const gallery = document.getElementById("gallery");

const photoCount = document.getElementById("photoCount");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxNumber =
    document.getElementById("lightboxNumber");

const lightboxCaption =
    document.getElementById("lightboxCaption");

const closeButton =
    document.getElementById("closeLightbox");

const previousButton =
    document.getElementById("prevPhoto");

const nextButton =
    document.getElementById("nextPhoto");


const totalPhotos = 34;

let currentPhoto = 1;


// ======================================
// LICZNIK
// ======================================

photoCount.textContent = totalPhotos;


// ======================================
// TWORZENIE ZDJĘĆ
// ======================================

for (let i = 1; i <= totalPhotos; i++) {

    const card =
        document.createElement("div");

    card.className = "photo-card";


    const image =
        document.createElement("img");

    image.src = `foto (${i}).jpg`;

    image.alt =
        `Wiktor & Zuzia — Memory ${i}`;

    image.loading = "lazy";


    const overlay =
        document.createElement("div");

    overlay.className =
        "photo-overlay";


    overlay.innerHTML = `
        <span>
            MEMORY ${String(i).padStart(2, "0")}
        </span>

        <strong>
            Nasze wspomnienie ❤️
        </strong>
    `;


    card.appendChild(image);

    card.appendChild(overlay);


    // ==================================
    // BŁĄD ZDJĘCIA
    // ==================================

    image.onerror = function () {

        card.style.display = "none";

        console.log(
            `Nie znaleziono: foto (${i}).jpg`
        );

    };


    // ==================================
    // OTWIERANIE
    // ==================================

    card.addEventListener(
        "click",
        function () {

            currentPhoto = i;

            updateLightbox();

            lightbox.classList.add(
                "active"
            );

            document.body.style.overflow =
                "hidden";

        }
    );


    gallery.appendChild(card);

}


// ======================================
// LIGHTBOX
// ======================================

function updateLightbox() {

    lightboxImage.src =
        `foto (${currentPhoto}).jpg`;


    lightboxImage.alt =
        `Wiktor & Zuzia — Memory ${currentPhoto}`;


    lightboxNumber.textContent =
        `MEMORY ${String(currentPhoto).padStart(2, "0")} / ${totalPhotos}`;


    lightboxCaption.textContent =
        "Nasze wspomnienie ❤️";

}


// ======================================
// NASTĘPNE
// ======================================

function nextPhoto() {

    currentPhoto++;

    if (currentPhoto > totalPhotos) {

        currentPhoto = 1;

    }

    updateLightbox();

}


// ======================================
// POPRZEDNIE
// ======================================

function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 1) {

        currentPhoto = totalPhotos;

    }

    updateLightbox();

}


// ======================================
// PRZYCISKI
// ======================================

nextButton.addEventListener(
    "click",
    nextPhoto
);


previousButton.addEventListener(
    "click",
    previousPhoto
);


closeButton.addEventListener(
    "click",
    closeLightbox
);


// ======================================
// ZAMYKANIE
// ======================================

function closeLightbox() {

    lightbox.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


// ======================================
// KLIKNIĘCIE W TŁO
// ======================================

lightbox.addEventListener(
    "click",
    function (event) {

        if (
            event.target === lightbox ||
            event.target.classList.contains(
                "lightbox-bg"
            )
        ) {

            closeLightbox();

        }

    }
);


// ======================================
// KLAWIATURA
// ======================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            !lightbox.classList.contains(
                "active"
            )
        ) {

            return;

        }


        if (event.key === "Escape") {

            closeLightbox();

        }


        if (event.key === "ArrowRight") {

            nextPhoto();

        }


        if (event.key === "ArrowLeft") {

            previousPhoto();

        }

    }
);