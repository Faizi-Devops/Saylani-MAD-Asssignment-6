var a = prompt("Please enter a number");
var b = Number(a);
var c;
if (b <= 0) {
    alert("Please enter a digit from 1-n  positive number");
}
else if (b > 0) {
    c = b;
    while (c >= 1) {
        document.write("".concat(c));
        document.write("<br>");
        c--;
    }
}
else {
    alert("Please enter the correct number");
}
