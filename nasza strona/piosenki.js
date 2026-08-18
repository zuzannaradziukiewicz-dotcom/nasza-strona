function playSong(song) {

    const playing =
        document.getElementById("playing");

    if (playing) {

        playing.innerHTML =
            "🎵 WYBRANO: " + song;

    }


    const vinyl =
        document.getElementById("vinyl");


    if (vinyl) {

        vinyl.classList.remove("rotate");


        setTimeout(() => {

            vinyl.classList.add("rotate");

        }, 100);

    }

}