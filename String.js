// String (chuỗi)
const name = "Phương Nam";
const job = "chill chill";
// console.log(name);
// console.log(typeof name);
const newStr = "my nam is Nam hehe";
const newStr2 = "my nam is " + name + " and I am " + job;
// console.log(newStr2);
// ${variable}
const newStr3 = `My name is ${name} and I am ${job}`;
console.log(newStr3);
// .length
console.log(newStr3.length);
// index là vị trí của kí tự trong chuỗi(bao gồm cả khoảng trắng)
const myStr = "Frontend Developer D";
console.log(myStr.split(" ")); // mảng 2 từ
console.log(myStr.split("")); // từng kí tự
console.log(myStr.toLowerCase()); //viết thường hết các kí tự
console.log(myStr.toUpperCase()); // in hoa hết các kí tự
console.log(myStr.startsWith("Frontend")); // kiểm tra
console.log(myStr.endsWith("Developer"));
console.log(myStr.indexOf("D")); // 9
console.log(myStr.lastIndexOf("D")); // 19
console.log(myStr.replace("Developer", "Designer"));
console.log(myStr.repeat(5));
// "Frontend Developer D"
// slice(start, end);
console.log(myStr.slice(0, 8)); //Frontend
// strim : loại bỏ khoảng trống giữa 2 bên
// charAt : lấy ra phần tử dựa vào index
const myStr2 = "Frontend";
console.log(myStr.charAt(0));
// substr -> Lấy ra một phần của chuỗi(string)
// substr(index, length)
console.log(myStr2.substr(1, 5));
// substring -> Lấy ra các kí tự chuỗi(string)
// substring(start index, end index)
console.log(myStr2.substring(1, 5));

const myStr3 = "  Frontend Developer D  ";
// Loại bỏ khoảng trống 2 bên, đưa tất cả về in hoa, thay chữ Deverloper D thành chữ Developer and Designer, sau đó lặp lại 2 lần.
// console.log(
//   myStr3
//     .trim()
//     .replace("Developer D", "Developer and Designer")
//     .toLocaleUpperCase()
//     .repeat(2)
// );
console.log(
  `Result of myStr3: ${myStr3
    .trim()
    .replace("Developer D", "Developer and Designer")
    .toLocaleUpperCase()
    .repeat(2)}`
);
