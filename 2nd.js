let min = Number(prompt('Min number:'));
let max = Number(prompt('Max number'));

let result = '';

while (isNaN(min) && isNaN(max)) {
    min = Number(prompt('Min number:'));
    max = Number(prompt('Max number'));
}

for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
        result += `${i},`;
    }
}
alert(result);
