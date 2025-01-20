import "./auth/register.js";
import "./auth/login.js";

import { showStartingArray, startVisualization } from "./visualization.js";

import { generateRandomArray } from "./algorithms.js";

let selectedAlgorithm = null;
let arraySize = 10;
let array = [];

document.getElementById("bubbleSort")?.addEventListener("click", () => {
  selectedAlgorithm = "Bubble Sort";
  document.getElementById("bubbleSort").classList.add("active");
});

document.getElementById("quickSort")?.addEventListener("click", () => {
  selectedAlgorithm = "Quick Sort";
  document.getElementById("quickSort").classList.add("active");
});

document.getElementById("mergeSort")?.addEventListener("click", () => {
  selectedAlgorithm = "Merge Sort";
  document.getElementById("mergeSort").classList.add("active");
});

document.getElementById("insertionSort")?.addEventListener("click", () => {
  selectedAlgorithm = "Insertion Sort";
  document.getElementById("insertionSort").classList.add("active");
});

document.getElementById("selectionSort")?.addEventListener("click", () => {
  selectedAlgorithm = "Selection Sort";
  document.getElementById("selectionSort").classList.add("active");
});

document.getElementById("arraySize")?.addEventListener("input", (event) => {
  arraySize = event.target.value;
  document.getElementById("arraySizeValue").textContent = arraySize;
});

document.getElementById("showArray")?.addEventListener("click", () => {
  array = generateRandomArray(arraySize);
  showStartingArray(array);
});

document
  .getElementById("startVisualization")
  ?.addEventListener("click", async () => {
    if (selectedAlgorithm) {
      startVisualization(selectedAlgorithm, array);
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("/api/save-visualization", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            algorithm: selectedAlgorithm,
            date: new Date(),
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to save visualization history");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please select an algorithm first.");
    }
  });

document.getElementById("signInButton")?.addEventListener("click", () => {
  document.getElementById("signInDialog").showModal();
});

document.getElementById("signUpButton")?.addEventListener("click", () => {
  document.getElementById("signUpDialog").showModal();
});

document.getElementById("closeSignInDialog")?.addEventListener("click", () => {
  document.getElementById("signInDialog").close();
});

document.getElementById("closeSignUpDialog")?.addEventListener("click", () => {
  document.getElementById("signUpDialog").close();
});

const token = localStorage.getItem("token");
if (token) {
  if (document.getElementById("welcomePage")) {
    document.getElementById("welcomePage").style.display = "none";
  }
  if (document.getElementById("appPage")) {
    document.getElementById("appPage").style.display = "block";
  }
  document.getElementById("signInButton").style.display = "none";
  document.getElementById("signUpButton").style.display = "none";
  document.getElementById("profile").style.display = "inline";
  document.getElementById("logoutButton").style.display = "block";
}

document.getElementById("logoutButton")?.addEventListener("click", () => {
  localStorage.removeItem("token");
  location.reload();
  location.href = "/";
});

document.querySelectorAll("#appPage button").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll("#appPage button")
      .forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

document
  .getElementById("signInDialog")
  ?.querySelector("form")
  ?.addEventListener("submit", async (event) => {
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
        localStorage.setItem("token", result.token);
        location.reload();
        document.getElementById("signInDialog").close();
      } else {
        alert(result.error);
      }
    } catch (error) {
      alert("An error occurred during login.");
    }
  });

document
  .getElementById("signUpDialog")
  ?.querySelector("form")
  ?.addEventListener("submit", async (event) => {
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
        localStorage.setItem("token", result.token);
        location.reload();
        document.getElementById("signUpDialog").close();
      } else {
        alert(result.error);
      }
    } catch (error) {
      alert("An error occurred during registration.");
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  async function fetchHistory() {
    const token = localStorage.getItem("token");
    console.log("Token:", token); 
    try {
      const response = await fetch("/api/visualization-history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const history = await response.json();
      console.log("Fetched history:", history); 
      const historyList = document.getElementById("historyList");
      if (historyList && Array.isArray(history)) {
        historyList.innerHTML = "";
        history.forEach((item) => {
          const listItem = document.createElement("li");
          listItem.textContent = `${item.algorithm} - ${new Date(item.date).toLocaleString()}`;
          historyList.appendChild(listItem);
        });
      } else {
        console.error("History is not an array:", history);
      }
    } catch (error) {
      console.error("Failed to fetch visualization history", error);
    }
  }

  fetchHistory();

  // const token = localStorage.getItem("token");
  // if (token) {
  //   document.getElementById("signInButton").style.display = "none";
  //   document.getElementById("signUpButton").style.display = "none";
  //   document.getElementById("profile").style.display = "inline";
  //   document.getElementById("logoutButton").style.display = "block";
  // } else {
  //   document.getElementById("signInButton").style.display = "block";
  //   document.getElementById("signUpButton").style.display = "block";
  //   document.getElementById("profile").style.display = "none";
  //   document.getElementById("logoutButton").style.display = "none";
  // }
});
