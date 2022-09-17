var a = prompt("Please enter the first number");
var b = Number(a);
var c = prompt("Please enter the last number");
var d = Number(c);
if ((b >= 0 && b <= 256) && (d >= 0 && d <= 256)) {
    for (var e = b; e <= d; e++) {
        console.log(e.toString().charCodeAt(e));
        console.log("<br>");
    }
}
else {
    console.log("Please enter the correct  digit");
}
