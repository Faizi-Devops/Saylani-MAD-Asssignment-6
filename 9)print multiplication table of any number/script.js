var a = prompt("Please enter the table name");
var b = Number(a);
var c = prompt("Please enter the range of the table");
var d = Number(c);
var e;
if (b <= 0 || d <= 0) {
    alert("Please enter thevalid number");
}
else if (b >= 0 || d >= 0) {
    for (e = 1; e <= d; e++) {
        console.log(b + "*" + e + "=" + b * e);
    }
}
