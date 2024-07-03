///////////   func1  /////////

function findMaximum(array) {

    var max = array[0]; 
    for (var i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }
  
  undefined
  findMaximum([1,5,10,20]) 
  20


  function findMinimum(array) {
    var min = array[0]; 
    for (var i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  }
  undefined
  findMinimum([1,5,10,20])
  1
///////////   func2  /////////

function sumArray(array){
    var sum = 0;
for (i = 0; i <array.length; i++) {
  sum += array[i];
}
    return sum
}
undefined
sumArray([1,5,10])
16

///////////   func3  /////////

function filterArray(array,condition){
    var filterarray= []
    for(var i = 0; i < array.length; i++){
        if(condition(array[i])){
            filterarray.push(array[i]);
        }
    }return filterarray;
}
undefined
var Array = [1, 2, 3, 4, 5, 6];
var evenNumbers = filterArray(Array, function(number) {
  return number % 2 === 0; 
})
console.log(evenNumbers);
VM3167:5 (3) [2, 4, 6]


