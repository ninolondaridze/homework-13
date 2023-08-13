let x = Number(prompt('What is the number?'));
let n = Number(prompt(`What is the power of ${x}?`));


while(Number.isInteger(n) === false) {
    alert ('enter only integer exponient');
    n = Number(prompt(`What is the power of ${x}?`));
    Number.isInteger(n);
}

function pow (x,n) {
   return x ** n;
}

let result = pow (x, n);
alert(result);

