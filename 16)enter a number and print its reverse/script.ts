let a:string|null = prompt("Please enter a string");
let b:string[]=a!.split("");

let c:string[]=b.reverse();
let d:string=c.join("");
console.log(d);
