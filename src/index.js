
// 1)Подсчитать сумму всех чисел в заданном пользователем диапазоне.
// let num1 = + prompt("Введите первое число : ","");

// let num2 = + prompt ("Введите второе число : ");

// let sum = 0;

// for (;num1 <= num2; num1++)  {

//     console.log(sum+=num1)   

// }

// 2)Запросить 2 числа и найти только наибольший общий делитель.

// let num1 =+prompt("Введите первое число : ","")


// let num2 = +prompt("Введите второе число : ","")


// let res = 0

// let res2 = 0

// let res3 

// for(;res2<=num2;res2++){
    
//     if (num1>num2) {
//         res=num1%num2
//         res2 = res % num2
//         res3 = res2 % 10
//         console.log(res3)
//     }

//    break
// }

// 3)Запросить у пользователя число и вывести все делители этого числа.

// let num = +prompt("Введите число : ", "");


let input1 = document.querySelector(".input-1")

let input2 = document.querySelector(".input-2")

let button = document.querySelector(".go")

let plus = document.querySelector(".plus")

let umno = document.querySelector(".umno")

let del = document.querySelector(".del")


let minus = document.querySelector(".minus")

let result = document.querySelector("input.result")

function roughScale(x, base) {
    const parsed = parseInt(x, base);
    if (isNaN(parsed)) { return 0 }
    return parsed * 1;
  }


plus.onclick  = function(){
    button.onclick = function (){

    result.value =roughScale(input1.value)+roughScale(input2.value)
}
}

minus.onclick  = function(){

    button.onclick = function (){

    result.value =roughScale(input1.value)-roughScale(input2.value)
}
}

del.onclick  = function(){

    button.onclick = function (){

    result.value =roughScale(input1.value)/roughScale(input2.value)
}
}

umno.onclick  = function(){

    button.onclick = function (){

    result.value =roughScale(input1.value)*roughScale(input2.value)
}
}





