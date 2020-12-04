// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let array=['a', 'b', 'c'];
// for(let i=0;i<3;i++){
//     array.push(i+1);
// }
// console.log(array);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let array=[1,2,3];
// let num1=array.pop();
// let num2=array.pop();
// let num3=array.pop();
// array[0]=num1;
// array[1]=num2;
// array[2]=num3;
// console.log(array);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let array=[1,2,3];
// array.push(4,5,6);
// console.log(array);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let array=[1,2,3];
// array.unshift(4,5,6);
// console.log(array);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let array=['js', 'css', 'jq'];
// console.log(array.shift());

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// console.log(array.pop());

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let array=[2,4,3,1,7,6,9,11,24,33];
// for(let i=0;i<10;i++){
//     if(array[i]%2===0){
//         console.log(array[i]);
//     }
// }

// - Взяти масив з 10 чисел або створити його.
// Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let array=[2,4,3,1,7,6,9,11,24,33];
// let arrayNew=[];
// for(let i=0;i<10;i++){
//     arrayNew.push(array[i]);
// }
// console.log(array);
// console.log(arrayNew);

// - Взяти масив з 10 чисел або створити його.
// Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let array=[2,4,3,1,7,6,9,11,24,33];
// let arrayNew=[];
// for(let i=0;i<10;i++){
//     arrayNew[i]=array[i];
// }
// console.log("Array",array);
// console.log("New Array",arrayNew);

// // зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// let array=[2,17,13,6,22,31,45,66,100,-18];
// console.log('FOR LOOP');
// for(let i=0;i<10;i++){
//     console.log(array[i]);
// }
//
// let i=0;
// console.log('WHILE LOOP');
// while(i<10){
//     console.log(array[i]);
//     i++;
// }
//
// console.log('FOR LOOP/neparni');
//
// for(let i=0;i<10;i++){
//     if(array[i]%2===1){
//         console.log(array[i]);
//     }
// }
//
// i=0;
// console.log('WHILE LOOP/neparni');
// while(i<10){
//     if(array[i]%2===1){
//         console.log(array[i]);
//     }
//     i++;
// }
//
// console.log('FOR LOOP/parni');
//
// for(let i=0;i<10;i++){
//     if(array[i]%2===0){
//         console.log(array[i]);
//     }
// }
// i=0;
// console.log('WHILE LOOP/parni');
// while(i<10){
//     if(array[i]%2===0){
//         console.log(array[i]);
//     }
//     i++;
// }
//
// // 7. замінити кожне число кратне 3 на слово "okten"
// for(let i=0;i<10;i++){
//     if(array[i]%3===0){
//         array[i]="okten";
//     }
// }
// console.log(array);
//
// // 8. вивести масив в зворотньому порядку.
// console.log('REVERSE ARRAY')
// array=[2,17,13,6,22,31,45,66,100,-18];
// for(let i=9;i>=0;i--){
//     console.log(array[i]);
// }

// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.
//ПАРНІ
// let array=[];
// let num=1;
// let i=0;
// while (true){
//     if(i===50){
//         break
//     }
//     if(num%2===0){
//         array[i]=num;
//         i++;
//     }
//     num++;
// }
// console.log(array);
// НЕПАРНІ
// let array=[];
// let num=1;
// let i=0;
// while (true){
//     if(i===50){
//         break
//     }
//     if(num%2===1){
//         array[i]=num;
//         i++;
//     }
//     num++;
// }
// console.log(array);

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// let array=[];
// for(let i=0;i<10;i++){
//     array[i]=Math.random();
// }
//диапазон рандома 8 до 732.
// let array=[];
// let arrayNew=[];
// for(let i=0;i<10;i++){
//    // array[i]=Math.random() * (732 - 8) + 8;
//     array[i]=Math.floor(Math.random() * (732 - 8 + 1) + 8);
// }
// console.log(array);
//
// // 2. вывести на консоль  каждый третий елемент
// console.log('EVERY 3 EL');
// for(let i=2;i<10;i+=3){
//     console.log(array[i]);
// }
//
// // вывести на консоль  каждый третий елемент
// // но при условии что его значение является парным.
// console.log('EVERY 3 EL IF PARNE');
// for(let i=2;i<10;i+=3){
//     if(array[i]%2===0){
//         console.log(array[i]);
//     }
// }
//
// // вывести на консоль  каждый третий елемент
// // но при условии что он имеет парное значение и
// // записать их в другой массив.
// console.log('EVERY 3 EL IF PARNE AND WRITE IN ANOTHER ARRAY');
//
// for(let i=2,m=0;i<10;i+=3){
//     if(array[i]%2===0){
//         arrayNew[m]=array[i];
//         m++;
//         console.log(array[i]);
//     }
// }
// console.log(arrayNew);
//
// //  Вывести каждый елемент массива у которого соседний с права элемент - парный
// console.log('IF RIGHT EL IS PARNE');
// for(let i=0;i<10;i++){
//     if(array[i+1]%2===0){
//         console.log(array[i]);
//     }
// }

// масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
// let array=[100,250,50,168,120,345,188];
// let res=0;
// for(let i=0;i<7;i++){
//     res+=array[i];
// }
// res=res/7;
// console.log(res);

// створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let array=[];
// let arrayNew=[];
// for(let i=0;i<10;i++){
//     array[i]=Math.floor(Math.random() * (10 - 2 + 1) + 2);
// }
// console.log(array);
// for(let i=0;i<10;i++){
//     arrayNew.push(array[i]*5);
// }
// console.log(arrayNew);

// створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.

// let array=['anna',1,3.5,'2ab',true,null,'123',25];
// for(let i=0;i<array.length;i++){
//     if(typeof array[i] === "number"){
//         console.log(array[i]);
//     }
// }
