let a = +prompt('Введите число');
let b = +prompt('Введите степень');
let result = 1;

for (let i = 0; i < b; i++) {
    result = result * a;
}
alert(result); 
