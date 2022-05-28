let selectionSort = function (a) {
  let n = a.length;

  for (let i = 0; i < n - 1; i++) {
    // initializing the mininmum index for iteration i
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[min]) min = j;
    }

    [a[i], a[min]] = [a[min], a[i]];
  }
};

let a = [5, 2, 4, 6, 1, 3];
console.log(`Array before sorting is: ${a}`);
selectionSort(a);
console.log(`Array after sorting is: ${a}`);
