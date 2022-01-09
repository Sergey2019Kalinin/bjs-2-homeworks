// Задание 1
function getArrayParams(arr) {
  
  let min=arr[0];
  let max=arr[0];
  let sum=0;

  for(let i=0; i<arr.length; i++) {
    if(arr[i]>max) {
      max=arr[i];
    } else if(arr[i]<min) {
        min=arr[i];
      }

    sum=sum+arr[i];
  }

  //вычисляем среднее значение
  let avg=sum/(arr.length);
  
  //округляем до 2-х знаков после запятой
  avg = +avg.toFixed(2);

  return { min: min, max: max, avg: avg };
}
 
// Задание 2
function worker(arr) {
  let sum=0;

  for(let i=0; i<arr.length; i++) {
    sum=sum+arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max=0;

  for(let k=0; k<arrOfArr.length; k++) {
    if(func(arrOfArr[k])>max) {
      max=func(arrOfArr[k]);
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let difference=0;
  let min=arr[0];
  let max=arr[0];

  for(let i=0; i<arr.length; i++) {
    if(arr[i]>max) {
      max=arr[i];
    } else if (arr[i]<min) {
      min=arr[i];
    }
  }

  result=Math.abs(max-min);

  return result;
}