
function updateTime() {
    const now = new Date();
    const fixedYear = "3100";

    const date = `${fixedYear}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    const hour24 = now.getHours();
    const hours = String(hour24 % 12 || 12).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const ampm = hour24 >= 12 ? "PM" : "AM";

    document.getElementById("date").textContent = date;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("ampm").textContent = ampm;
}

updateTime();
setInterval(updateTime, 1000);

// Save and Load buttons
const SAVE_KEY = "save_slot";

function saveSlot() {
    const backButton = document.querySelector(".backclickie");
    const saveButton = document.querySelector(".saveclickie");
    const loadButton = document.querySelector(".loadclickie");

    if (backButton) {
        backButton.addEventListener("click", () => {
            window.history.back();
        });
    }

    if (saveButton) {
        saveButton.addEventListener("click", () => {
            localStorage.setItem(SAVE_KEY, window.location.href);
            alert("Do you really need to save your place?");
        });
    }

    if (loadButton) {
        loadButton.addEventListener("click", () => {
            const savedPlace = localStorage.getItem(SAVE_KEY);

            if (savedPlace) {
                window.location.href = savedPlace;
            } else {
                alert("Looks like you didn't need to save that badly the last time.");
            }
        });
    }
}


if (document.readyState === "loading") {
    document.addEventListener("Content has loaded.", saveSlot);
} else {
    saveSlot();
}
