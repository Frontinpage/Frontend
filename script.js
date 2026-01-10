// Lightweight client-side handlers.
// IMPORTANT: This example assumes real auth/transactions are handled on the server.
// Do NOT keep real credentials or transaction logic entirely in front-end code.

document.addEventListener("DOMContentLoaded", () => {
  // Login
  const loginForm = document.getElementById("login-form");
  if (loginForm) loginForm.addEventListener("submit", handleLogin);

  // Logout
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) logoutBtn.addEventListener("click", handleLogout);

  // Send Money
  const sendForm = document.getElementById("send-money-form");
  if (sendForm) sendForm.addEventListener("submit", handleSendMoney);
});

// ===== Login handler =====
function handleLogin(event) {
  event.preventDefault();

  const username = (document.getElementById("username") || {}).value?.trim() || "";
  const password = (document.getElementById("password") || {}).value || "";
  const messageEl = document.getElementById("login-message");

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  // Show loading message
  messageEl.style.color = "blue";
  messageEl.textContent = "Checking credentials...";

  // Simulate server delay
  setTimeout(() => {
    if (username === "John Williams" && password === "Password123") {
      messageEl.style.color = "green";
      messageEl.textContent = "Login successful! Redirecting...";

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);
    } else {
      messageEl.style.color = "red";
      messageEl.textContent = "Invalid username or password.";
    }
  }, 1500);
}

// ===== Logout handler =====
function handleLogout(event) {
  // Optional: call server logout endpoint
  window.location.href = "index.html";
}

document.getElementById("send-money-form").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent form from reloading page

  const bank = document.getElementById("bank").value;
  const account = document.getElementById("account").value;
  const recipient = document.getElementById("recipient").value;
  const amount = document.getElementById("amount").value;
  const note = document.getElementById("note").value;

  if (!bank || !account || !recipient || !amount) {
    alert("Please fill all required fields!");
    return;
  }

  alert(`Successfully sent $${amount} to ${recipient} (${bank})`);
  this.reset(); // clear form
});

// Toggle Transfer Form
const toggleBtn = document.getElementById("toggle-transfer-btn");
const sendForm = document.getElementById("send-money-form");

toggleBtn.addEventListener("click", () => {
  if (sendForm.style.display === "none") {
    sendForm.style.display = "block";
    toggleBtn.textContent = "Hide Transfer Form";
  } else {
    sendForm.style.display = "none";
    toggleBtn.textContent = "Show Transfer Form";
  }
});
