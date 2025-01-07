const nums = [1,2,6]
const n = 6
const missingNo=[]
const numSet = new Set(nums) // creating a new Set form nums i.e elements will be copied to set instance
for(let i=1;i<=n;i++){
    if(!numSet.has(i)){
        missingNo.push(i)
    }
} 
console.log(missingNo)