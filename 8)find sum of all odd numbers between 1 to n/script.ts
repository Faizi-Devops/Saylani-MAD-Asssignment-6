let a:string|null=prompt("Please enter the number");
let b:number=Number(a);
let c:number;
let d:number=0;
if(b<=0)
{
    alert("Pleae enter the number form the range 1-infinity positive number");
}
else if(b>0){
    for(c=1;c<=b;c++)
    {
        if(c%2!=0){
            d=d+c;

        }
    }
    console.log(`${d}`)
}