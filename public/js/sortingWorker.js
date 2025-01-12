self.visualizeArray = async (array, ctx, movingIndex = -1) => {
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

importScripts('/public/js/algorithms.js');

onmessage = async function (e) {
  const { algorithm, array } = e.data;
  let sortedArray;

  switch (algorithm) {
    case "Bubble Sort":
      sortedArray = await bubbleSort(array);
      break;
    case "Quick Sort":
      sortedArray = await quickSort(array);
      break;
    case "Merge Sort":
      sortedArray = await mergeSort(array);
      break;
    case "Insertion Sort":
      sortedArray = await insertionSort(array);
      break;
    case "Selection Sort":
      sortedArray = await selectionSort(array);
      break;
    default:
      postMessage({ error: "Unknown algorithm" });
      return;
  }

  postMessage({ array: sortedArray });
};
