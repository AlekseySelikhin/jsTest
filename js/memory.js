//тернарная операция - усеченная запись if/else
const num = 50;
(num == 50) ? console.log('отработало если') : console.log('отработало иаче');

//интерполяция (только если обратная косая ковычеа)
console.log(`test ${num} test ${num}`);

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