//Part 2: JavaScript Functions — Scope, Parameters & Return Values

//Function that multiplies three numbers
function multiply(a,b,c){
    multiplyThree=a*b*c;
    return multiplyThree
}

numbersMultiply=multiply(4,5,7);
console.log(numbersMultiply);

//Arrow Function
const userName=(name) =>{
    return `Hey, ${name}`;
} 

console.log(userName("John"));

//Local Vs Global Scope

//Global Scope

let Age=30;
const birthYear=1995;

console.log(Age);
console.log(birthYear);

const globalVar=()=>{
    console.log(`This variable has a global scope Age which Age which is ${Age}`)
}

globalVar()

//Local Scope -It cannot be accces outside a function

const localVar=()=>{
    let localVariable="I'm Local man";
    return localVariable
}

console.log(localVar());

//Reusability of a function to calculate values

function addition(x,y,z){
    add=x+y+z;
    return add
}

console.log(addition(5,5,5));

let sum=addition(1,1,1);
console.log(sum);

//Part 3: Combining CSS Animations with JavaScript
document.getElementById("button-box").addEventListener("click",
    function(){
        const box=document.getElementById("box");
        box.classList.toggle("animate");
    }
);

