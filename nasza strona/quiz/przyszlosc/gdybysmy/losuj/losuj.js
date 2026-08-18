const messages = [

    "Jesteś przystojny w chuuuuuj. ❤️",

    "Jesteś najprzystojniejszym chłopakiem na świecie i nie przyjmuję sprzeciwu.",

    "Jesteś najbardziej troskliwym człowiekiem, jakiego znam.",

    "Jesteś najlepszym chłopakiem, jakiego mogłam sobie wymarzyć.",

    "Masz w sobie coś, czego nie ma nikt inny.",

    "Uwielbiam to, jak się o mnie martwisz.",

    "Masz ogromne serce, nawet jeśli czasami sam tego nie widzisz.",

    "Jesteś dobrym człowiekiem. Naprawdę dobrym.",

    "Kocham Twój uśmiech.",

    "Kocham Twój głos.",

    "Kocham nasze nocne rozmowy.",

    "Uwielbiam nasze głupie żarty, których nikt poza nami nie rozumie.",

    "Jesteś moim ulubionym człowiekiem.",

    "Jesteś moim ulubionym chaosem.",

    "Przy Tobie mogę być najbardziej pojebaną wersją siebie.",

    "Jesteś osobą, do której zawsze chcę wracać.",

    "Jesteś moim bezpiecznym miejscem.",

    "Kocham to, że pamiętasz o małych rzeczach.",

    "Jesteś dużo bardziej kochany, niż Ci się wydaje.",

    "Jesteś jednym z najważniejszych ludzi w moim życiu.",

    "Nie zamieniłabym Cię na nikogo.",

    "Nawet jak mnie wkurzasz jak nikt inny, nadal jesteś moją ulubioną osobą.",

    "Kocham nasze zwykłe dni.",

    "Kocham nasze spontaniczne wypady.",

    "Kocham każde nasze nicnierobienie.",

    "Jesteś moim najlepszym przypadkiem w życiu.",

    "Jestem dumna, że mogę nazywać Cię swoim chłopakiem.",

    "Gdybym mogła wybrać jeszcze raz, znowu wybrałabym Ciebie.",

    "Jesteś moim chłopakiem, ale przede wszystkim jesteś moim człowiekiem.",

    "Kocham Cię bardziej, niż potrafię Ci powiedzieć.",

    "TY KUTASIE, ALE CIĘ KOCHAM. ❤️",

    "Jesteś moim ulubionym idiotą.",

    "Chcę z Tobą przeżyć jeszcze milion zwykłych dni.",

    "Kocham nas. Nawet z całym naszym chaosem.",

    "Jesteś osobą, którą chcę mieć obok siebie za wiele lat."

];

const wheel = document.getElementById("wheel");
const button = document.getElementById("spinButton");
const message = document.getElementById("message");

let rotation = 0;
let spinning = false;

button.addEventListener("click", () => {

    if (spinning) return;

    spinning = true;
    button.disabled = true;

    const randomIndex =
        Math.floor(Math.random() * messages.length);

    const extraRotation =
        1440 + Math.floor(Math.random() * 1440);

    rotation += extraRotation;

    wheel.style.transform =
        `rotate(${rotation}deg)`;

    message.textContent = "Losuję dla Ciebie... ❤️";

    setTimeout(() => {

        message.textContent =
            messages[randomIndex];

        spinning = false;
        button.disabled = false;

    }, 4200);

});