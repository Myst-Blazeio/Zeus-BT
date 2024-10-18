document.getElementById("role").addEventListener("change", function () {
  const mentorIdGroup = document.getElementById("mentor-id-group");
  if (this.value === "mentor") {
    mentorIdGroup.style.display = "flex";
  } else {
    mentorIdGroup.style.display = "none";
  }
});

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mentorId = document.getElementById("mentor-id").value;

    if (!role) {
      alert("Please select your role.");
      return;
    }

    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    if (role === "mentor" && !mentorId) {
      alert("Please enter your Mentor ID.");
      return;
    }

    // Here you can add functionality for login authentication
    console.log("Role:", role);
    console.log("Email:", email);
    console.log("Password:", password);
    if (role === "mentor") {
      console.log("Mentor ID:", mentorId);
    }

    alert(`Logged in as ${role}`);
    if (role === "student") {
      window.location.href = "student-dashboard.html";
    } else if (role === "mentor") {
      window.location.href = "mentor-dashboard.html";
    }
  });
