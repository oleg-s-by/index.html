                //Отработка циклов
// Выведите с помощью цикла столбец чисел от 1 до 100.
/*for (i=1; i<=100; i++) {
    console.log(i)
}*/
//Выведите с помощью цикла столбец чисел от 100 до 1.
/*for (i=100; i>0; i--) {
    console.log(i)
}*/

//Выведите с помощью цикла столбец четных чисел от 1 до 100. 
/*for (i=2; i<=100; i+=2) { //1 нечетные
    console.log(i)
}*/
//Заполните массив 10-ю иксами с помощью цикла
/*let arr = [];
for (i=0; i<10; i++) {
    arr[i]='x';
}
console.log(arr);*/
//Заполните массив числами от 1 до 10 с помощью цикла.
 /*let arr = [];
 for (i=1; i<=10; i++) {
     arr.push(i)
 }
 console.log(arr);*/
 //Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла.
 // Дроби округляйте до двух знаков в дробной части. 
 /*let arr = [];
 for (let i = 0; i < 10; i++) {
     arr.push(Math.random().toFixed(2));//Math.random()возрацает дробное число от 0 до 1
 }                                        //toFixed(2)форматирует число используя запись с фиксированой запятой
 console.log(arr);  */                      //(2) количество знаков после запятой

// Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла
/*let arr = [];
for (let i=0; i<10; i++) {
    //arr.push((Math.random()*10).toFixed(0));1способ 10 числа до10.100 числа до 100 и тд.
   // arr.push(Math.round(Math.random()*100)+1);Math.round возращает значение числа.округленное до ближайшего целого
}
console.log(arr);*/

//Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
/*let arr =[1,2,3,83];
let arr1 = []
for (i=0; i<arr.length; i++) {
    if(arr[i]>0 && arr[i]<10) {
        arr1.push(arr[i]);
    }
}
console.log(arr1)*/
//Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
// Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите
/*let arr = [1,23,4,5,6,5];
for (i=0; i<arr.length; i++) {
    if(arr[i]==5) {
        alert(true);
        break;
    }
}*/
//Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
/*let arr = [1,2,3];//1вариант
for (i=0; i<arr.length; i++) {
   let sum =arr[i]+arr[i];
   console.log(sum);
} */
/*let arr = [1,2,3];//2вариант
let sum = 0
for (i=0; i<arr.length; i++) {
    sum +=arr[i];
} 
console.log(sum);*/
//Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива. 
/*let arr =[1,2,3,4];//1вариант выводит по этапно МОЖЕТ ОШИБКА
for (i=0; i<arr.length; i++) {
let sum =(arr[i]*arr[i])+arr[i];
console.log(sum);
}*/
/*let arr = [1,2,3,4];2вариант
let sum = 0;
for (i=0; i<arr.length; i++) {
    sum += arr[i]*arr[i];
}
console.log(sum);*/

//Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
/*let arr = [1,2,3,4];
let sum = 0;
for (i=0; i<arr.length; i++) {
     sum +=arr[i];
}
let result = sum/arr.length;
console.log(result);*/
<input type="submit" onclick="alert('!')"></input>








