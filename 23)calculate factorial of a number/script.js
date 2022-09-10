var a = prompt("Please enter the nubmer to get the factorial of the number");
var b = Number(a);
var c;
var mul = 1;
for (c = b; c >= 1; c--) {
    mul = mul * c;
}
console.log("The factorial of ".concat(b, " is ").concat(mul));
