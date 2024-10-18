document.getElementById('search').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const mentorCards = document.querySelectorAll('.mentor-card');

    mentorCards.forEach(card => {
        const mentorName = card.querySelector('h2').textContent.toLowerCase();
        if (mentorName.includes(searchValue)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});

function toggleNotifications() {
    const notificationPanel = document.getElementById('notificationPanel');
    const overlay = document.getElementById('overlay');
    if (notificationPanel.classList.contains('open')) {
        notificationPanel.classList.remove('open');
        overlay.style.display = 'none';
    } else {
        notificationPanel.classList.add('open');
        overlay.style.display = 'block';
    }
}