/*
INSERTION-SORT(A, n)
1 for i = 2 to n
2   key = A[i]
3   // insert A[i] into the sorted sub-array A[1: i - 1]
4   j = i - 1
5   while j > 0 and A[j] > key
6     A[j + 1] = A[j]
7     j = j - 1
8   A[j + 1] = key
*/

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

/*
INSERTION-SORT-INVERSE(A, n)
1 for i = 2 to n
2   key = A[i]
3   // insert A[i] into the sorted sub-array A[1: i - 1]
4   j = i - 1
5   while j > 0 and A[j] < key
6     A[j + 1] = A[j]
7     j = j - 1
8   A[j + 1] = key
*/

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

// let a = [5, 2, 4, 6, 1, 3];
// console.log(`Array before sorting is: ${a}`);
// insertionSortInverse(a);
// console.log(`Array after sorting is: ${a}`);

/*
2.3-5: Recursive version of Insertion Sort: You can also think of Insertion sort as
  a recursive algorithm. In order to sort A[1:n], recursively sort the sub-array
  A[1:n-1] and then insert A[n] into the sorted sub-array A[1:n-1]. write a pseudo
  code for this recursive version of insertion sort. give a recurrence for its worst case running time.

INSERTION-SORT-RECURSIVE(A,n)
1 if n <= 1
2   return
3 // recursively sort A[1:n - 1]
3 INSERTION-SORT-RECURSIVE(A,n-1)
4 // place the element A[n] into the sorted sub-array A[1:n - 1] so that 
  // entire A[1:n] is sorted.
5 j = n - 1
6 key = A[n]
7 while j > 0 and A[j] > key
8   A[j + 1] = A[j]
9   j = j - 1
10 A[j + 1] = key
*/

let insertionSortRecursive = function (A, n) {
  if (n <= 1) return;

  // sort A[0:n - 2] recursively
  insertionSortRecursive(A, n - 1);
  let key = A[n - 1];
  let j = n - 2;

  // place the element A[n - 1] into the sorted sub-array A[0:n - 2]
  while (j >= 0 && A[j] > key) {
    A[j + 1] = A[j];
    j = j - 1;
  }

  A[j + 1] = key;
};

// let a = [5, 2, 4, 6, 1, 3];
let a = [12, 3, 7, 9, 14, 6, 11, 12];
// let a = [12, 3, 7, 9];
console.log(`Array before sorting is: ${a}`);
insertionSortRecursive(a, 8);
console.log(`Array after sorting is: ${a}`);
