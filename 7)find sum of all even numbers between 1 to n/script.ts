let a:string|null=prompt("Please enter the number");
let b:number=Number(a);
let c:number;
var d:number=0;


if(b<=0)
{
    alert("PLease enter the postive number range from 1-innfinity");

}
else if (b>=0)
{
    for(c=1; c<=b;c++){
        if(c%2==0)
        {
            d=d+c;


        }
        
    }
    console.log(`${d}`)

}