/* 
  P:
  split each letter, getting an array
  initialize counter for each letter
  loop through array
    see if letter equals x add to counter
    same with o
  if both counter are the same return true else false
*/

function XO(str) {
	let string = str.toLowerCase().split('');
	let xCount = 0;
	let oCount = 0;
	for (let i = 0; i <= string.length; i++) {
		if (string[i] === 'x') xCount++;
		if (string[i] === 'o') oCount++;
	}
	return xCount == oCount ? true : false;
}

//Similar solution using filter
const XO = str => {
	str = str.toLowerCase().split('');
	return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
};
