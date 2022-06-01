/* 
Procedure for MERGE-SORT and auxiliary-procedure MERGE

MERGE(A, p, q, r)
1  nL = q - p + 1 // length of A[p:q]
2  nR = r - q // length of A[q + 1:r]
3  let L[0:nL-1] and R[0:nR-1] be new arrays
4  for i = 0 to nL - 1
5    L[i] = A[p + i] // copy A[p:q] into L[0:nL - 1]
6  for j = 0 to nR - 1
7    R[j] = A[q + j + 1] // copy A[q + 1:r] into R[0:nR - 1]
8  i = 0 // i indexes the smallest remaining element in L
9  j = 0 // j indexes the smallest remaining element in R
10 k = p // k indexes the location to fill in A with the smallest of L[i], R[j]
11 // as long as each of the arrays L & R contains an unmerged element
   // copy the smallest unmerged element back into A[p:r]
12 while i < nL and j < nR
13  if L[i] <= R[j]
14    A[k] = L[i]
15    i = i + 1
16  else
17    A[k] = R[j]
18    j = j + 1
19  k = k + 1
20 // having gone through one of L and R entirely, copy the remainder of the
   // other to the end of A[p:r]
21 while i < nL
    // if R has been copied entirely then we end up i < nL and copy the remainder
    // of L[i:nL - 1] into A[k:r]
22  A[k] = L[i]
23  i = i + 1
24  k = k + 1
25 while j < nR
    // if L has been copied entirely then we end up j < nR and copy the remainder
    // of  R[j:nR - 1] into A[k:r]
26  A[k] = R[j]
27  j = j + 1
28  k = k + 1

MERGE-SORT(A,p,r)
1  if p >= r
2  
*/

let merge = function (A, p, q, r) {
  // length of A[p:q]
  let nL = q - p + 1;
  // length of A[q + 1:r]
  let nR = r - q;

  // create an array L[0:nL-1]
  let L = new Array(nL);
  // create an array R[0:nR-1]
  let R = new Array(nR);

  // copy A[p:q] into L[0:nL-1]
  for (let i = 0; i < nL; i++) L[i] = A[p + i];
  // copy A[q+1:r] into R[0:nR-1]
  for (let j = 0; j < nR; j++) R[j] = A[q + j + 1];

  // i indexes the smallest remaining element in L
  let i = 0;
  // j indexes the smallest remaining element in R
  let j = 0;
  // k indexes the location to fill in A with the smallest of L[i], R[j]
  let k = p;

  // as long as each of the arrays L & R contains an unmerged element
  // copy the smallest unmerged element back into A[p:r]
  while (i < nL && j < nR) {
    if (L[i] <= R[j]) {
      A[k] = L[i];
      i += 1;
    } else {
      A[k] = R[j];
      j += 1;
    }
    k += 1;
  }

  // having gone through one of L and R entirely, copy the remainder of the
  // other into end of A[p:r]
  while (i < nL) {
    // if R has been copied entirely then we end up i < nL and copy the remainder
    // of L[i:nL - 1] into A[k:r]
    A[k] = L[i];
    i += 1;
    k += 1;
  }

  while (j < nR) {
    // if L has been copied entirely then we end up j < nR and copy the remainder
    // of R[j:nR - 1] into A[k:r]
    A[k] = R[j];
    j += 1;
    k += 1;
  }
};

let mergeSort = function () {};

let a = [2, 4, 6, 7, 1, 2, 3, 5];
console.log(`Array before merge is: ${a}`);
merge(a, 0, 3, 7);
console.log(`Array after merge is: ${a}`);
