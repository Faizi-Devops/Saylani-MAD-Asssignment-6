let a:string|null=prompt("Please enter the digit");
let b:string[]=a!.split("");
let c:string[]=b.reverse();
let d:string=c.join("");
if(a==d){
    alert("The number is palindrom")

}
else{
    alert("The number is not palindrome");
}