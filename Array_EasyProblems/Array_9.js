let _arry=[16,5,4,1,6,50,3,10]
let search_element = 50
function LinearSearch(arr){
    for(let i=0;i<_arry.length;i++){
        if(arr[i] === search_element){
            return true
        }

    }
}
let ans = LinearSearch(_arry)
if(ans){
    console.log("Element is present")
}
else{
    console.log("Look for Something else-Element Not found")
}