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