function openProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.classList.remove('hidden');  // Show the modal by removing the 'hidden' class
    setTimeout(() => {
        modal.classList.add('visible');  // Trigger slide-in effect by adding 'visible' class
    }, 100);  // Small delay to ensure smooth transition
}

function closeProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.classList.remove('visible');  // Start slide-out effect by removing 'visible' class
    setTimeout(() => {
        modal.classList.add('hidden');  // Hide the modal completely after slide-out is done
    }, 500);  // Match this duration to the CSS transition duration (0.5s)
}
