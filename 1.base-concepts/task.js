'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2)-4*a*c;

  if(d === 0) {
    let x = -b/(2*a);
    arr.push(x);
  }
   else if(d > 0) {
      let x1 = (-b+Math.sqrt(d))/(2*a);
      let x2 = (-b-Math.sqrt(d))/(2*a);
      arr.push(x1, x2);
    }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {

//поочерёдно проверяем вводимые данные на соответствие типу "number"
percent = +percent;
if(typeof percent != "number") {
  return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
}

contribution = +contribution;
if(typeof contribution != "number") {
  return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
}

amount = +amount;
if(typeof amount != "number") {
  return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
} 

date=+date;
if(typeof date != "number") {
return `Параметр "дата окончания кредита" содержит неправильное значение ${date}`;
} 

//считаем тело кредита
let s = amount - contribution;

//получаем дату настоящего момента
let now = new Date();

/* первое направление
//считаем количество лет кредита
let creditYears = getFullYear(date) - getFullYear(now);

//считаем количество месяцев кредита
let creditMonths;
if((getMonth(date) - getMonth(now)) < 0) {
  creditMonths = getMonth(date) - getMonth(now) + 12;
  creditYears--;
} else {
  creditMonths = getMonth(date) - getMonth(now);
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
 

//вычисляем количество месяцев, на которое выдаётся кредит
let difference = (date-now)/1000/60/60/24/30.5;

//рассчитаем платёж при процентной ставке 12% годовых
let payMonth = s * (percent/12 + (percent/12/(Math.pow((1+percent/12), difference) - 1)));

//рассчитаем полную сумму кредита
let totalAmount = payMonth*difference + s;

//округляем до 2-х знаков после запятой
totalAmount = +totalAmount.toFixed(2);

return totalAmount;
}