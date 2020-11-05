const currentArr = [];

export function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let index = partition(arr, start, end);
  currentArr[index] = -1;
  // console.log(currentArr, "what is currentArr in quickSort fn");
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
}

function partition(arr, start, end) {
  for (let i = start; i < end; i++) {
    currentArr[i] = 1;
  }

  let pivotValue = arr[end];
  let pivotIndex = start;
  currentArr[pivotIndex] = 0;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex);
      currentArr[pivotIndex] = -1;
      pivotIndex++;
      currentArr[pivotIndex] = 0;
    }
  }
  swap(arr, pivotIndex, end);

  for (let i = start; i < end; i++) {
    if (i !== pivotIndex) {
      currentArr[i] = -1;
    }
  }

  return pivotIndex;
}

function swap(arr, a, b) {
  sleep(50);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
