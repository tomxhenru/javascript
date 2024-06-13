// Số nguyên
// Số thập phân: 3.4 3.5
console.log(5 + 7);
console.log(typeof 10);
const number1 = "4.7";
const number2 = "5";
console.log(parseInt(number2));
console.log(parseFloat(number1));
const number3 = -10;
// Math.abs(value)
console.log(Math.abs(number3)); //10 lấy giá trị tuyệt đối
// Math.floor(value) -> làm tròn xuống 4.3 -> 4
console.log(Math.floor(4.4));
// Match.ceil(value) -> làm tròn lên ví dụ 4.3 -> 5
console.log(Math.ceil(4.3));
console.log(1 / 3);
// toFixed(number) ví dụ: 0.333333 -> 0.33
console.log((1 / 3).toFixed(2));
console.log(Math.ceil(Math.random() * 10));
//Math.max -> trả ra số lớn nhất
//Math.min -> trả ra số nhỏ nhất
console.log(`Max: ${Math.max(1, 2, 3)}`);
console.log(`Min: ${Math.min(1, 2, 3)}`);
// Math.pow(number1, number2); Math.pow(3, 2) -> 3^2=9
console.log(Math.pow(3, 2));

//isNaN(value) vs Number.isNaN(value)
// NaN -> not a Number
console.log(isNaN("this is a string")); //true
console.log(isNaN("12345")); //(không phải số) -> isNaN(12345) -> false
console.log(Number.isNaN("5")); // false
console.log(Number.isNaN(NaN)); //true
