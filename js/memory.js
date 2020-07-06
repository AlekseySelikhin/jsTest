/* jshint -W097 */
"use strict";

//общение с пользователем
//alert('');
//promt('','');
//confirm('');

//тернарная операция - усеченная запись if/else
let num = 50;
(num == 50) ? console.log('отработало если') : 
                console.log('отработало иаче');

//интерполяция (только если обратная косая ковычеа)
console.log(`test ${num} test ${num}`);

//условия

//обычный if
if (num == 49) {
    console.log('-');
} else if (num == 48) {
    console.log('-');
} else {
    console.log('=');
}

//Классический swith
switch (num) {
    case 49:
        console.log('-');
        break;
    case 48:
        console.log('-');
        break;
    case 47:
        console.log('-');
        break;
    case 46:
        console.log('-');
        break;
    case 50:
        console.log('+');
        break;
    default:
        console.log('=');
        break;    
}

//вопросы пользоватлю
// const qwestion = promt('как чего?', '');

//циклы
while (num<55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num--;
}
while (num > 50);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        // break;
        continue;
    }
    console.log(i);
}