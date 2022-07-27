// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
// that receive a list of integers as input,
// and return the largest and lowest number in that list, respectively.

/*
P: Array of integers, can be negtive, but not empty nor string
R: string with the max and min value of array
E:
    * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
    * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
    * [42, 54, 65, 87, 0]             -> min = 0, max = 87
    * [5]                             -> min = 5, max = 5
P:
    funnc(arr)
        loop thru array
            find and compare each one

        print max and min
*/

//Answer

const max = list => {
	return Math.max.apply(Math, list);
};
const min = list => {
	return Math.min.apply(Math, list);
};

//alternative solution, with spread operators
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

//Optimization, gives min and max on a string
// const minMax = list => {
// 	let minValue = Math.min.apply(Math, list);
// 	let maxValue = Math.max.apply(Math, list);
// 	return `The max value is ${maxValue} and the min value is ${minValue}`;
// };
