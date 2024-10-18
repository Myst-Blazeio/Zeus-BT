document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentName = document.getElementById('student-name').value;
    const studentId = document.getElementById('student-id').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const guidanceTopic = document.getElementById('guidance-topic').value;
    const additionalNotes = document.getElementById('additional-notes').value;
    const selectedTimeSlot = document.getElementById('timeslot').value;

    // Show success message
    showSuccessMessage();

    // Logic to store the booking information can go here
    // e.g., save to local storage or send a confirmation email via server if backend is available
});

document.querySelectorAll('.timeslot:not(.booked)').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.timeslot').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        document.getElementById('timeslot').value = this.getAttribute('data-value');
    });
});

function goBack() {
    window.location.href = 'student-dashboard.html';
}

function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.display = 'none';
        goBack();
    }, 2000);
}