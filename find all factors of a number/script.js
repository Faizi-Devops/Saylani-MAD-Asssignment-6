var a = prompt("Please enter a number");
var b = Number(a);
var c;
for (c = 1; c <= b; c++) {
    if (b % c == 0) {
        console.log("The Factors is ".concat(c));
    }
}
