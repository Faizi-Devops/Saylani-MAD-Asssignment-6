let a:string|null=prompt("Please enter the first number");
let b:number=Number(a);

let c:string|null=prompt("Please enter the last number");
let d:number=Number(c);

if((b>=0 && b<=256) && (d>=0 && d<=256)){
    for(let e:number=b;e<=d;e++){
        
        console.log(e.toString().charCodeAt(e));
        console.log("<br>")
        
        
    }

}
else{
    console.log("Please enter the correct  digit");
}





