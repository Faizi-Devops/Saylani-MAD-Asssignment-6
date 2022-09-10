let a:string|null=prompt("Please enter the nubmer to get the factorial of the number");
let b:number=Number(a);
let c:number;
let mul:number=1;
for(c=b;c>=1;c--){
    mul=mul*c;

    
}
console.log(`The factorial of ${b} is ${mul}`)