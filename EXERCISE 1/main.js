/* function arr(numb){
    let suma = 0
    for (let i=1; i<x; i++){
      if (i%2 !== 0) {
        suma += i
      }
    }
    return suma
  } */
  
// console.log(arr(4));


function oddSum(arr) {
  let counter = 0

  for (let i = 0; i<arr.length; i++){
    if (arr[i]%2 === 1){
      counter += arr[i]
    }
  }
  return counter
}

// const oddSum = (arr) => {
//   let counter = 0
//   arr.forEach(e =>{
//     if (e%2 === 1){
//       counter += e
//     }
//   })
//   return counter
// }

console.log(oddSum([45, 3, 2, 5, 6, 100]))