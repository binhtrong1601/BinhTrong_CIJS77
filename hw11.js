//cho mot mang n so nguyen, dem xem trong mang co bao nhieu phan tu khac nhau, mỗi số xuất hiện bao nhiêu lần trong mảng
const array1 = [1, 2, 3, 4, 1, 1, 3, 3, 5, 6, 6, 4, 6];
function demSoKhacNhau(array) {
  const hashMap = {};
  for (const num of array) {
    if (hashMap[num] === undefined) {
      hashMap[num] = 1;
    } else {
      hashMap[num]++;
    }
  }

  console.log(hashMap);
}
demSoKhacNhau(array1);
