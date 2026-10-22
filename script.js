
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
    const saveButton = document.getElementById("saveclickie");
    const loadButton = document.getElementById("loadclickie");

    if (!saveButton || !loadButton) {
        console.error("Could not find the Save or Load button. Check their IDs.");
        return;
    }

    saveButton.addEventListener("click", () => {
        const currentPlace = window.location.href;
        localStorage.setItem(SAVE_KEY, currentPlace);
        alert("Saved place.");
    });

    loadButton.addEventListener("click", () => {
        const savedPlace = localStorage.getItem(SAVE_KEY);

        if (savedPlace) {
            window.location.href = savedPlace;
        } else {
            alert("Nothing has been saved previously.");
        }
    });
}


if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", saveSlot);
} else {
    saveSlot();
}
