document.addEventListener('DOMContentLoaded', () => {
    // Show the profile section by default
    showSection('profile');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    document.getElementById(sectionId).classList.add('active');
}

function sendMessage(menteeName) {
    const messageInput = document.getElementById('messageInput');
    const messageList = document.getElementById('messageList');

    if (messageInput && messageInput.value.trim() !== '') {
        const messageText = messageInput.value.trim();
        
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');
        messageElement.innerText = `To ${menteeName || 'Mentee'}: ${messageText}`;
        
        messageList.appendChild(messageElement);
        messageInput.value = '';

        messageList.scrollTop = messageList.scrollHeight;
    }
}
