const _arr = [1,20,2,3,16,5,30]

function SortedArray(arr){
    for(let i=0; i<arr.length;i++){
        if(arr[i] >= arr[i+1]){
            return false
        }
    }
    return true;
}
const res = SortedArray(_arr)
console.log(res)