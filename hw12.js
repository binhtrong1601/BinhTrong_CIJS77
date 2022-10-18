const n = 123345;
function timSoLonNhat(n) {
  let max = 0;
  let temp = n % 10;
  while (n > 0) {
    n /= 10;
  }
  if (temp > max) {
    max = temp;
  }
  console.log(max);
}
timSoLonNhat(n);
