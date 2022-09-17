var a = prompt("Please enter the number");
var b = Number(a);
var c = prompt("Please enter the power");
var d = Number(c);
var i;
var j = 1;
for (i = 1; i <= d; i++) {
    j = j * b;
}
console.log("The power is  ".concat(j));
