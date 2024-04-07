var arrUser = [];
for (i = 0; i < 3; i++) {
  arrUser.push(Number(prompt("enter 3 nums")));
}

// do {
//   var ansUser = prompt("choose one ( +  *  / )");
// } while (ansUser != "+" && ansUser != "*" && ansUser != "/");
// var res = arrUser[0];

var add = function (arr) {
  var res = arr[0];
  for (i = 1; i < arr.length; i++) {
    res += arr[i];
  }
  return `${arr.join("+")} = ${res}`;
};

var multi = function (arr) {
  var res = arr[0];
  for (i = 1; i < arr.length; i++) {
    res *= arr[i];
  }
  return `${arr.join("*")} = ${res}`;
};

var devide = function (arr) {
  var res = arr[0];
  for (i = 1; i < arr.length; i++) {
    res /= arr[i];
  }
  return `${arr.join("/")} = ${res}`;
};

// if (ansUser === "+") {
// console.log(add(arrUser));
document.writeln("<h1>" + add(arrUser) + "</h1>");
// } else if (ansUser === "*") {
// console.log(multi(arrUser));
document.writeln("<h1>" + multi(arrUser) + "</h1>");
// } else {
// console.log(devide(arrUser));
document.writeln("<h1>" + devide(arrUser) + "</h1>");
// }

// console.log(4 / 8 / 1);
