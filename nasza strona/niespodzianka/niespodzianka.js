const CORRECT_CODE = "18082026";

const codeInput = document.getElementById("codeInput");
const submitBtn = document.getElementById("submitBtn");
const errorMsg = document.getElementById("errorMsg");
const codeForm = document.getElementById("codeForm");
const videoContainer = document.getElementById("videoContainer");
const videoSource = document.getElementById("videoSource");

submitBtn.addEventListener("click", () => {
    const enteredCode = codeInput.value.trim();

    if (enteredCode === CORRECT_CODE) {
        // Kod poprawny
        errorMsg.textContent = "";
        codeForm.style.display = "none";
        videoContainer.style.display = "block";

        // Tutaj wstaw URL twojego wideo
        // np. videoSource.src = "https://example.com/video.mp4";
        // lub videoSource.src = "niespodzianka.mp4"; (jeśli plik jest w tym folderze)
        
    } else {
        // Kod błędny
        errorMsg.textContent = "❌ Błędny kod! Spróbuj jeszcze raz.";
        codeInput.value = "";
        codeInput.focus();
    }
});

// Sprawdzaj kod po naciśnięciu Enter
codeInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        submitBtn.click();
    }
});
