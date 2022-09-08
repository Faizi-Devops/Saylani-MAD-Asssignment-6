let a:string|null = prompt("Please enter the number");
let b:number = Number(a);
let c:number;
let d:number;
let e:number;


for(c=b;c>10;c=c/10){

}
console.log("The First digit is " + Math.floor(c));

d=b%10;
console.log("The last digit is " + (d));

console.log("The first digit and last digit is after swapping");
e=c;
c=d;
d=e;
console.log("The First digit is " + c);
console.log("The last digit is " + Math.floor(d));
