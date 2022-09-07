var a = prompt("Please enter a number");
var b = Number(a);
var c;
var d = 0;
if (b <= 0) {
    alert("Please enter a number between the range 1-infinity positive numbers");
}
else if (b > 0) {
    for (c = 1; c <= b; ++c) {
        d = d + c;
    }
    console.log("".concat(d));
}
