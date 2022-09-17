let a:string|null=prompt("Please enter the number");
let b:number=Number(a);
let c:string|null=prompt("Please enter the power");
let d:number=Number(c)
let i:number;
let j:number=1;

for(i=1;i<=d;i++){
    j=j*b;

}
console.log(`The power is  ${j}`)
