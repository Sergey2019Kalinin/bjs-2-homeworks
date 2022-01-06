use strict

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4*a*c;

  if(d === 0) {
    let x = -b/(2*a);
    arr.push(x);
  }
   else if(d>0) {
      let x1 = (-b + Math.sqrt(d)) / (2*a);
      let x2 = (-b - Math.sqrt(d)) / (2*a);
      arr.push(x1, x2);
    }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {

//поочерёдно проверяем типы вводимых данных на соответствие типу "number"
//преобразуем в него, если это возможно
//если невозможно, выводим сообщение в консоль
if(typeof percent != "number") {
  percent = +percent;
  if(typeof percent != "number") {
    console.log(`Параметр "процентная ставку" содержит неправильное значение ${percent}`)
  } 
}

if(typeof contribution != "number") {
  contribution = +contribution;
  if(typeof contribution != "number") {
    console.log(`Параметр "сумма первоначального взноса" содержит неправильное значение ${contribution}`)
  } 
}

if(typeof amount != "number") {
  amount = +amount;
  if(typeof amount != "number") {
    console.log(`Параметр "сумма кредита" содержит неправильное значение ${amount}`)
  } 
}

if(typeof date != "number") {
  date=+date;
  if(typeof date != "number") {
    console.log(`Параметр "дата окончания кредита" содержит неправильное значение ${date}`)
  } 
}

//считаем тело кредита
let s = amount - contribution;

//получаем дату настоящего момента
let now = new Date();

/* первое направление
//считаем количество лет кредита
let creditYears = getFullYear(now) - getFullYear(date);

//считаем количество месяцев кредита
let creditMonths;
if((getMonth(now) - getMonth(date)) < 0) {
  creditMonths = getMonth(now) - getMonth(date) + 12;
  creditYears--;
} else {
  creditMonths = getMonth(now) - getMonth(date);
  }

//считаем количество дней кредита...
*/

/* вторая попытка
//считаем количество месяцев кредита
let months = function(now, date) {
  let d1Y = now.getFullYear();
  let d2Y = date.getFullYear();
  let d1M = now.getMonth();
  let d2M = date.getMonth();
  let d1D = now.getDate();
  let d2D = date.getDate();

  return ((d2D+12*d2M+12*12*d2Y)-(d1D+12*d1M+12*12*d1Y))/30;
*/
 
 
//вычисляем количество месяцев, на которое был выдан кредит
let difference = (now - date)/1000/60/60/24/30;

//рассчитаем платёж при процентной ставке 12% годовых
let interestRate = 12;
let totalAmount = s * (interestRate + (interestRate / (Math.pow((1 + interestRate), difference) - 1)));

return totalAmount;
}