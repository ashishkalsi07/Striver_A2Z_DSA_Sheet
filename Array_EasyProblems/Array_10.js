//union of two arrays 
const arr_1=[8,4,6,5,1,2,3]
const arr_2=[6,5,3,1,2,2,1]
const arr = arr_1.concat(arr_2)
function Duplicates(arr){
    let new_arr=[]
    for(let i=0;i<arr.length;i++)
    {
        if(!new_arr.includes(arr[i])){
            new_arr.push(arr[i])
        }
    }
    return new_arr
}
const ans = Duplicates(arr)
console.log(ans)