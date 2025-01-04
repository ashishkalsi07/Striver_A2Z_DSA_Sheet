// Left shift by one
const arr = [1, 2, 3, 4, 5];
const shift=1
for(let i=0;i<shift;i++){
    const firstElement = arr.shift();
    arr.push(firstElement);
}
console.log(arr)


