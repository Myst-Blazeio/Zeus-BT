// Get all statistics and log original numbers (optional for debugging)
const statistics = document.querySelectorAll('.statistic');
statistics.forEach(statistic => {
    const numberElement = statistic.querySelector('h2');
    const originalNumber = numberElement.textContent;
    console.log(`Original number for this statistic: ${originalNumber}`);
});

// Smooth scroll to section
function scrollToSection() {
    const target = document.getElementById('schedule');
    target.scrollIntoView({ behavior: 'smooth' });
}

// Open Message Modal
function openMessageModal() {
    document.getElementById('messageModal').classList.remove('hidden');
}

// Close Message Modal
function closeMessageModal() {
    document.getElementById('messageModal').classList.add('hidden');
}

// Send message and update message list
document.getElementById('sendButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const studentSelect = document.getElementById('studentSelect'); // Get the student dropdown
    const selectedStudent = studentSelect.value; // Get selected student
    const messageList = document.getElementById('messageList');

    if (messageInput.value.trim()) {
        const messageItem = document.createElement('div');
        messageItem.classList.add('message-item');

        // Display message based on student or global
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

// Open the Edit Profile Modal
function openEditProfileModal() {
    document.getElementById('editProfileModal').classList.remove('hidden');
}

// Close the Edit Profile Modal
function closeEditProfileModal() {
    document.getElementById('editProfileModal').classList.add('hidden');
}

// Dummy Save Profile Function (for edit profile modal)
function saveProfile() {
    alert('Profile saved successfully!');
}

// Trigger the Edit Profile Modal on clicking the icon
// document.addEventListener('DOMContentLoaded', function () {
//     const editProfileIcon = document.getElementById('editProfileIcon');
//     editProfileIcon.addEventListener('click', openEditProfileModal);
// });
