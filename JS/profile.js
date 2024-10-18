function openProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.classList.remove('hidden');
 // Add visible class to trigger the slide-in effect
     setTimeout(() => {
        modal.classList.add('visible'); 
    }, 100);
}

function closeProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.classList.remove('visible'); // Remove visible class to trigger the slide-out effect
    setTimeout(() => {
        modal.classList.add('hidden'); // Add hidden class after the transition is complete
    }, 500); // Match this duration with the CSS transition duration
}

