const arr =  [3,2,1,1,2,3,4]
let count_arr = []
for(let i=0;i<arr.length;i++){
    const num = arr[i]
    let cnt = 0
    for(let j=0;j<arr.length;j++){
    if(arr[j] === num){
            cnt++
        }
    }
    if(cnt === 1){
        console.log(num)
    }
}
