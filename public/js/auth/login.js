document.getElementById("signInDialog").querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = document.getElementById("signInUsername").value;
  const password = document.getElementById("signInPassword").value;
  try {
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const result = await response.json();
    if (response.ok) {
      alert("Login successful!");
      document.getElementById("signInDialog").close();
    } else {
      alert(result.error);
    }
  } catch (error) {
    alert("An error occurred during login.");
  }
});
