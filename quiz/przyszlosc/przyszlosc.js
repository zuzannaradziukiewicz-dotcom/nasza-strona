const futureThings = [

    "Wykąpać się razem nago w jeziorze Krawiec w nocy.",

    "Pojechać gdzieś samochodem bez nawigacji i zobaczyć, gdzie trafimy.",

    "Posiedzieć razem przy ognisku do późnej nocy.",

    "Pójść na naprawdę długi nocny spacer.",

    "Śpiewać razem „Noc” White 2115 gdzieś późną nocą.",

    "Pojechać razem nad jezioro.",

    "Zobaczyć razem wschód słońca.",

    "Zobaczyć razem zachód słońca w pięknym miejscu.",

    "Pojechać spontanicznie do innego miasta.",

    "Zrobić sobie cały dzień bez telefonów.",

    "Spędzić całą noc rozmawiając.",

    "Zrobić nocny piknik.",

    "Pojechać razem na spontaniczny weekend.",

    "Zrobić road trip tylko we dwoje.",

    "Przejechać się gdzieś tylko po jedzenie.",

    "Pojechać razem jeszcze raz do Poznania.",

    "Zrobić dzień dokładnie taki jak nasz dzień w Poznaniu.",

    "Zrobić wspólny album ze zdjęciami.",

    "Napisać sobie listy do otworzenia za kilka lat.",

    "Zrobić kapsułę czasu.",

    "Nagrać film, który obejrzymy za 10 lat.",

    "Znaleźć nowe miejsce, które stanie się tylko nasze.",

    "Zrobić sobie zdjęcie w każdym ważnym dla nas miejscu.",

    "Zrobić randkę za 20 zł.",

    "Zrobić randkę bez żadnego budżetu.",

    "Zrobić razem ogromne Lego.",

    "Zagrać razem w Robloxa po wielu latach.",

    "Zagrać w Ludo Club i zrobić rewanż za każdą przegraną.",

    "Zrobić razem domową pizzę.",

    "Zrobić razem gofry o północy.",

    "Zrobić razem lody z Nutellą.",

    "Zrobić sobie noc filmową.",

    "Pojechać razem w góry.",

    "Spędzić noc pod namiotem.",

    "Zrobić piknik tylko we dwoje.",

    "Oglądać razem meteoryty.",

    "Oglądać razem kolejne zaćmienie.",

    "Przeżyć razem coś całkowicie spontanicznego o 2 w nocy.",

    "Zrobić kolejne wspomnienie, którego nikt poza nami nie zrozumie.",

    "Kiedyś spojrzeć na tę stronę razem i powiedzieć: „Kurwa, ale dużo razem przeżyliśmy.” ❤️"

];

const list = document.getElementById("futureList");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

let completed = JSON.parse(
    localStorage.getItem("wiktorZuziaFuture") || "[]"
);

function render() {

    list.innerHTML = "";

    futureThings.forEach((thing, index) => {

        const item = document.createElement("div");

        item.className = "future-item";

        if (completed.includes(index)) {
            item.classList.add("completed");
        }

        item.innerHTML = `
            <div class="check">✓</div>
            <p>${thing}</p>
        `;

        item.addEventListener("click", () => {

            if (completed.includes(index)) {

                completed =
                    completed.filter(i => i !== index);

            } else {

                completed.push(index);

            }

            localStorage.setItem(
                "wiktorZuziaFuture",
                JSON.stringify(completed)
            );

            render();
        });

        list.appendChild(item);
    });

    updateProgress();
}

function updateProgress() {

    const total = futureThings.length;
    const done = completed.length;

    progressText.textContent =
        `${done} / ${total} ZREALIZOWANYCH`;

    progressFill.style.width =
        `${(done / total) * 100}%`;
}

render();