// // 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// // При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
//
// let str = 'Привет', num = 123, flag = true, txt = 'true';
// console.log('Привет', typeof str);
// console.log('123', typeof num);
// console.log('true', typeof flag);
// console.log('\'true\'', typeof txt);
//
// // 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
// let a1, a2, a3, a4, a5;
// a1 = 5 + 3;
// a2 = 5 - 3;
// a3 = 5 / 3;
// a4 = 5 % 3;
// a5 = 5 * 3;
// console.log(a1, a2, a3, a4, a5);
// // 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
// let a6, a7, a8, a9, a10;
// a6 = 5 % 3;
// a7 = 3 % 5;
// a8 = 5 + '3';
// a9 = 5 - '3';
// a10 = 75 + 'кг';
// console.log('5 % 3', a6);
// console.log('3 % 5', a7);
// console.log('5 + \'3\'', a8);
// console.log('5 - \'3\'', a9);
// console.log('75 + \'кг\'', a10);
//
// // 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// // шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
// let height = 23, width = 10, s;
// s = height * width;
// console.log('S=', s);
//
// // 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// //     результат поместите в переменную v.
//
// let heightC = 10, dC = 4, v;
// v = Math.PI * Math.pow(dC / 2, 2) * heightC;
// console.log('V=', v);
//
// // 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// // Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
//
// let n = 3, m = 4, k;
// k = (n ** 2 + m ** 2);
// k = Math.sqrt(k);
// console.log('K', k);
//
//
// // 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
// let strHello = "Hello world";
// document.write(strHello);
// alert(strHello);
// console.log(strHello);
//
// // 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// let Name = 'Diana', Surname = 'Makovetska', Patronymic = 'Vsevolodovna', age = 18, hobbie = 'sport';
// alert(Name + "\r\n" + Surname + "\r\n" + Patronymic + "\r\n" + age + "\r\n" + hobbie);
//
// // 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
// //     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
// //   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
// //     Вывести в документ содержимое переменной concatenation спомощью document.write
// let str1, str2, str3, concatenation;
// str1 = 'Кто';
// str2 = 'ты';
// str3 = 'такой';
// concatenation = str1 + ' ' + str2 + ' ' + str3;
// document.write("\r\n", concatenation);
//
//
// // 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str_task10 = "20";
// let a = 5;
// document.write("<br/>" + str_task10 + a + "<br/>");
// document.write(str_task10 - a + "<br/>");
// document.write(str_task10 * "2" + "<br/>");
// document.write(str_task10 / 2 + "<br/>");
// // 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
// console.log(parseInt("3.14"));
// console.log(parseInt("-7.875"));
// console.log(parseInt("435"));
// console.log(parseInt("Вася"));
//
// // 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let str_task12 = prompt("Enter something", "ho-ho")
// console.log(str_task12);
//
// // 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// let num1, num2;
// num1 = +prompt('Enter first num');
// num2 = +prompt('Enter second num');
// alert(num1 + num2);
//
// // 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// // Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
//
// let userName = prompt('Enter your name');
// let userSurname = prompt('Enter your surname');
// let userAge = prompt('Enter your age');
// alert('Доброго вечера' + ' ' + userName + ' ' + userSurname + '\r\n' + 'мои поздравления что вам' + ' ' + userAge);



// =====================
// ======ДОП============
// =====================
//
//
//
//
// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let firstNum=+prompt('Enter first num');
// let secondNum=+prompt('Enter second num');
// let thirdNum=+prompt('Enter third num');
// let firstPlace,secondPlace,thirdPlace;
// if(firstNum<secondNum&&firstNum<thirdNum&&secondNum<thirdNum){
//     firstPlace=firstNum;
//     console.log(firstNum, secondNum, thirdNum);
// }else if(secondNum<firstNum&&secondNum<thirdNum&&firstNum<thirdNum){
//     console.log(secondNum, firstNum, thirdNum);
// }
// else if(thirdNum<firstNum&&thirdNum<secondNum&&firstNum<secondNum){
//     console.log(thirdNum, firstNum, secondNum);
// }
// else if(firstNum<secondNum&&firstNum<thirdNum&&thirdNum<secondNum){
//     firstPlace=firstNum;
//     console.log(firstNum, thirdNum, secondNum);
// }else if(secondNum<firstNum&&secondNum<thirdNum&&thirdNum<firstNum){
//     console.log(secondNum, thirdNum, firstNum);
// }
// else if(thirdNum<firstNum&&thirdNum<secondNum&&secondNum<firstNum){
//     console.log(thirdNum, secondNum, firstNum);
// }
//
//
// // 2.
// // Все параматры получаем с клавиатуры!!!!
// //     Имитируем поведение пешехода на перекстке.
// //     Если светофор зеленый - вывести "иди".
// //     Если светофор желтый - вывести "подожди".
// //     Если светофор красный - вывести "стой".
// //     Если светофор в аварийном режиме вывести "делай что хочешь"!
// let color=prompt('Enter color');
// if(color==='red'){
//     alert('стой');
// }else if(color==='yellow'){
//     alert('подожди');
// }
// else if(color==='green'){
//     alert('иди');
// }
// else{
//     alert('делай что хочешь');
// }


// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

// let isRoadClear=confirm('Is road clear?');
// let color2=prompt('Enter color');
// if(color2==='green'&& isRoadClear===true){
//     alert('иди!');
// }
// else if(color2==='green'&& isRoadClear===false){
//     alert('подожди пока нарушители проедут!');
// }
// else if(color2==='yellow'&& isRoadClear===false){
//     alert('жди!');
// }
// else if(color2==='yellow'&& isRoadClear===true){
//     alert('все рано жди!');
// }
// else if(color2==='red'&& isRoadClear===true){
//     alert('стой все рано!');
// }
// else if(color2==='red'&& isRoadClear===false){
//     alert('стой и жди!');
// }
// else{
//     alert('делай что хочешь');
// }

// 4.CALCULATOR
let number1=+prompt('Enter first num');
let number2=+prompt('Enter second num');
let sign=prompt('Enter sign');

switch (sign){
    case '+':
        alert(number1+number2);
        break;
    case '-':
        alert(number1-number2);
        break;
    case '*':
        alert(number1*number2);
        break;
    case '/':
        alert(number1/number2);
        break;
    case '%':
        alert(number1%number2);
        break;
}


