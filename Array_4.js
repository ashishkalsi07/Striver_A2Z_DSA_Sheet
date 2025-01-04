const arr=[1,2,3,4,5,6]
new_arr=arr.filter((num,index)=> num !== arr[index-1])
console.log(new_arr)

// const new_arr=[]
for(let i=0;i<arr.length;i++){
    if(arr[i] !== arr[i-1]){
        new_arr.push(arr[i])
    }
}
console.log(new_arr)