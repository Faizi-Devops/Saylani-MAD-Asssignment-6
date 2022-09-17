var a = prompt("Please enter a number");
var b = Number(a);
var c;
var d;
if (b > 0) {
    c = Math.floor(b % 10);
    d = Math.floor(b / 10);
    debugger;
    console.log(c + d);
}
