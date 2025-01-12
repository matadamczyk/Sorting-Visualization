document.getElementById("signUpDialog").querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = document.getElementById("signUpUsername").value;
  const password = document.getElementById("signUpPassword").value;
  try {
    const response = await fetch("/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const result = await response.json();
    if (response.ok) {
      alert("Registration successful!");
      document.getElementById("signUpDialog").close();
    } else {
      alert(result.error);
    }
  } catch (error) {
    alert("An error occurred during registration.");
  }
});
