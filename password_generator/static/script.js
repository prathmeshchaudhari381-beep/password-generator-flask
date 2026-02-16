function copyPassword() {
    const password = document.getElementById("generatedPassword").innerText;
    navigator.clipboard.writeText(password);
    alert("Password Copied ✅");
}

function toggleTheme() {
    document.body.classList.toggle("light");
}

window.onload = function() {
    const passwordElement = document.getElementById("generatedPassword");
    if (passwordElement) {
        const password = passwordElement.innerText;
        const strengthBar = document.getElementById("strengthBar");
        const strengthText = document.getElementById("strengthText");

        let strength = 0;

        if (password.length >= 8) strength += 25;
        if (/[A-Z]/.test(password)) strength += 25;
        if (/[0-9]/.test(password)) strength += 25;
        if (/[!@#$%^&*]/.test(password)) strength += 25;

        strengthBar.style.width = strength + "%";

        if (strength <= 50) {
            strengthBar.style.background = "red";
            strengthText.innerText = "Weak Password";
        } else if (strength <= 75) {
            strengthBar.style.background = "orange";
            strengthText.innerText = "Medium Strength";
        } else {
            strengthBar.style.background = "green";
            strengthText.innerText = "Strong Password 💪";
        }
    }
};
