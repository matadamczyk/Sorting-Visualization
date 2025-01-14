export function checkAuthStatus() {
  const token = localStorage.getItem("token");
  if (token) {
    document.getElementById("signInButton").style.display = "none";
    document.getElementById("signUpButton").style.display = "none";
    document.getElementById("profile").style.display = "inline";
    document.getElementById("logoutButton").style.display = "block";
  } else {
    document.getElementById("signInButton").style.display = "block";
    document.getElementById("signUpButton").style.display = "block";
    document.getElementById("profile").style.display = "none";
    document.getElementById("logoutButton").style.display = "none";
  }
}
