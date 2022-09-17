let a:string|null=prompt("Please enter the table name");
let b:number=Number(a);
let c:string|null=prompt("Please enter the range of the table");
let d:number=Number(c);
let e:number;

if(b<=0||d<=0){
    alert("Please enter thevalid number")
}
else if(b>=0||d>=0)
{
    for(e=1;e<=d;e++)
    {
        console.log(b + "*" + e + "=" + b*e);
    }

}