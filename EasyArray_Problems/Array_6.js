// Right Shift by one
const arr = [1, 2, 3, 4, 5];
for(let i=0;i<1;i++){
    const firstElement = arr.pop();
    arr.unshift(firstElement);
}
console.log(arr)
