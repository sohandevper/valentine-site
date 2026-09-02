document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    const lastNameInput = document.getElementById("lastname");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // 🚨 REQUIRED

        const lastName = lastNameInput.value.trim().toLowerCase();

        if (lastName === "YOUR LAST NAME") {
            window.location.href = "welcome.html";
        } else {
            alert("Wrong last name ");
        }
    });
});

