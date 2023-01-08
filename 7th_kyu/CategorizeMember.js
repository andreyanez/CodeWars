/*The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input will consist of a list of pairs. Each pair contains information for a single potential member. 
Information consists of an integer for the person's age and an integer for the person's handicap.
Output will consist of a list of string values stating whether the respective member is to be placed in the senior or open category.
*/

/*
    P:

    create empty array
    loop through array of arrays
      in each array, get the age and handicap
      if age is greater or equal than 55 and handicap is greater than 7
        add 'Senior' to empty array
      else
        add 'Open' to empty array
  
*/

//Answer
function openOrSenior(data) {
	let list = [];
	for (var i = 0; i < data.length; i++) {
		let age = data[i][0];
		let handicap = data[i][1];
		age >= 55 && handicap > 7 ? list.push('Senior') : list.push('Open');
	}
	return list;
}

//Answer with map and destructuring
function openOrSenior(data) {
	return data.map(([age, handicap]) => (age > 54 && handicap > 7 ? 'Senior' : 'Open'));
}
