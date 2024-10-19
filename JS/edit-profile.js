document.addEventListener('DOMContentLoaded', () => {
    const timeSlotsContainer = document.getElementById('timeSlotsContainer');
    const unavailableDate = document.getElementById('unavailableDate');

    // Generate time slots from 10 AM to 5 PM with 30-minute intervals
    const timeSlots = generateTimeSlots('10:00', '17:00', 30);
    timeSlots.forEach(time => {
        const timeButton = document.createElement('button');
        timeButton.textContent = time;
        timeButton.className = 'time-slot-btn2';
        timeButton.addEventListener('click', () => {
            timeButton.classList.toggle('selected2');
        });
        timeSlotsContainer.appendChild(timeButton);
    });

    // Function to generate time slots
    function generateTimeSlots(start, end, interval) {
        const startTime = new Date(`1970-01-01T${start}:00`);
        const endTime = new Date(`1970-01-01T${end}:00`);
        const times = [];

        while (startTime <= endTime) {
            times.push(startTime.toTimeString().substring(0, 5));
            startTime.setMinutes(startTime.getMinutes() + interval);
        }
        return times;
    }

    unavailableDate.addEventListener('change', () => {
        alert(`Date ${unavailableDate.value} marked as unavailable.`);
    });
});

// Function to save profile (dummy function for demonstration)
// function saveProfile() {
//     alert('Profile saved successfully!');
// }

function goBack() {
    window.location.href = 'mentor-dashboard.html';
}

function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.display = 'none';
        goBack();
    }, 2000);
}