// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


/*
    P: Array, always non-empty, Array could have a 0, making it invalid
    R: The result of multuplying the values in order
    E:
    [1, 2, 3, 4] => 24
    [2,9,1,2] =>  1*2*2*9
    P:
    function
        loop thru array
            order from lowest to highest
            multiply


*/


//Answer
function grow(arr) {
    if (arr.includes(0)) {
        console.log('Array is invalid');
    } else{
        let count = 1
        // Sort function with a compare function
        // when sort() fires it compares each 2 values, and
        //calls the compare function to give a result
        // in this case its ascending, so a-b must be negative
        //cause is negative, it will sort the lowest value before
        arr.sort(function(a,b){return a-b})
        arr.forEach(num=>{
            count *= num
        })
    }
}


//Actual Answer, with reduce()
grow = x => x.reduce((prev,curr)=> prev * curr)