const envelope = document.getElementById("envelope");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

if (envelope) {
    envelope.addEventListener("click", (event) => {
        // Don't close the envelope when clicking its buttons
        if (event.target.closest("button")) return;

        envelope.classList.toggle("open");
    });
}

let yesScale = 1;

if (noBtn && yesBtn) {
    noBtn.addEventListener("click", (event) => {
        event.stopPropagation();

        yesScale = Math.min(yesScale + 0.3, 3);
        yesBtn.style.transform = `scale(${yesScale})`;
    });

    yesBtn.addEventListener("click", (event) => {
    event.stopPropagation();

    document.getElementById("catContainer").style.display = "block";

    response.textContent = "YAYYYY 💖🎉";
    noBtn.style.display = "none";
    yesBtn.textContent = "YES!! 💗";
});
}