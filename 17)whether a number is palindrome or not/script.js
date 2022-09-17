var a = prompt("Please enter the digit");
var b = a.split("");
var c = b.reverse();
var d = c.join("");
if (a == d) {
    alert("The number is palindrom");
}
else {
    alert("The number is not palindrome");
}
