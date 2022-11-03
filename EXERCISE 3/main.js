// MI EJERCICIO

/*
array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];
array3 = [];

for (let i = 0; i < array1.length; i++) {
    array3.push(array1[i] + array2[i]);
}

for (let i = 0; i < array3.length; i++) {
    alert("Resultado " + i + " : " + array3[i]);
}

*/


function sumPairs(firstArr, secondArr){

    let resultArr = []
  
    let maxLength = 0
  
    if (firstArr.length > secondArr.length){
      maxLength = firstArr.length
    } else {
      maxLength = secondArr.length
    }
  
    for (let i = 0; i < maxLength; i++){
  
      let num1 = 0
      let num2 = 0
  
      if (firstArr[i]){
        num1 = firstArr[i]
      } 
  
      if (secondArr[i]){
        num2 = secondArr[i]
      } 
  
      let pairSum = num1 + num2
      resultArr.push(pairSum)
  
    }
  
    return resultArr
  }