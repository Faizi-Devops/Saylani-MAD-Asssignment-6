var a:string|null= prompt("Please enter a number");
var b:number=Number(a);
var c:number;
var d:number;
if(b>0){
    c=Math.floor( b%10);
    d=Math.floor (b/10);
    debugger;
    console.log(c+d);


}
