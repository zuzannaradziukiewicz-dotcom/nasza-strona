const questions = [

    {
        question: "Kiedy weszliśmy w związek?",
        answers: [
            "15 kwietnia 2026",
            "17 kwietnia 2026",
            "20 kwietnia 2026",
            "22 kwietnia 2026"
        ],
        correct: 1
    },

    {
        question: "Gdzie zaczęła się jedna z naszych pierwszych historii?",
        answers: [
            "W szkole",
            "U Hani",
            "Pod monopolowym",
            "U Janka"
        ],
        correct: 2
    },

    {
        question: "Co kupił mi Wiktor pod monopolowym?",
        answers: [
            "Kebaba",
            "Wino",
            "Czekoladę",
            "Fantę"
        ],
        correct: 1
    },

    {
        question: "Na jakiej ławce spędzaliśmy dużo czasu na początku?",
        answers: [
            "Na Waryńskiego",
            "W centrum",
            "Przy szkole",
            "Nad jeziorem"
        ],
        correct: 0
    },

    {
        question: "Jaką piosenkę śpiewaliśmy na naszej ławce?",
        answers: [
            "500 Miles",
            "Noc — White 2115",
            "Poka Fejs",
            "Biały Piasek"
        ],
        correct: 1
    },

    {
        question: "Jak nazywa się jezioro, w którym chcę się z Tobą wykąpać nocą?",
        answers: [
            "Miedwie",
            "Krawiec",
            "Barlineckie",
            "Turkusowe"
        ],
        correct: 1
    },

    {
        question: "Co ostatnio jedliśmy w parku?",
        answers: [
            "Pizzę",
            "Kebaba",
            "Sushi",
            "Gofry"
        ],
        correct: 2
    },

    {
        question: "Jaki jest mój charakterystyczny tekst?",
        answers: [
            "Kocham Cię",
            "Daj mi spokój",
            "TY KUTASIE",
            "Nie wiem"
        ],
        correct: 2
    },

    {
        question: "Gdzie mieliśmy jedno z naszych najpiękniejszych wspomnień?",
        answers: [
            "Poznań",
            "Gorzów",
            "Dębno",
            "Szczecin"
        ],
        correct: 0
    },

    {
        question: "Co Wiktor kupił mi po jednej z naszych kłótni?",
        answers: [
            "Pluszaka",
            "Kwiaty",
            "Czekoladę",
            "Perfumy"
        ],
        correct: 1
    },

    {
        question: "Co Wiktor zawsze mówi mi, kiedy piję?",
        answers: [
            "Napij się jeszcze",
            "Nie pij tyle",
            "Idziemy spać",
            "Ja też chcę"
        ],
        correct: 1
    },

    {
        question: "Co robiliśmy razem w nocy po jednej z nocek?",
        answers: [
            "Pizzę",
            "Sushi",
            "Gofry",
            "Burgery"
        ],
        correct: 2
    },

    {
        question: "W co graliśmy razem?",
        answers: [
            "Roblox",
            "Minecraft",
            "Fortnite",
            "Valorant"
        ],
        correct: 0
    },

    {
        question: "W jaką grę graliśmy oprócz Robloxa?",
        answers: [
            "Ludo Club",
            "FIFA",
            "CS",
            "Among Us"
        ],
        correct: 0
    },

    {
        question: "Co oglądaliśmy razem na niebie?",
        answers: [
            "Tylko samoloty",
            "Meteoryty i zaćmienie Słońca",
            "Fajerwerki",
            "Balony"
        ],
        correct: 1
    },

    {
        question: "Co dostałam od Wiktora z gór?",
        answers: [
            "Naszyjnik",
            "Bransoletkę",
            "Pierścionek",
            "Pluszaka"
        ],
        correct: 1
    },

    {
        question: "Co Wiktor próbował mi naprawić?",
        answers: [
            "Telefon",
            "Rower",
            "Zegar",
            "Laptop"
        ],
        correct: 2
    },

    {
        question: "Co nadal mam po jednym z naszych spacerów?",
        answers: [
            "Bilet",
            "Liść od Wiktora",
            "Kamień",
            "Kwiat"
        ],
        correct: 1
    },

    {
        question: "Jakie jest nasze powiedzenie o miłości?",
        answers: [
            "Kocham Cię najbardziej",
            "Na zawsze razem",
            "Kocha mnie na dwa kilometry",
            "Jesteś mój"
        ],
        correct: 2
    },

    {
        question: "Co najbardziej pasuje do naszej historii?",
        answers: [
            "Spokój i cisza",
            "Chaos, miłość i milion randomowych historii",
            "Nuda",
            "Brak dram"
        ],
        correct: 1
    }

];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionNumber =
    document.getElementById("questionNumber");

const scoreElement =
    document.getElementById("score");

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const nextButton =
    document.getElementById("nextButton");

const progress =
    document.getElementById("progress");

function loadQuestion() {

    answered = false;

    const current = questions[currentQuestion];

    questionNumber.textContent =
        `PYTANIE ${currentQuestion + 1} / ${questions.length}`;

    scoreElement.textContent =
        `${score} PKT`;

    questionElement.textContent =
        current.question;

    progress.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    answersElement.innerHTML = "";

    nextButton.style.display = "none";

    current.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className = "answer";

        button.textContent = answer;

        button.addEventListener("click", () => {

            chooseAnswer(button, index);

        });

        answersElement.appendChild(button);
    });
}

function chooseAnswer(button, index) {

    if (answered) return;

    answered = true;

    const correct =
        questions[currentQuestion].correct;

    const buttons =
        document.querySelectorAll(".answer");

    buttons.forEach((btn, i) => {

        btn.classList.add("disabled");

        if (i === correct) {
            btn.classList.add("correct");
        }

    });

    if (index === correct) {

        score++;

        button.classList.add("correct");

    } else {

        button.classList.add("wrong");

    }

    scoreElement.textContent =
        `${score} PKT`;

    nextButton.style.display =
        "inline-block";
}

nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        showResult();

    } else {

        loadQuestion();

    }
});

function showResult() {

    const percentage =
        Math.round(
            (score / questions.length) * 100
        );

    let message;

    if (score === questions.length) {

        message =
            "NIE MAM PYTAŃ. ZNASZ NAS LEPIEJ NIŻ JA. ❤️";

    } else if (score >= 17) {

        message =
            "Ty serio pamiętasz te wszystkie rzeczy?? Jestem pod wrażeniem. ❤️";

    } else if (score >= 13) {

        message =
            "Okej, jednak słuchasz jak Ci gadam. 😭❤️";

    } else if (score >= 9) {

        message =
            "No dobra, coś tam pamiętasz. Ale mogło być lepiej. XD";

    } else {

        message =
            "TY KUTASIE, TY W OGÓLE ZE MNĄ BYŁEŚ? 😭";

    }

    document.querySelector(".quiz-box").innerHTML = `

        <div class="result">

            <h2>
                ${score} / ${questions.length} punktów
            </h2>

            <p>
                ${message}
            </p>

            <p>
                Wynik: ${percentage}%
            </p>

            <button class="restart" onclick="restartQuiz()">
                SPRÓBUJ JESZCZE RAZ
            </button>

        </div>

    `;
}

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    location.reload();
}

loadQuestion();