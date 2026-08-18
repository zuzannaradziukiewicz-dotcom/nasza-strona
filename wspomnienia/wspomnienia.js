const memories = [
    {
        title: "Pod monopolowym",
        text: "To chyba jedno z tych wspomnień, od których wszystko się zaczęło. Byłam z Hanią dzień po moich urodzinach. Miałyśmy wypić sobie wino i wtedy stwierdziłyśmy, że napiszemy do Neli. Nela powiedziała, że Wiktor może nam kupić jeszcze jedno. I wtedy pojawił się Wiktor ze swoją ekipą pod monopolowym. Kupił mi wino, a później poszliśmy razem do parku. Siedzieliśmy wszyscy razem, a później odprowadził mnie i Hanię do domu. Niby zwykły wieczór, a dzisiaj wiem, że był początkiem czegoś naprawdę ważnego."
    },

    {
        title: "Pierwsza rozmowa z Jankiem",
        text: "Pierwsza nasza rozmowa była właściwie przez Janka. Byłam wtedy u Hani i zaczęliśmy gadać. To była zwykła rozmowa, ale właśnie od takich zwykłych rzeczy zaczęła się cała nasza historia."
    },

    {
        title: "Menel pod monopolowym",
        text: "Pamiętam tego mena, który leżał pod innym monopolowym. Wiktor wezwał karetkę, bo nie przeszedł obok niego obojętnie. Ja przykryłam go swoją kurtką. Wiktor wtedy powiedział coś w stylu „wow”. Nie wiedziałam jeszcze, że takie małe momenty będą kiedyś częścią naszej historii."
    },

    {
        title: "Pierwsze spotkania w parku",
        text: "Następnego dnia znowu poszliśmy do parku. Wiktor powiedział, żebym napisała następnego dnia, czy będę. Napisałam, że będę. On się napił, zawołał mnie na słówko, a później opierał się o mnie, nie o ławkę. Tadek chciał go wtedy najebać bo był zazdrosny, i Ziajka też się próbował. To był początek tych wszystkich naszych parkowych historii."
    },

    {
        title: "„A gdybym zapytał o związek?”",
        text: "Po około tygodniu znajomości siedzieliśmy na ławce w parku. Podszedł jego kolega i zapytał, czy jesteśmy razem. Powiedzieliśmy, że jeszcze nie. Kiedy odszedł, Wiktor zapytał: „A gdybym się zapytał o związek, to byś się zgodziła?”. Zapytałam, czy na serio czy po pijaku. Powiedział, że na serio. Powiedziałam, że wtedy bym się zgodziła. I wtedy zapytał: „To zostaniesz?”. Powiedziałam, że tak."
    },

    {
        title: "Ławka na Waryńskiego",
        text: "Zanim jeszcze zaczęłam przychodzić do niego do domu, mieliśmy swoją ławkę na placu zabaw na osiedlu Waryńskiego. Siedzieliśmy zawsze na tej samej ławce, śpiewaliśmy Ninot i po prostu byliśmy razem. To było naprawdę piękne. Szkoda, że tej ławki już nie ma."
    },

    {
        title: "Pierwszy raz u niego w domu",
        text: "Pierwszy raz u Wiktora w domu byłam z Jankiem. To też było śmieszne, bo praktycznie przy każdej naszej pierwszej rzeczy pojawiał się jakiś dodatkowy chaos."
    },

    {
        title: "Wiktor bał się do mnie przyjechać",
        text: "Pamiętam, jak bardzo stresował się, żeby do mnie przyjechać. Znajdował każdą możliwą wymówkę, żeby tylko nie przyjechać. Dzisiaj mnie to bawi, bo później tyle razy przyjeżdżał do mnie, że ten cały stres wydaje się absurdalny."
    },

    {
        title: "„Nie jesteśmy razem”",
        text: "Wstydził się powiedzieć, że jesteśmy razem. Powiedziałam dziewczynom, że jesteśmy razem, a następnego dnia one zapytały go o to wprost. I Wiktor powiedział, że nie. Później mieliśmy kosę. Jedna z tych sytuacji, które wtedy bolały, a dzisiaj są po prostu częścią naszej historii."
    },

    {
        title: "Liść z kebaba",
        text: "Ostatnio szliśmy z moją siostrą, byliśmy na kebabie, a Wiktor zerwał mi jakiś liść i mi go dał. Ja wsadziłam go w spodnie i nadal go noszę. Niby kompletnie bezsensowna rzecz, ale właśnie takie małe rzeczy pamiętam najbardziej."
    },

    {
        title: "Pierwsze kwiaty po kłótni",
        text: "Pokłóciliśmy się, a później Wiktor pojechał i kupił mi kwiaty. Przyjechał do mnie z nimi po naszej kłótni. I chyba właśnie dlatego pamiętam je tak mocno — nie były po prostu kwiatami, tylko jego sposobem na pokazanie, że mimo wszystko mu zależy."
    },

    {
        title: "Kłótnia o Londyn",
        text: "Nasza kłótnia o Londyn. Dużo emocji, dużo złości i dużo rzeczy, które wtedy wydawały się ogromne. Dzisiaj jest już jednym z rozdziałów naszej historii."
    },

    {
        title: "Pierwsza nocka u siostry",
        text: "Pierwsza nasza nocka była u mojej siostry. Lało, Wiktor był u nas i nie miał jak wrócić. Było rzyganie, chaos i kompletny brak normalności. Czyli w skrócie: bardzo nasze."
    },

    {
        title: "Opel z jego tatą",
        text: "Jak jeździliśmy Oplem z jego tatą. Kolejne zwykłe momenty, które z czasem zaczęły mieć dla mnie znaczenie."
    },

    {
        title: "Malik w Dębnie",
        text: "Pojechaliśmy razem na Malika w Dębnie. Kolejna wspólna wyprawa, kolejny wieczór, który wtedy był po prostu naszym wieczorem, a teraz jest wspomnieniem."
    },

    {
        title: "Nielegalna nocka",
        text: "Miałam spać u Hani, tak przynajmniej myśleli moi rodzice. A tak naprawdę spałam u Wiktora. Jedna z naszych małych tajemnic i jedna z tych nocy, które zapamiętałam na długo."
    },

    {
        title: "Boże Ciało i park",
        text: "Tak się napiłam na Boże Ciało, że skończyłam rzygając w parku. Wiktor mnie wtedy ogarniał i się mną zajmował. Zdecydowanie nie był to mój najbardziej elegancki wieczór, ale na pewno jeden z tych, których nie zapomnę."
    },

    {
        title: "Nudziliśmy się u mnie",
        text: "Tak się nudziliśmy u mnie w domu, że w końcu stwierdziliśmy, że wracamy do niego. Bez wielkiego planu, po prostu razem. I właśnie takich spontanicznych momentów mieliśmy mnóstwo."
    },

    {
        title: "Nasze wypady na KRAWCA",
        text: "Nasze wszystkie wypady na KRAWCA. Dużo ludzi, dużo chaosu i dużo historii. Każdy taki wyjazd miał swój własny klimat. Właśnie na jednym z nich Janek pobił Giełga, więc zdecydowanie nie dało się tam nudzić."
    },

    {
        title: "Tipo mojej siostry",
        text: "Jak moja siostra pojechała na wakacje, a my zabraliśmy jej Tipo i siedzieliśmy sobie tam w nocy. Jedna z tych kompletnie randomowych historii, które do dzisiaj pamiętam."
    },

    {
        title: "Sushi w parku",
        text: "Jedliśmy ostatnio sushi w parku. I właśnie takie momenty kocham najbardziej. Bez wielkiej okazji, bez wielkiego planu. Po prostu Ty, ja, jedzenie i zwykły dzień, który nagle stał się wspomnieniem."
    },

    {
        title: "Barber w Gorzowie",
        text: "Byliśmy razem u Barbera w Gorzowie. Kolejna wspólna wyprawa i kolejny dzień spędzony razem."
    },

    {
        title: "Poznań",
        text: "Poznań to chyba jedno z najpiękniejszych wspomnień, jakie mam. Mogliśmy razem spać, budzić się, kąpać, robić jedzenie, wychodzić na miasto i chodzić razem do restauracji. Mieliśmy po prostu czas dla siebie. To było naprawdę piękne."
    },

    {
        title: "Śrubokręt",
        text: "Jedna z tych historii, które dzisiaj brzmią absurdalnie. Tak bardzo się wtedy wkurzyłam, że emocje kompletnie mnie poniosły. Nie chcę pamiętać tego jako czegoś fajnego, ale pamiętam ten moment jako część naszej bardzo chaotycznej historii."
    },

    {
        title: "Kanapa mojej siostry",
        text: "Wiktor składał kanapę mojej siostry. Zwykła rzecz, ale właśnie z takich zwykłych sytuacji składa się wspólne życie."
    },

    {
        title: "Wszystkie rowery",
        text: "Wszystkie razy, kiedy Wiktor jeździł do mnie rowerem albo przyjeżdżał po mnie. Czasami specjalnie tylko po to, żeby się zobaczyć."
    },

    {
        title: "Mama po mnie przyjechała",
        text: "Miałam spać u Wiktora, ale moja mama przyjechała po mnie, bo myślała, że miałam spać u Hani. Jedna z tych sytuacji, w których wszystko miało wyglądać inaczej, a wyszło kompletnie inaczej."
    },

    {
        title: "Kierownica u Damiana",
        text: "Graliśmy na kierownicy u Damiana i u Wiktora. Kolejna rzecz, przy której potrafiliśmy siedzieć razem i po prostu dobrze się bawić."
    },

    {
        title: "Roblox",
        text: "Nasze wspólne granie w Robloxa. Czasami robiliśmy kompletnie głupie rzeczy, ale właśnie wtedy było najwięcej śmiechu."
    },

    {
        title: "Ludo Club",
        text: "Nasze granie w Ludo Club. Niby zwykła gra, a jednak kolejna rzecz, która kojarzy mi się z naszymi wspólnymi chwilami."
    },

    {
        title: "Nocne zwierzanie się",
        text: "Te wszystkie noce, kiedy siedzieliśmy i mówiliśmy sobie rzeczy, których nie mówiliśmy innym. Rozmowy do późna, zwierzanie się i poczucie, że mogę powiedzieć Ci wszystko."
    },

    {
        title: "Menel patrzący na mnie",
        text: "Na początku naszego związku jakiś typ spojrzał na mnie w sposób, który Wiktorowi zdecydowanie się nie spodobał. Od początku potrafił być o mnie zazdrosny i gotowy do obrony."
    },

    {
        title: "Melanże",
        text: "Nasze melanże u Nadi, u Kopanieckiego i u Anielki. Każdy miał swój własny chaos, ludzi i historie, które zostały z nami."
    },

    {
        title: "Kasyno z Jankiem",
        text: "Kasyno z Jankiem. Kolejna randomowa historia, którą ciężko byłoby wytłumaczyć komuś z zewnątrz, ale dla nas wystarczy sam tytuł."
    },

    {
        title: "Dni KOSTRZYNA",
        text: "Jak gadaliśmy z prezesem Dni KOSTRZYNA. Kolejna kompletnie losowa sytuacja, która jakoś znalazła swoje miejsce w naszej historii."
    },

    {
        title: "Gofry rano",
        text: "Jedliśmy gofry rano o 13 po nocce u mnie. Jedzenie na śniadanie po nocnym czuwaniu, zmęczenie i my razem. Jedno z tych małych domowych wspomnień, które naprawdę lubię."
    },

    {
        title: "Nasze NOCKI",
        text: "Wszystkie noce, które spędziliśmy razem. Małe ślady naszych wspólnych chwil."
    },

    {
        title: "Naprawianie zegara",
        text: "Wiktor próbował mi naprawić zegar. Uwielbiam takie momenty, kiedy po prostu coś robi dla mnie, nawet jeśli jest to jakaś mała, zwykła rzecz."
    },

    {
        title: "Kozel na kamerce",
        text: "Jak piłam Kozela na kamerce. Dla kogoś z zewnątrz kompletnie randomowe wspomnienie. Dla mnie jedno z tych, które od razu wywołuje uśmiech."
    },

    {
        title: "Jego ciuchy",
        text: "Jak ubierał mnie w swoje ciuchy. Jego bluzy, jego rzeczy i to uczucie, że jestem trochę bardziej u niego, nawet kiedy po prostu siedzieliśmy razem."
    },

    {
        title: "Bidon KFD",
        text: "Jego bidon z KFD. Jedna z tych małych rzeczy, które są tak charakterystyczne dla niego, że wystarczy je zobaczyć i od razu myślę o Wiktorze."
    },

    {
        title: "Lima u Janka",
        text: "Byliśmy u Janka i Lima mnie podrapała swoimi szponami. Dosłownie mnie nimi nacięła. Kolejne wspomnienie, którego zdecydowanie nie da się pomylić z żadnym innym."
    },

    {
        title: "Moje włosy w jego zlewie",
        text: "Miałam tłuste włosy i skończyło się na tym, że myłam je u niego w zlewie. Romantycznie? Niekoniecznie. Nasze? W stu procentach."
    },

    {
        title: "Urodziny jego dziadka",
        text: "Byłam na urodzinach jego dziadka. To był jeden z momentów, kiedy coraz bardziej poznawałam jego świat i jego rodzinę."
    },

    {
        title: "Poznanie jego rodziny",
        text: "Poznałam jego rodzinę po powrocie z Londynu. To było dla mnie ważne, bo poczułam, że coraz bardziej jestem częścią jego życia."
    },

    {
        title: "Lego",
        text: "Składaliśmy razem Lego. Zwykła rzecz, spokojny czas i po prostu bycie obok siebie."
    },

    {
        title: "Pizza z HANKA",
        text: "Byliśmy po pizzę z HANKA. Kolejna z tych naszych zwykłych wypraw, które wtedy wydawały się niczym wielkim, a teraz są wspomnieniami."
    },

    {
        title: "Meteoryty",
        text: "Oglądaliśmy razem meteoryty. Patrzenie w niebo obok osoby, którą kochasz, ma w sobie coś niesamowitego."
    },

    {
        title: "Zaćmienie Słońca",
        text: "Oglądaliśmy razem zaćmienie Słońca. Jeden z tych momentów, kiedy świat na chwilę wydaje się trochę inny, a Ty pamiętasz przede wszystkim, z kim wtedy byłaś."
    },

    {
        title: "Rozprawka o miłości",
        text: "Napisał mi rozprawkę o tym, jak mnie kocha. Nie do szkoły, tylko dla mnie. Dla mnie kolejny mały gest, który pokazywał, że naprawdę do mnie trafia."
    },

    {
        title: "„Kocha mnie na dwa kilometry”",
        text: "Nasze powiedzenie, że kocha mnie na dwa kilometry. Jedno z tych głupich zdań, które stały się po prostu nasze."
    },

    {
        title: "Obiad z jego rodzicami",
        text: "Jego rodzice zabrali mnie na obiad. To było naprawdę miłe i dało mi poczucie, że jestem coraz bardziej częścią jego rodziny."
    },

    {
        title: "Bransoletka z gór",
        text: "Kupił mi bransoletkę w górach. Mały prezent, ale takie rzeczy zostają ze mną na długo."
    },

    {
        title: "Taras i doniczka",
        text: "Jedna z najbardziej absurdalnych historii. Gadaliśmy, a Wiktor poszedł na taras i zrobił coś, czego zdecydowanie nie planował pokazywać. Do dzisiaj jest to jedno z tych wspomnień, przy których zaczynam się śmiać."
    },

    {
        title: "Traktor z DAMIANEM",
        text: "Jeżdżenie traktorem z DAMIANEM. Kompletnie randomowe, ale właśnie dlatego tak bardzo nasze."
    },

    {
        title: "Drama o ryby",
        text: "Nasza drama przez to, że Wiktor pojechał na ryby. Bo oczywiście nawet zwykły wyjazd na ryby potrafił u nas stać się wydarzeniem."
    },

    {
        title: "Sprzątanie jego pokoju",
        text: "Sprzątanie jego pokoju i oczywiście kolejna drama. Jak już coś robimy razem, najwyraźniej nie może być zbyt spokojnie."
    },

    {
        title: "Lody z Nutellą",
        text: "Robił nam lody z Nutellą. Jeden z tych prostych, domowych momentów, które są dla mnie naprawdę ciepłym wspomnieniem."
    },

    {
        title: "Serki, Fanta, Twix i M&M'sy",
        text: "Przyniósł dobre serki, Fantę, Twixa i M&M'sy. Niby zakupy, niby nic wielkiego, ale właśnie takie małe rzeczy pokazują mi, że o mnie myśli."
    },

    {
        title: "Nasze zmartwienie",
        text: "Był też moment, kiedy oboje martwiliśmy się, że będę miała baby. Dużo stresu, dużo myśli i dużo emocji. Kolejny trudniejszy fragment naszej historii."
    },

    {
        title: "Pizza w Barabu",
        text: "Nasza pizza w Barabu i moje miliony dolewanego oleju. Nie wiem, jak można dać tyle oleju na pizzę, ale najwyraźniej można."
    },

    {
        title: "Wszystkie kebaby",
        text: "Wszystkie nasze kebaby. Było ich tyle, że spokojnie można by zrobić osobną kategorię tylko na nie."
    },

    {
        title: "„Nie pij tyle”",
        text: "Wiktor zawsze mówi mi: „Nie pij tyle, nie pij”. Ja oczywiście odpowiadam: „Obiecuję, że nie będę pić”. A później wiadomo, jak to się kończy. Chyba jedna z najbardziej stałych rzeczy w naszym związku."
    },

    {
        title: "Poznań — cały nasz dzień",
        text: "W Poznaniu mogliśmy razem spać, budzić się, kąpać, robić jedzenie, wyjść na miasto i pójść razem do restauracji. Nie musieliśmy się nigdzie spieszyć. Mogliśmy po prostu być razem. I właśnie dlatego Poznań jest dla mnie jednym z najpiękniejszych wspomnień."
    },

    {
        title: "Wszystkie małe rzeczy",
        text: "Tak naprawdę najważniejsze są chyba nie wielkie wydarzenia, tylko te wszystkie małe rzeczy. Jego ciuchy, bidon, wspólne jedzenie, siedzenie na ławce, jazda rowerem, rozmowy w nocy, głupie żarty i zwykłe dni. To właśnie z nich powstało nasze „my”."
    }
];

const container = document.getElementById("memories");
const counter = document.getElementById("memoryCount");

const modal = document.getElementById("memoryModal");
const modalNumber = document.getElementById("modalNumber");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

if (!container) {
    console.error("Nie znaleziono elementu #memories.");
}

if (!counter) {
    console.error("Nie znaleziono elementu #memoryCount.");
}

if (container && counter) {

    counter.textContent = memories.length;

    memories.forEach((memory, index) => {

        const card = document.createElement("article");

        card.className = "memory-card";

        card.style.animationDelay = `${index * 0.025}s`;

        const preview =
            memory.text.length > 120
                ? memory.text.substring(0, 120) + "..."
                : memory.text;

        card.innerHTML = `
            <div class="memory-number">
                MEMORY ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="memory-heart">
                ♡
            </div>

            <h2>
                ${memory.title}
            </h2>

            <p>
                ${preview}
            </p>

            <div class="read-more">
                CZYTAJ WSPOMNIENIE →
            </div>
        `;

        card.addEventListener("click", () => {

            modalNumber.textContent =
                `MEMORY ${String(index + 1).padStart(2, "0")} / ${String(memories.length).padStart(2, "0")}`;

            modalTitle.textContent = memory.title;

            modalText.textContent = memory.text;

            modal.classList.add("active");

            document.body.style.overflow = "hidden";
        });

        container.appendChild(card);
    });
}

function closeMemory() {

    modal.classList.remove("active");

    document.body.style.overflow = "";
}

closeModal.addEventListener("click", closeMemory);

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        closeMemory();
    }

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeMemory();
    }

});