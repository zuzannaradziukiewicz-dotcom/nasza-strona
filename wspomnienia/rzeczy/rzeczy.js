const things = [

    {
        title: "Nie mówię Ci, jak bardzo jestem z Ciebie dumna",
        text: "Czasami patrzę na Ciebie i naprawdę jestem z Ciebie dumna. Nawet jeśli Ci tego nie mówię. Widzę rzeczy, które robisz, widzę jak się starasz i widzę, ile rzeczy potrafisz ogarnąć. Może nie zawsze umiem to powiedzieć, ale naprawdę to zauważam."
    },

    {
        title: "Uwielbiam, kiedy się mną opiekujesz",
        text: "Kiedy pytasz, czy wszystko ze mną okej, czy coś jadłam, czy nie wypiłam za dużo albo czy na pewno dobrze się czuję, czasami odpowiadam Ci normalnie albo się śmieję. Ale w środku naprawdę jest mi wtedy ciepło. Lubię wiedzieć, że ktoś tak bardzo się o mnie martwi."
    },

    {
        title: "Pamiętam małe rzeczy",
        text: "Pamiętam dużo więcej, niż Ci się wydaje. Pamiętam małe gesty, rzeczy, które mi kupiłeś, głupie teksty, nasze żarty, sposób w jaki na mnie patrzysz i rzeczy, które zrobiłeś dla mnie zupełnie bez okazji."
    },

    {
        title: "Twoje bluzy znaczą więcej, niż myślisz",
        text: "Kiedy mam na sobie Twoje rzeczy, czuję się jakoś bliżej Ciebie. Nawet jeśli Ciebie wtedy obok nie ma. Twoja bluza pachnie Tobą i przez chwilę mam wrażenie, jakbyś był obok."
    },

    {
        title: "Lubię patrzeć, kiedy śpisz",
        text: "Czasami po prostu patrzę na Ciebie, kiedy śpisz. I wtedy przypominam sobie, że naprawdę jesteś moją osobą. Bez żadnych kłótni, problemów i całego naszego chaosu. Po prostu Ty."
    },

    {
        title: "Często chcę Cię przytulić, ale nie mówię",
        text: "Są momenty, kiedy najbardziej na świecie chcę po prostu do Ciebie podejść i się przytulić. Czasami jednak zamiast tego zachowuję się chłodno albo udaję, że niczego nie potrzebuję."
    },

    {
        title: "Kocham nasze zwykłe dni",
        text: "Nie tylko wyjazdy, restauracje czy jakieś wielkie wydarzenia. Kocham też siedzenie z Tobą na kanapie, jedzenie kebaba, granie, oglądanie czegoś głupiego, chodzenie bez celu i robienie absolutnie niczego."
    },

    {
        title: "Nawet nasze głupie wspomnienia są dla mnie ważne",
        text: "Te wszystkie randomowe sytuacje, nocne wypady, jedzenie, rowery, Robloxy, Ludo, gofry, kebaby i wszystkie nasze dziwne historie naprawdę są dla mnie ważne. Właśnie z takich rzeczy składa się nasze życie."
    },

    {
        title: "Lubię, kiedy się ze mną wygłupiasz",
        text: "Nie zawsze Ci to pokazuję, ale uwielbiam nasze głupie żarty i momenty, kiedy zachowujemy się jak kompletni idioci. Przy Tobie mogę być naprawdę sobą."
    },

    {
        title: "Czasami boję się, że Cię stracę",
        text: "Nawet jeśli czasami zachowuję się tak, jakbym miała wszystko gdzieś, prawda jest taka, że bardzo dużo dla mnie znaczysz. I właśnie dlatego czasami tak bardzo się boję."
    },

    {
        title: "Kiedy się kłócimy, nadal Cię kocham",
        text: "Nawet kiedy jestem wkurzona. Nawet kiedy mówię rzeczy, których później żałuję. Nawet kiedy zachowuję się jak największy problem na świecie. To, że jestem zła, nigdy nie oznacza, że przestaję Cię kochać."
    },

    {
        title: "Czasami specjalnie jestem złośliwa",
        text: "Czasami wiem, że jestem niemiła. Wiem, że potrafię specjalnie powiedzieć coś, co Cię zaboli. Nie dlatego, że chcę Cię stracić. Wręcz przeciwnie. Czasami po prostu nie umiem inaczej pokazać, że coś mnie zraniło."
    },

    {
        title: "Lubię, kiedy przyjeżdżasz",
        text: "Nawet jeśli czasami mówię „no spoko”, „rób co chcesz” albo zachowuję się, jakbym nie czekała. Prawda jest taka, że kiedy wiem, że jedziesz do mnie, naprawdę się cieszę."
    },

    {
        title: "Twoje przyjazdy są dla mnie ważne",
        text: "Nawet zwykłe przyjechanie do mnie ma dla mnie znaczenie. To jest takie małe potwierdzenie, że chciałeś być właśnie tutaj, ze mną."
    },

    {
        title: "Lubię, kiedy mówisz moje imię",
        text: "Nie wiem dlaczego, ale kiedy mówisz moje imię w ten swój sposób, zawsze zwracam na to uwagę. Są rzeczy, które dla Ciebie mogą być zupełnie zwyczajne, a ja zapamiętuję je na długo."
    },

    {
        title: "Pamiętam, kiedy mnie rozśmieszasz",
        text: "Czasami jestem w złym humorze i nawet nie mam ochoty się uśmiechać, a Ty zrobisz albo powiesz coś głupiego i nagle mi przechodzi. Może nawet nie wiesz, ile razy poprawiłeś mi humor."
    },

    {
        title: "Jesteś częścią mojego codziennego życia",
        text: "Jesteś w moich myślach przy zwykłych rzeczach. Kiedy słyszę piosenkę, widzę coś śmiesznego, mijam jakieś miejsce albo jem coś, co razem jedliśmy, często automatycznie myślę o Tobie."
    },

    {
        title: "Nasza ławka zawsze będzie nasza",
        text: "Nawet jeśli fizycznie już jej nie ma, dla mnie nadal istnieje. Zawsze będę pamiętać siedzenie tam z Tobą, nasze rozmowy i śpiewanie Ninot."
    },

    {
        title: "Poznań był dla mnie wyjątkowy",
        text: "To, że mogliśmy po prostu spędzić ze sobą tyle czasu, było dla mnie naprawdę piękne. Budzenie się obok siebie, jedzenie, kąpanie, wychodzenie i wracanie razem. Chciałabym mieć więcej takich dni."
    },

    {
        title: "Lubię poznawać Twój świat",
        text: "Poznawanie Twojej rodziny, miejsc, ludzi i rzeczy, które są częścią Twojego życia, jest dla mnie ważniejsze, niż czasami pokazuję."
    },

    {
        title: "Twoja rodzina jest dla mnie ważna",
        text: "Kiedy Twoi rodzice zabierają mnie gdzieś albo kiedy jestem na rodzinnych wydarzeniach, naprawdę czuję się wtedy trochę bardziej częścią Twojego świata. To dla mnie dużo znaczy."
    },

    {
        title: "Uwielbiam nasze nocne rozmowy",
        text: "Te momenty, kiedy możemy siedzieć długo i mówić sobie rzeczy, których normalnie nikomu byśmy nie powiedzieli, są dla mnie jednymi z najważniejszych."
    },

    {
        title: "Lubię, że mogę Ci powiedzieć wszystko",
        text: "Nawet kiedy coś jest głupie, wstydliwe albo kompletnie bez sensu, czuję, że mogę Ci o tym powiedzieć. To jest jedna z rzeczy, które najbardziej cenię w naszej relacji."
    },

    {
        title: "Czasami patrzę na stare zdjęcia",
        text: "Wracam czasami do naszych zdjęć i przypominam sobie, co działo się wtedy. Nie zawsze dlatego, że tęsknię za konkretnym dniem. Czasami po prostu lubię patrzeć na nas."
    },

    {
        title: "Lubię nasze zdjęcia",
        text: "Nawet te najgłupsze, niewyraźne i przypadkowe. Szczególnie te, na których nie wyglądamy idealnie. Bo wtedy wyglądamy po prostu jak my."
    },

    {
        title: "Pamiętam Twoje gesty",
        text: "Kwiaty po kłótni, jedzenie, które mi przynosisz, rzeczy, które próbujesz naprawić, przyjazdy do mnie, Twoje bluzy. Takie rzeczy naprawdę zostają mi w głowie."
    },

    {
        title: "Lubię, kiedy coś dla mnie robisz",
        text: "Nawet jeśli jest to naprawienie zegara, zrobienie jedzenia albo przyniesienie mi czegoś dobrego. Nie chodzi o samą rzecz. Chodzi o to, że pomyślałeś o mnie."
    },

    {
        title: "Czasami chcę po prostu być obok Ciebie",
        text: "Bez rozmowy. Bez telefonu. Bez żadnego planu. Po prostu siedzieć obok Ciebie i wiedzieć, że jesteś."
    },

    {
        title: "Jesteś moim bezpiecznym miejscem",
        text: "Nawet jeśli czasami sama robię wszystko, żeby odsunąć się od Ciebie, bardzo często właśnie do Ciebie chcę wrócić, kiedy jest mi źle."
    },

    {
        title: "Nie mówię Ci, jak bardzo mi Ciebie brakuje",
        text: "Czasami tęsknię bardziej, niż pokazuję. Mogę pisać normalnie, żartować albo udawać zajętą, ale w środku naprawdę chciałabym, żebyś był obok."
    },

    {
        title: "Chcę tworzyć z Tobą kolejne wspomnienia",
        text: "Mamy już tak dużo historii, a mimo tego mam wrażenie, że dopiero zaczęliśmy. Chcę kolejnych wyjazdów, kolejnych głupich sytuacji, kolejnych zwykłych dni i kolejnych rzeczy, które kiedyś będziemy wspominać."
    },

    {
        title: "Chcę, żebyś pamiętał, że jesteś kochany",
        text: "Nawet kiedy zachowuję się inaczej. Nawet kiedy jestem zła. Nawet kiedy jestem zimna. Chcę, żebyś zawsze wiedział, że jesteś dla mnie ważny i że naprawdę Cię kocham."
    },

    {
        title: "Gdybym mogła cofnąć czas",
        text: "Nie zmieniłabym tego, że Cię poznałam. Nawet z naszymi kłótniami, chaosem, zazdrością i wszystkimi trudnymi momentami. Bo razem z tym wszystkim dostałam też mnóstwo chwil, których nie zamieniłabym na nic."
    },

    {
        title: "Wybrałabym Ciebie jeszcze raz",
        text: "Gdybym miała wrócić do początku i jeszcze raz przeżyć ten pierwszy wieczór, pierwszą ławkę, pierwsze rozmowy i wszystko, co wydarzyło się później, nadal chciałabym, żebyś to był Ty."
    },

    {
        title: "Jesteś moją ulubioną osobą",
        text: "Może nie mówię Ci tego wystarczająco często. Ale jesteś osobą, do której chcę pisać, z którą chcę spędzać czas i której obecność naprawdę ma dla mnie ogromne znaczenie."
    },

    {
        title: "Kocham nasze „my”",
        text: "Nie tylko Ciebie jako osobę. Kocham też to, co powstało między nami. Nasze teksty, żarty, miejsca, piosenki, wspomnienia, rzeczy, których nikt poza nami nie rozumie."
    },

    {
        title: "Ta strona jest właśnie dla Ciebie",
        text: "Jeśli kiedyś będziesz się zastanawiał, po co zrobiłam całą tę stronę, odpowiedź jest prosta. Bo chciałam zostawić gdzieś wszystkie rzeczy, których czasami nie potrafię powiedzieć Ci na głos."
    },

    {
        title: "I najważniejsze...",
        text: "Kocham Cię. Naprawdę. Nawet jeśli czasami nie umiem tego dobrze pokazać. Nawet jeśli jestem trudna. Nawet jeśli się złoszczę. Jesteś dla mnie ważniejszy, niż potrafię ubrać w słowa."
    },

    {
        title: "Uwielbiam, kiedy wołasz mnie „Zuzia” albo „ZUZIIIIU”",
        text: "Czasami jak mówisz do mnie „Zuzia” albo przeciągasz moje imię na swoje „ZUZIIIIU”, to niby mnie to wkurwia, ale tak naprawdę uwielbiam, że masz swoje sposoby na wołanie mnie. Chyba nawet nie zauważasz, jak bardzo kojarzę już Twój głos z tym, że zaraz coś powiesz albo coś odjebiesz."
    },

    {
        title: "Czasami chcę, żebyś mnie przytulił, ale nie potrafię tego powiedzieć",
        text: "Czasami jak się kłócimy i jestem dla Ciebie złośliwa, to tak naprawdę wcale nie chcę, żebyś sobie poszedł. Czasami wręcz przeciwnie. Chcę, żebyś podszedł, przytulił mnie i powiedział swoje „choć się przytulisz?”. Tylko ja zamiast Ci powiedzieć „tak, potrzebuję Cię”, potrafię zrobić dokładnie odwrotnie i jeszcze bardziej się wkurwiać."
    },

    {
        title: "Wiem, że potrafię być dla Ciebie okropna",
        text: "Wiem, że czasami jestem dla Ciebie okropna. Wiem, że potrafię specjalnie powiedzieć coś, co wiem, że Cię zaboli, tylko dlatego, że sama jestem zraniona. I później siedzę i żałuję tego, co zrobiłam, tylko nie zawsze umiem wtedy przyznać się do tego od razu."
    },

    {
        title: "Czasami jestem zimna, bo czuję za dużo",
        text: "Czasami jestem zimna nie dlatego, że nic nie czuję, tylko dlatego, że czuję za dużo i kompletnie nie wiem, co z tym zrobić."
    },

    {
        title: "To nie zawsze jest to, co brzmi",
        text: "Bardzo często kiedy mówię „nie chce mi się”, „idź sobie”, „jest mi wszystko jedno” albo odpowiadam Ci takim swoim „no spoko”, to wcale nie musi oznaczać tego, co słyszysz. Czasami po prostu chciałabym, żebyś sam zauważył, że coś jest nie tak."
    },

    {
        title: "Pamiętam, jak bardzo się zmieniłeś",
        text: "Pamiętam, że na początku tak bardzo bałeś się do mnie przyjechać. Szukałeś wymówek, żeby nie przyjechać, a teraz jesteś osobą, która potrafi przyjechać do mnie rowerem tylko po to, żeby mnie zobaczyć. I czasami naprawdę mnie śmieszy, jak bardzo zmieniło się to od początku."
    },

    {
        title: "Ławka na Waryńskiego zostanie ze mną na zawsze",
        text: "Pamiętam tę ławkę na Waryńskiego. Tę konkretną. Siedzenie tam, śpiewanie Ninot i takie zwykłe bycie obok siebie. Szkoda mi jej bardziej, niż mogłoby się wydawać, bo dla mnie to nie była po prostu ławka."
    },

    {
        title: "To był początek wszystkiego",
        text: "Pamiętam ten moment, kiedy zapytałeś mnie „a gdybym zapytał o związek, to byś się zgodziła?”. I pamiętam, że najpierw spytałam, czy mówisz serio, czy po pijaku. A później powiedziałam, że tak. I kiedy sobie to przypominam, nadal mam takie „kurwa, to naprawdę od tego się wszystko zaczęło”."
    },

    {
        title: "Pamiętam nasze początki",
        text: "Pamiętam też, jak na początku wstydziłeś się powiedzieć ludziom, że jesteśmy razem. Wtedy byłam wkurwiona jak cholera. Teraz jak o tym myślę, to jest to po prostu jeden z tych głupich początków naszej historii, które już zawsze będą nasze."
    },

    {
        title: "Lubię, kiedy robisz zwykłe rzeczy",
        text: "Nie mówię Ci też, jak bardzo lubię, kiedy robisz jakieś kompletnie zwykłe rzeczy. Jak próbowałeś naprawić mój zegar. Jak składałeś kanapę u mojej siostry. Jak robiliśmy gofry po nocy. Jak robisz lody z Nutellą. Jak przynosisz mi serki, Fantę, Twixa czy M&M'sy. To nie są dla mnie po prostu rzeczy. Ja naprawdę zapamiętuję takie momenty."
    },

    {
        title: "Nawet głupi liść ma dla mnie znaczenie",
        text: "Nawet ten głupi liść, który zerwałeś mi po kebabie. Nadal go mam. I chyba właśnie to najlepiej pokazuje, jaka jestem. Możesz dać mi coś, co dla Ciebie było kompletnie bez znaczenia, a ja będę to przechowywać, bo dostałam to od Ciebie."
    },

    {
        title: "Lubię Twój bidon i Twoje rzeczy",
        text: "Lubię Twój bidon KFD. Wiem, że brzmi to pojebanie, ale czasami naprawdę wystarczy mi zobaczyć jakąś rzecz, która jest „Twoja” i od razu myślę o Tobie. Lubię Twoje ubrania. Szczególnie dlatego, że jak je zakładam, to mam takie dziwne poczucie, że jesteś trochę przy mnie, nawet jeśli akurat Cię nie ma."
    },

    {
        title: "Nie chcę, żebyśmy zapomnieli",
        text: "Czasami jak wracam do naszych starych zdjęć albo wiadomości, to przypominam sobie nie tylko to, co się wydarzyło, ale też dokładnie to, jak wtedy się czułam. I chyba dlatego tak bardzo chciałam zrobić tę stronę. Bo boję się, że kiedyś zapomnę jakieś małe rzeczy, które teraz wydają mi się oczywiste."
    },

    {
        title: "Pamiętam nawet te małe gesty",
        text: "Nie zapomnę tego, że przykryłam menela swoją kurtką, a Ty się wtedy na mnie tak patrzyłeś i powiedziałeś coś w stylu „wow”. Niby głupota, ale takie rzeczy też są częścią tego, jak mnie poznawałeś. Nie zapomnę wszystkich razy, kiedy odwoziłam Cię nocą do internatu. Tego, że czasami droga sama w sobie była częścią naszego spotkania. Nie musieliśmy nawet robić niczego wielkiego."
    },

    {
        title: "Uwielbiam, kiedy przyjeżdżasz do mnie",
        text: "Nie zapomnę wszystkich razy, kiedy przyjeżdżałeś do mnie rowerem. Czasami specjalnie tylko po to, żeby mnie zobaczyć. I chyba nigdy Ci nie powiedziałam, jak bardzo lubię świadomość, że komuś chciało się przejechać kawał drogi tylko dlatego, że chciał być ze mną."
    },

    {
        title: "Poznań zostanie we mnie na zawsze",
        text: "Poznań jest dla mnie czymś więcej niż wyjazdem. To było to uczucie, że przez chwilę mieliśmy całe dni tylko dla siebie. Spanie razem, budzenie się, kąpanie, robienie jedzenia, wychodzenie na miasto, restauracja. Nie musieliśmy się nigdzie spieszyć. Po prostu byliśmy razem. I właśnie dlatego tak dobrze to pamiętam."
    },

    {
        title: "Lubię nasz chaos",
        text: "Pamiętam też wszystkie te kompletnie pojebane sytuacje, których normalna para chyba nie miałaby aż tyle. Karawka, melanże, Gorzów, Malik, kasyno z Jankiem, traktor z Gamianem, drama o ryby, sprzątanie pokoju, kierownica u Damiana, Roblox, Ludo Club, sushi w parku, kebaby i cała reszta naszego chaosu. I wiesz co? Ja naprawdę lubię ten nasz chaos."
    },

    {
        title: "Zauważam, kiedy się martwisz",
        text: "Nawet kiedy się wkurwiam na Twoje „nie pij tyle”, a później oczywiście robię dokładnie odwrotnie. Wiem, że mówisz to dlatego, że się martwisz. I może nie zawsze Ci to pokazuję, ale zauważam."
    },

    {
        title: "Pamiętam te nieidealne chwile",
        text: "Pamiętam Boże Ciało i to, jak skończyłam rzygając w parku, a Ty się mną zajmowałeś. Nie było w tym nic romantycznego ani pięknego, ale właśnie dlatego to jest nasze. Byłeś przy mnie wtedy, kiedy zdecydowanie nie wyglądałam ani nie zachowywałam się najlepiej."
    },

    {
        title: "Najbardziej czułam się przy Tobie nocą",
        text: "Pamiętam wszystkie noce, kiedy gadaliśmy o rzeczach, których nie mówiliśmy innym. I chyba właśnie wtedy najbardziej czułam, że jesteś moją osobą. Nie podczas jakiejś wielkiej randki, tylko kiedy siedzieliśmy późno i mówiliśmy sobie rzeczy, których normalnie nie potrafiliśmy powiedzieć."
    },

    {
        title: "Zazdrość mnie zjada, ale nie chcę, żebyś to czuł",
        text: "Czasami jestem zazdrosna o Twoją przeszłość bardziej, niż chciałabym być. Wkurwia mnie, że były rzeczy przede mną, że ktoś był przed mną i że nie mogę tego zmienić. Wiem, że to nie jest Twoja wina. Po prostu czasami chciałabym, żeby cała Twoja historia zaczęła się dopiero ze mną. I chyba najbardziej boli mnie to, że czasami przez tę zazdrość zamiast przytulić się do Ciebie, robię Ci na złość. A przecież tak naprawdę w tych momentach najbardziej potrzebuję właśnie Ciebie."
    },

    {
        title: "Część mnie potrzebuje, żebyś to mówił",
        text: "Kiedy mówisz mi, że jestem najładniejsza i że nie chcesz wracać do przeszłości, czasami nie umiem po prostu uwierzyć Ci bez żadnego „ale”. Ale część mnie naprawdę potrzebuje to słyszeć. Dużo bardziej, niż Ci pokazuję."
    },

    {
        title: "Kwiaty po kłótni zostały w pamięci",
        text: "Pamiętam kwiaty po naszej kłótni. I chyba właśnie dlatego tak mocno je zapamiętałam. Nie dlatego, że były kwiatami, tylko dlatego, że po wszystkim przyjechałeś z nimi do mnie. Wtedy poczułam, że mimo całej naszej głupiej kłótni nadal chciałeś być blisko mnie."
    },

    {
        title: "Lubię, jak się ze mną godzisz",
        text: "Lubię, że potrafisz się ze mną pogodzić czasami po prostu przytuleniem. Nawet jeśli wcześniej oboje byliśmy wkurwieni."
    },

    {
        title: "Zauważam, kiedy się starasz",
        text: "Nie zawsze umiem Ci powiedzieć „dziękuję”. Za to, że się mną zajmujesz. Za małe rzeczy. Za przyjeżdżanie. Za jedzenie. Za kwiaty. Za rozmowy. Za to, że mnie przytulasz. Za to, że czasami próbujesz mnie rozśmieszyć, kiedy kompletnie nie mam na to ochoty. I chyba najbardziej nie mówię Ci tego, że naprawdę zauważam, kiedy się starasz."
    },

    {
        title: "Nasze małe rzeczy są najważniejsze",
        text: "Czasami myślę o tym, ile już mamy rzeczy, które dla innych ludzi byłyby kompletnie niczym. A dla mnie są „nasze”. Jedna piosenka. Jedno miejsce. Jedno zdanie. Jeden żart. Jeden przedmiot. Jeden głupi tekst. I nagle cały Wiktor. I chyba właśnie dlatego zrobiłam Ci tę stronę. Bo nie chcę, żeby kiedyś zostało mi tylko „pamiętam, że byliśmy razem”. Chcę pamiętać Ciebie."
    },

    {
        title: "To nie był przypadek",
        text: "Tego Wiktora spod monopolowego. Tego z ławki na Waryńskiego. Tego, który bał się do mnie przyjechać. Tego, który przywoził mi jedzenie. Tego, który mówił „nie pij tyle”. Tego, który mnie przytulał po kłótniach. Tego, który przyjeżdżał rowerem. Tego, który robił ze mną gofry w środku nocy. Tego, który potrafił zrobić z najzwyklejszego dnia kolejne wspomnienie. I nawet jeśli czasami jestem zimna, złośliwa, zazdrosna albo zachowuję się tak, jakbym miała Cię gdzieś, chcę, żebyś wiedział jedną rzecz: nigdy nie jesteś mi obojętny. Bo gdybyś był, nie robiłabym dla Ciebie właśnie tej strony. <3"
    }

];


const container =
    document.getElementById("thingsContainer");

const counter =
    document.getElementById("thingsCount");

const modal =
    document.getElementById("thingModal");

const modalNumber =
    document.getElementById("modalNumber");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const closeModal =
    document.getElementById("closeModal");


counter.textContent =
    things.length;


things.forEach((thing, index) => {

    const card =
        document.createElement("article");

    card.className =
        "memory-card";

    card.style.animationDelay =
        `${index * 0.025}s`;


    card.innerHTML = `

        <div class="memory-number">
            THING ${String(index + 1).padStart(2, "0")}
        </div>

        <div class="memory-heart">
            ♡
        </div>

        <h2>
            ${thing.title}
        </h2>

        <p>
            ${thing.text}
        </p>

        <div class="read-more">
            OTWÓRZ → 
        </div>

    `;


    card.addEventListener(
        "click",
        () => {

            modalNumber.textContent =
                `THING ${String(index + 1).padStart(2, "0")} / ${String(things.length).padStart(2, "0")}`;

            modalTitle.textContent =
                thing.title;

            modalText.textContent =
                thing.text;

            modal.classList.add("active");

            document.body.style.overflow =
                "hidden";

        }
    );


    container.appendChild(card);

});


function closeMemory() {

    modal.classList.remove("active");

    document.body.style.overflow =
        "";

}


closeModal.addEventListener(
    "click",
    closeMemory
);


modal.addEventListener(
    "click",
    (event) => {

        if (
            event.target === modal
        ) {

            closeMemory();

        }

    }
);


document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeMemory();

        }

    }
);

