let a:string|null=prompt("Please enter a number");
let b :number|null= Number(a);
var d:number;

let c:number = b%10;
console.log("The last digit is " + c);

while(b>10){
    b=b/10
}
console.log("The first digit is " + (b));