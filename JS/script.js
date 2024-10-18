document.getElementById('role').addEventListener('change', function() {
    const mentorIdGroup = document.getElementById('mentor-id-group');
    if (this.value === 'mentor') {
        mentorIdGroup.style.display = 'flex';
    } else {
        mentorIdGroup.style.display = 'none';
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const role = document.getElementById('role').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mentorId = document.getElementById('mentor-id').value;

    // Validation: check if role, email, and password are filled
    if (!role) {
        alert('Please select your role.');
        return;
    }

    if (!email || !password) {
        alert('Please fill in both email and password.');
        return;
    }

    // Check if the user is a mentor and if the Mentor ID is provided
    if (role === 'mentor') {
        if (!mentorId) {
            alert('Please enter your Mentor ID.');
            return;
        } else {
            // Mentor login successful, redirect to Mentor Dashboard
            window.location.href = "mentor-dashboard.html";
        }
    } else {
        // If the role is not mentor, you can redirect to a student dashboard or do other actions
        alert(`Logged in as ${role}`);
        // You can also add a redirect for student dashboard, e.g.:
        // window.location.href = "student-dashboard.html";
    }

    // Log user details (for development/testing)
    console.log('Role:', role);
    console.log('Email:', email);
    console.log('Password:', password);
    if (role === 'mentor') {
        console.log('Mentor ID:', mentorId);
    }
});


