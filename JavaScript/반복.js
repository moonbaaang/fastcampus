// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Loops_and_iteration
// 반복문

const arr = ['a', 'b', 'c', 'd'];

console.log(arr[1])

for (let i=0; i<arr.length; i++){
  console.log(arr[i])
}

while (i < arr.length) { 
  console.log(arr[i]);
  i++;
}

i=0;
// 반드시 한번은 실행되어야 하는 실행문이 있다면
do {
  console.log(arr[i]);
  i++
} while ( i<arr.length )

// item을 바꾸게 된다면 let item으로 만들어야 함
for (const item of arr){
  console.log(item)
}

for (const index in arr){
  console.log(arr[index])
}

const obj = {
  color = 'red',
  width : 200,
  height : 200,
};

for (const key in obj){
  console.log(key);
}