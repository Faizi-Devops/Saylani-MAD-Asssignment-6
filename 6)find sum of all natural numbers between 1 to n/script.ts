let a :string|null = prompt("Please enter a number");
let b:number= Number(a);
let c:number;
var d:number=0;

if(b<=0){
    alert("Please enter a number between the range 1-infinity positive numbers");

}
else if(b>0){
    
    for(c=1;c<=b;++c){
        d=d+c
        
        
        
        

    }
    console.log(`${d}`)
}

