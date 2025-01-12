import { visualizeArray } from "./visualization";

export const generateRandomArray = (size) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
};

export const bubbleSort = async (array, ctx) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        await visualizeArray(array, ctx, j + 1);
      }
    }
  }
  return array;
};

export const insertionSort = async (array, ctx) => {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
      await visualizeArray(array, ctx, j + 1);
    }
    array[j + 1] = key;
    await visualizeArray(array, ctx, j + 1);
  }
  return array;
};

export const selectionSort = async (array, ctx) => {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
      await visualizeArray(array, ctx, j, -1, i, minIndex);
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
    await visualizeArray(array, ctx, i, -1, i, minIndex);
  }
  return array;
};

export const quickSort = async (
  array,
  ctx,
  left = 0,
  right = array.length - 1
) => {
  if (left < right) {
    const pivotIndex = await partition(array, ctx, left, right);
    await quickSort(array, ctx, left, pivotIndex - 1);
    await quickSort(array, ctx, pivotIndex + 1, right);
  }
  return array;
};

const partition = async (array, ctx, left, right) => {
  const pivot = array[right];
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (array[j] < pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
      await visualizeArray(array, ctx, j);
    }
  }
  [array[i + 1], array[right]] = [array[right], array[i + 1]];
  await visualizeArray(array, ctx, right);
  return i + 1;
};

export const mergeSort = async (
  array,
  ctx,
  left = 0,
  right = array.length - 1
) => {
  if (left < right) {
    const middle = Math.floor((left + right) / 2);
    await mergeSort(array, ctx, left, middle);
    await mergeSort(array, ctx, middle + 1, right);
    await merge(array, ctx, left, middle, right);
  }
  return array;
};

const merge = async (array, ctx, left, middle, right) => {
  const leftArray = array.slice(left, middle + 1);
  const rightArray = array.slice(middle + 1, right + 1);

  let i = 0,
    j = 0,
    k = left;
  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] <= rightArray[j]) {
      array[k] = leftArray[i];
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }
    await visualizeArray(array, ctx, k);
    k++;
  }

  while (i < leftArray.length) {
    array[k] = leftArray[i];
    i++;
    k++;
    await visualizeArray(array, ctx, k);
  }

  while (j < rightArray.length) {
    array[k] = rightArray[j];
    j++;
    k++;
    await visualizeArray(array, ctx, k);
  }
};

