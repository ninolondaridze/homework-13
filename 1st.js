let number = prompt('Enter a number:'); // როცა მომხმარებელს შემოყავს რიცხვი, გვიბრუნდება როგორც სტრინგი
if (isNaN(number)) {
    number = prompt('Enter a number:');
} else {
    let result = 0; 
    for (let i = 0; i < number.length; i++) {  // .length გააჩნიათ სტრინგებს და ნამბერებს
        result +=Number(number[i]); 
    }
    
    alert(result);
}

