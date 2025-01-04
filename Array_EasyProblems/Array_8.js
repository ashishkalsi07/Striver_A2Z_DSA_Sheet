const arr=[1,0,2,1,5,6,0,3,0,5,1]
for(let i=0;i<arr.length;i++){
    if(arr[i] === 0){
        arr.splice(i,1)
        arr.push(0)
    }
}
console.log(arr)
