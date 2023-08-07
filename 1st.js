let number = prompt('Enter a number:');
while (isNaN(number)) {
    number = prompt('Enter a number:');
}

for (let i = 0; i < number.length; i++) {
    console.log(number.charAt(i));
}

