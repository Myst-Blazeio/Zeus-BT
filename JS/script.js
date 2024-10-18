function showMessage() {
    alert("Welcome to My Website!");
}

document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for contacting us!");
});
