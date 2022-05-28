let linearSearch = function (a, key) {
  let n = a.length;

  for (let i = 0; i < n; i++) {
    if (a[i] === key) return i;
  }

  return null;
};

let a = [21, 15, 52, 15, 40, 15, 49, 15, 22, 15, 19, 15, 43];
console.log(linearSearch(a, 15));
console.log(linearSearch(a, 21));
console.log(linearSearch(a, 42));
