// Set the target date and time
const targetDate = new Date("2025-05-19T13:60:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerText = "Redirecting...";
        clearInterval(timer);

        // Redirect to your birthday website
        window.location.href = "https://kire0mahdi.github.io/bday-wish/bday-wish.html";
        return;
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display in "X days, Y hours, Z minutes, W seconds" format
    document.getElementById("countdown").innerText = 
        `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds left`;
}

// Update the countdown every second
const timer = setInterval(updateCountdown, 1000);

// Initialize the countdown immediately
updateCountdown();
