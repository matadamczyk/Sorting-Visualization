import { showStartingArray, startVisualization } from "./visualization.js";

import { generateRandomArray } from "./algorithms.js";

let selectedAlgorithm = null;
let arraySize = 10;
let array = [];

document.getElementById("bubbleSort").addEventListener("click", () => {
  selectedAlgorithm = "Bubble Sort";
});

document.getElementById("quickSort").addEventListener("click", () => {
  selectedAlgorithm = "Quick Sort";
});

document.getElementById("mergeSort").addEventListener("click", () => {
  selectedAlgorithm = "Merge Sort";
});

document.getElementById("arraySize").addEventListener("input", (event) => {
  arraySize = event.target.value;
  document.getElementById("arraySizeValue").textContent = arraySize;
});

document.getElementById("showArray").addEventListener("click", () => {
  array = generateRandomArray(arraySize);
  showStartingArray(array);
});

document.getElementById("startVisualization").addEventListener("click", () => {
  if (selectedAlgorithm) {
    startVisualization(selectedAlgorithm, arraySize);
  } else {
    alert("Please select an algorithm first.");
  }
});
