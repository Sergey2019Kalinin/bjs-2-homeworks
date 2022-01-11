function compareArrays(arr1, arr2) {
  let result;

  if(arr1.length==arr2.length && arr1.every((v,i)=> v === arr2[i])) {
    result=true;
  } else {
    result=false;
  }
  
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr.filter(item => item > 0).filter(item2 => item2 % 3 === 0).map(item3 => item3 *= 10);

  return resultArr; // array
}
