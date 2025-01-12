import {
  bubbleSort,
  generateRandomArray,
  insertionSort,
  mergeSort,
  quickSort,
  selectionSort,
} from "./algorithms.js";

export const startVisualization = (algorithm, array) => {
  const canvas = document.getElementById("visualizationCanvas");
  const ctx = canvas.getContext("2d");

  switch (algorithm) {
    case "Bubble Sort":
      bubbleSort(array, ctx);
      break;
    case "Quick Sort":
      quickSort(array, ctx);
      break;
    case "Merge Sort":
      mergeSort(array, ctx);
      break;
    case "Insertion Sort":
      insertionSort(array, ctx);
      break;
    case "Selection Sort":
      selectionSort(array, ctx);
      break;
    default:
      console.log("Unknown algorithm");
  }
};

export const visualizeArray = async (array, ctx, movingIndex = -1) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      const barWidth = ctx.canvas.width / array.length;
      array.forEach((value, index) => {
        ctx.fillStyle = index === movingIndex ? "red" : "blue";
        ctx.fillRect(index * barWidth, ctx.canvas.height - value, barWidth - 5, value);
      });
      resolve();
    }, 100);
  });
};

export const showStartingArray = (array) => {
  const canvas = document.getElementById("visualizationCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  const barWidth = ctx.canvas.width / array.length;
  array.forEach((value, index) => {
    ctx.fillStyle = "blue";
    ctx.fillRect(index * barWidth, ctx.canvas.height - value, barWidth - 5, value);
  });
};
