function showMessage() {
    let messageBox = document.getElementById("message");
    messageBox.classList.add("show-message");

    // Create animated hearts
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.classList.add("popup-heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random float speed
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove(); // Remove after animation
        }, 5000);
    }
}