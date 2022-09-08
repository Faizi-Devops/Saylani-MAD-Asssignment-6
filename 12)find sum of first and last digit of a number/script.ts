let a:string|null=prompt("Please enter a number");
let b :number = Number(a);
let c:number;
let d:number;

for(c=b;c>10;c=c/10)
{

}
console.log("The First number is " + Math.floor(c));
d=b%10;
console.log("The last Number is " + d);

console.log("The sum of first and last number is " + Math.floor(c+d));
