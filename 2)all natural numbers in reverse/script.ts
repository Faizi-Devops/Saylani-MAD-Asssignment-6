let a:string|null=prompt("Please enter a number");
let b :number = Number(a);
var c:number;



if(b<=0)
{
    alert("Please enter a digit from 1-n  positive number");
}
else if(b>0)
{
    c=b
    while(c>=1){
        document.write(`${c}`)
        document.write("<br>")
        c--;
    }
    

}
else{
    alert("Please enter the correct number")
}