let a:string|null=prompt("Please enter a number");
let b:number=Number(a);
let c:number;
for(c=1;c<=b;c++){
    if(b%c==0){
        console.log(`The Factors is ${c}`)
    }
}