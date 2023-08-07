let number = Number(prompt('enter number'));

for (let i=0; i < number; i++) {
    
    for(let j=0; j < number; j++) {
        document.getElementById('square').innerHTML += '*';
    }    
       document.getElementById('square').innerHTML += "<br>";
}




