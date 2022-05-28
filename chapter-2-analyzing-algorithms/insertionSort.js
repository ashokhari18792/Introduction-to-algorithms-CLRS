let insertionSort = function (a) {
  // getting the length of the array
  let n = a.length;

  for (let i = 1; i < n; i++) {
    let key = a[i];

    // put the key a[i] in the appropriate position in the
    // sorted sub-array a[0:i-1] by iterating j from i-1
    // till 0 and till the condition 'a[j] > key' hold and shifting
    // a[j] one position right.
    let j = i - 1;

    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j -= 1;
    }

    a[j + 1] = key;
  }
};

// let a = [5, 2, 4, 6, 1, 3];
// console.log(`Array before sorting is: ${a}`);
// insertionSort(a);
// console.log(`Array after sorting is: ${a}`);

let insertionSortInverse = function (a) {
  let n = a.length;

  for (let i = 1; i < n; i++) {
    let key = a[i];

    // put the key a[i] in the approproate position in the
    // sorted sub-array a[0:i-1] by iterating j from i-1
    // till 0 and till the condition 'a[j] < key' hold and shifting
    // a[j] to one position right.
    let j = i - 1;

    while (j >= 0 && a[j] < key) {
      a[j + 1] = a[j];
      j -= 1;
    }

    a[j + 1] = key;
  }
};

let a = [5, 2, 4, 6, 1, 3];
console.log(`Array before sorting is: ${a}`);
insertionSortInverse(a);
console.log(`Array after sorting is: ${a}`);
