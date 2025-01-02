import { startVisualization } from "./visualization.js";

document.getElementById("bubbleSort").addEventListener("click", () => {
  startVisualization("Bubble Sort");
});

document.getElementById("quickSort").addEventListener("click", () => {
  startVisualization("Quick Sort");
});

document.getElementById("mergeSort").addEventListener("click", () => {
  startVisualization("Merge Sort");
});