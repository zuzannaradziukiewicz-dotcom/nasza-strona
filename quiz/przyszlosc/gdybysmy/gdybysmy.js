const questions = [

    {
        title: "Jeden dzień jeszcze raz",
        text: "Gdybyśmy mogli przeżyć jeszcze raz jeden dzień z naszego związku, który dzień byś wybrał?"
    },

    {
        title: "Jedno wspomnienie",
        text: "Jakie jest Twoje ulubione wspomnienie ze mną?"
    },

    {
        title: "Cofnięcie czasu",
        text: "Gdybyś mógł cofnąć czas do jednego momentu naszej historii, do którego byś wrócił?"
    },

    {
        title: "Nasza przyszłość",
        text: "Jak wyobrażasz sobie nas za 5 lat?"
    },

    {
        title: "Jeszcze dalej",
        text: "A jak wyobrażasz sobie nas, kiedy będziemy mieli 30, 40 albo 50 lat?"
    },

    {
        title: "Nasz dom",
        text: "Gdybyśmy mieli własny dom, gdzie chciałbyś mieszkać i jak chciałbyś, żeby wyglądał?"
    },

    {
        title: "Dzieci",
        text: "Gdybyśmy mieli dzieci, jak chciałbyś je nazwać?"
    },

    {
        title: "Pies",
        text: "Gdybyśmy mieli psa, jak byś go nazwał?"
    },

    {
        title: "Podróż bez planu",
        text: "Gdybyśmy jutro wsiedli do samochodu i jechali bez nawigacji, gdzie chciałbyś, żebyśmy trafili?"
    },

    {
        title: "Jedno miejsce",
        text: "Gdybyśmy mogli teleportować się teraz w jedno miejsce na świecie, gdzie byś mnie zabrał?"
    },

    {
        title: "Cały dzień",
        text: "Gdybyśmy mieli cały dzień tylko dla siebie i żadnych obowiązków, co byśmy robili?"
    },

    {
        title: "Idealna randka",
        text: "Jak wyglądałaby Twoja idealna randka ze mną, gdyby nie było żadnych ograniczeń?"
    },

    {
        title: "Jedna rzecz",
        text: "Gdybyś mógł zatrzymać jedno nasze wspomnienie na zawsze, które byś wybrał?"
    },

    {
        title: "Początek",
        text: "Gdybyś mógł powiedzieć coś sobie z dnia, kiedy mnie poznałeś, co byś powiedział?"
    },

    {
        title: "Nasza historia",
        text: "Gdybyś miał opowiedzieć naszym dzieciom, jak się poznaliśmy, jak byś to opowiedział?"
    },

    {
        title: "Trzy słowa",
        text: "Gdybyś miał opisać nasz związek trzema słowami, jakie byś wybrał?"
    },

    {
        title: "Najważniejsza rzecz",
        text: "Co najbardziej kochasz w naszym związku?"
    },

    {
        title: "Jedna rzecz we mnie",
        text: "Co najbardziej kochasz we mnie?"
    },

    {
        title: "Nasze miejsce",
        text: "Jakie miejsce najbardziej kojarzy Ci się ze mną?"
    },

    {
        title: "Krawiec",
        text: "Gdybyśmy mieli spędzić całą noc tylko we dwoje nad Krawcem, co chciałbyś tam robić?"
    },

    {
        title: "Noc",
        text: "Gdybyśmy mieli jedną noc, której nigdy nie zapomnimy, gdzie chciałbyś ją spędzić?"
    },

    {
        title: "Ognisko",
        text: "Gdybyśmy mieli siedzieć przy ognisku do samego rana, o czym chciałbyś ze mną rozmawiać?"
    },

    {
        title: "Największe marzenie",
        text: "Jakie jest jedno marzenie, które najbardziej chciałbyś spełnić razem ze mną?"
    },

    {
        title: "Jeszcze raz",
        text: "Gdybyś mógł przeżyć jeden nasz zwykły dzień jeszcze raz, który byś wybrał?"
    }

];

const container = document.getElementById("questions");

questions.forEach((question, index) => {

    const card = document.createElement("article");

    card.className = "question";

    card.innerHTML = `
        <div class="question-number">
            QUESTION ${String(index + 1).padStart(2, "0")}
        </div>

        <h2>
            ${question.title}
        </h2>

        <p>
            ${question.text}
        </p>
    `;

    container.appendChild(card);
});