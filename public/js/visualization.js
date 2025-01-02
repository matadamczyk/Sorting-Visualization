import {
  generateRandomArray,
  bubbleSort,
  quickSort,
  mergeSort,
} from "./algorithms";

export const startVisualization = (algorithm) => {
  const canvas = document.getElementById("visualizationCanvas");
  const ctx = canvas.getContext("2d");

  const array = generateRandomArray(20);
  switch (algorithm) {
    case "Bubble Sort":
      bubbleSort(array, ctx);
    case "Quick Sort":
      quickSort(array, ctx);
    case "Merge Sort":
      mergeSort(array, ctx);
    default:
      console.log("Unknown algorithm");
  }
};

export const visualizeArray = async (array, ctx) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      array.forEach((value, index) => {
        ctx.fillStyle = "blue";
        ctx.fillRect(index * 30, ctx.canvas.height - value, 20, value);
      });
      resolve();
    }, 100);
  });
};
