const fruits = ['apple', 'banana', 'cherry']

function example(arr, index = 0) {
  return function() {
    console.log(index)
    if(index >= arr.length) {
      index = 0
    }
    return arr[index++]
  }
}

const getNextFruit = example(fruits)

console.log(getNextFruit()) // 'apple'
console.log(getNextFruit()) // 'banana'
console.log(getNextFruit()) // 'cherry'
console.log(getNextFruit()) // 'apple'
