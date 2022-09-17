var a = prompt("Please enter a number");
var b = Number(a);
var d;
var c = b % 10;
console.log("The last digit is " + c);
while (b > 10) {
    b = b / 10;
}
console.log("The first digit is " + (b));
