let result;
let num

num = 98

console.log(num);
console.log(num % 15 == 0);

switch (true) {
    case num % 15 == 0:
        result = num + ": 3と5の倍数です。";
        break;
    case num % 5 == 0:
        result = num + ": 5の倍数です。";
        break;
    case num % 3 == 0:
        result = num + ": 3の倍数です。";
        break;
    default:
        result = num;
        break;
}

console.log(result);
