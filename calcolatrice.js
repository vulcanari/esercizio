
const prompt=require('prompt-sync')();

function add (a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function sud(a,b){
    return a/b;
}

const scelta=prompt(`
    + Add
    - Sub
    * Mul
    / Div
`);

const op1= Number(prompt("primo operando"));
const op2= Number(prompt("secondo operando"))
let res=null;

switch(scelta){
    case '+':
        res=add(op1,op2);
        console.log(` ${op1} + ${op2} = ${res} `);
        break;

    case '-':
        res=add(op1,op2);
        console.log(` ${op1} - ${op2} = ${res} `);
        break;

    case '*':
        res=add(op1,op2);
        console.log(` ${op1} * ${op2} = ${res} `);
        break;

    case '/':
        res=add(op1,op2);
        console.log(` ${op1} / ${op2} = ${res} `);
        break;
}