var a:string|null=prompt("Please enter the number");
var b :number=Number(a);
var c:number;
if(b<=0){
    alert("PLease enter the number (1-infinity only poositive number)");
}
else if(b>0)
{
    for(c=1;c<=b;c++){
        document.write(`${c}`)
        document.write("<br>")
       
    }
    

}