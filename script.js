document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const status = document.getElementById("form-status");
    status.innerText = "Thanks! Your message has been received.";
    status.style.color = "green";

    this.reset();
});
