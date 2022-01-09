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
if(isnan(percent)) {
  return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
}
percent = +percent;

if(isnan(contribution)) {
  return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
}
contribution = +contribution;

if(isnan(amount)) {
  return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
}
amount = +amount;

//получаем дату настоящего момента
let now = new Date();

if((date-now)<=0) {
  return `Параметр "Дата окончания кредита" содержит неправильное значение "${date}"`;
}

//считаем тело кредита
let s = amount - contribution;

//вычисляем количество месяцев, на которое выдаётся кредит
let difference = Math.ceil((date-now)/1000/60/60/24/30.5)

//рассчитаем платёж при процентной ставке 12% годовых
percent = percent/12/100;
let payMonth = s * (percent + (percent/(Math.pow((1+percent), difference) - 1)));

//рассчитаем полную сумму кредита
let totalAmount = payMonth*difference + s;

//округляем до 2-х знаков после запятой
totalAmount = +totalAmount.toFixed(2);

return totalAmount;
}