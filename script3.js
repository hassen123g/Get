let loginForm = document.getElementById("loginForm"),
    error = document.getElementById("error");

let nameKey = "admin",
    passKey = "123456789";

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim("");
    const password = document.getElementById("password").value.trim("");

    if (username === nameKey && password === passKey) {
        localStorage.setItem("isAdmin", true);
        window.location.href = "./dashboard/index.html";
    } else {
        error.classList.remove("d-none");
        return null;
    }

    loginForm.reset();
});

// --- Show Password ---
const passwordInput = document.getElementById("password");
const toggleBtn = document.getElementById("togglePassword");

toggleBtn.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type");
    if (type === "password") {
        passwordInput.setAttribute("type", "text");
        toggleBtn.innerHTML = '<i class="bi bi-eye-slash eye"></i>';
    } else {
        passwordInput.setAttribute("type", "password");
        toggleBtn.innerHTML = '<i class="bi bi-eye-fill eye"></i>';
    }
});

