//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter3(array1) {
	// check less than 1 or equal to return undefined
	if (array1.length <= 1) {
		return undefined;
	}
	let obj = {};
	for (let i = 0; i < array1.length; i++) {
		// if obj has the value return the array value
		if (obj[array1[i]]) {
			return array1[i];
		} else {
			// add to value to object as key if doesn't exist
			obj[array1[i]] = 1;
		}
	}
	return undefined;
}

console.log(firstRecurringCharacter3([1, 5, 5, 1, 3, 4, 6]));
console.log(firstRecurringCharacter3([2, 5, 5, 2, 3, 5, 1, 2, 4]));
