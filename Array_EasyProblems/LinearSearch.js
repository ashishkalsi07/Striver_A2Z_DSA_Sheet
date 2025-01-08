const arr = [8,9,4,6,5,1,2,3]
const n = arr.length
const target = 6
const ans = (arr,n,target) => {
    for(let i=0;i<n;i++){
        if(arr[i] === target){
            return true
        }
    }
    return false
}
console.log(ans(arr,n,target))
