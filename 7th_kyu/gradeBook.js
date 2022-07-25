// Complete the function so that it finds the average of the three scores passed to it 
//and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

// Tested values are all between 0 and 100. 
//Theres is no need to check for negative values or values greater than 100.


/*
    P: three integers, all positive between 0 and 100
    R: A grade (String) based on the average of the three integers
    E:
        95,90,93 = 'A'
        70,70,100 = 'C'
    P:
        func
            find average of three
            if result is >= 90 and <= 100
                return 'A'
            if result is >= 80 and < 90
                return 'B'
*/

//Answer
const getGrade = (s1,s2,s3) =>{
    // note: maybe there's no need to round it
    let avg = Math.floor((s1+s2+s3)/3)
    if (avg < 60) return 'F';
    if (avg < 70 && avg >= 60) return 'D';
    if (avg < 80 && avg >= 70) return 'C';
    if (avg < 90 && avg >= 80) return 'B';
    if (avg <= 100 && avg >= 90 ) return 'A';
}


// solution with object and properties
    // const getGrade = (s1,s2,s3) =>{
    //     return {10:'A',9:'A',8:'B',7:'C',6:'D'}[Math.floor((s1+s2+s3)/30)] || 'F'
    // }

//solution with ternary
// function getGrade (s1, s2, s3) {
//     var s = (s1 + s2 + s3) / 3
//     return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
//   }