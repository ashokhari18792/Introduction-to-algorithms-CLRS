/* Pseudo code for binary search recursive.
BINARY-SEARCH(A, p, r, v)
1 if p > r
2   return NIL // Array is empty and return NIL.
3 q = Math.floor((p + r) / 2)
4 if A[q] == v
5   return q
6 if A[q] > v
7   BINARY-SEARCH-RECURSIVE(A, p, q - 1, v)
8 else
9   BINARY-SEARCH-RECURSIVE(A, q + 1, r, v)
*/
let binarySearchRecursive = function (A, p, r, v) {
  if (p > r) return null;

  q = Math.floor((p + r) / 2); // calculate the mid-point of the array

  if (A[q] === v) return q;

  if (A[q] > v) {
    // 'v' should not be in the array A[q + 1:r] and perform recursive binary search on
    // array A[p:q - 1]
    return binarySearchRecursive(A, p, q - 1, v);
  } else {
    // 'v' should not be in the array A[p:q - 1] and perform recursive binary search on
    // array A[q + 1: r]
    return binarySearchRecursive(A, q + 1, r, v);
  }
};

// let a = [1, 2, 3, 4, 5];
// let v1 = 6;
// let v2 = 5;
// console.log(binarySearchRecursive(a, 0, 4, v1));
// console.log(binarySearchRecursive(a, 0, 4, v2));

/* Pseudo code for binary search iterative
BINARY-SEARCH-ITERATIVE(A, v)
1 p = 1
2 r = A.length
3 while p <= r
4   q = Math.floor((p + q) / 2)
5   if A[q] == v
6     return q
7   if A[q] > v
8     r = q - 1
9   else
10    p = q + 1
11 return NIL
*/

let binarySearchIterative = function (A, v) {
  let p = 0;
  let r = A.length - 1;

  while (p <= r) {
    let q = Math.floor((p + r) / 2);

    if (A[q] === v) return q;

    if (A[q] > v) r = q - 1;
    else p = q + 1;
  }
  return null;
};

let a = [1, 2, 3, 4, 5];
let v1 = 6;
let v2 = 5;
console.log(binarySearchIterative(a, v1));
console.log(binarySearchIterative(a, v2));
