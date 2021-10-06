let fromKebabToLowerCamelCase = function (str) {
	/* obtain an array of words */
	let newString = str.split("-");
	console.log(newString);
	/* capitalize the words of the array except the first one */ 
	for (let i=0; i < newString.length; i++) {
		if (i>0) {
			newString[i] = newString[i][0].toUpperCase() + newString[i].slice(1);
		}
	}
	return newString.join("");
};

fromKebabToLowerCamelCase("go-home-now");