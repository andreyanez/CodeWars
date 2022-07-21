// P: Array, null or empty
//R: Array with 2 elements, each one is the sum of the positive and negative numbers, respectively
//E: [2,3,-5] ,  [5,-5]
/*P
  function(){
    set a counter for each type of sum
    
    loop thru array and find each number
    
    if they are > 0, they are added to the first sum,
    else, they get added to the second sum
    
    once the sums are done, return array with the sum of each group
    
  }
*/

//answer
function countPositivesSumNegatives(arr) {
    let posCount = 0
    let negSum = 0
    
    if (arr === undefined || arr.length == 0) {
        return []
    }else{
        arr.map(num =>{
            num > 0 ? posCount++ : negSum += num
        })
        return [posCount,negSum]
    }
}
