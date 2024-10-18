const statistics = document.querySelectorAll('.statistic');

statistics.forEach(statistic => {
    const numberElement = statistic.querySelector('h2');
    const originalNumber = numberElement.textContent;
    console.log(`Original number for this statistic: ${originalNumber}`); // Optional: for debugging
});

function scrollToSection() {
    const target = document.getElementById('schedule');
    target.scrollIntoView({ behavior: 'smooth' });
}

function openMessageModal() {
    document.getElementById('messageModal').classList.remove('hidden');
}

function closeMessageModal() {
    document.getElementById('messageModal').classList.add('hidden');
}

document.getElementById('sendButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const studentSelect = document.getElementById('studentSelect'); // Get the dropdown
    const selectedStudent = studentSelect.value; // Get selected student
    const messageList = document.getElementById('messageList');

    if (messageInput.value.trim()) {
        const messageItem = document.createElement('div');
        messageItem.classList.add('message-item');

        if (selectedStudent) {
            messageItem.textContent = `${selectedStudent}: ${messageInput.value}`;
        } else {
            messageItem.textContent = `Global Notice: ${messageInput.value}`;
        }

        messageList.appendChild(messageItem);
        messageInput.value = ''; // Clear the input
        studentSelect.value = ''; // Reset selection
    }
});

document.getElementById('uploadResourceButton').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});