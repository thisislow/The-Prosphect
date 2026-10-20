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
function saveSlot() {
const SAVE_KEY = "save_slot";
document.getElementById('saveclickie').addEventListener('click', () => {
const currentPlace = window.location.href; 
localStorage.setItem(SAVE_KEY, currentPlace);
alert("Saved place.");
});

document.getElementById('loadclickie').addEventListener('click', () => { const savedPlace = localStorage.getItem(SAVE_KEY);
    if (savedPlace) {
        window.location.href = savedPlace;
    } else {
        alert("Nothing has been saved previously.");
    }
});