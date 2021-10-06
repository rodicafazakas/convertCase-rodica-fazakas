/* Crea una función que reciba un texto en kebab-case y 
devuelva el texto escrito en lowerCamelCase */

let convertKebabToLowerCamelCase = function (str) {
	/* check if empty string */
	if (str === "") {
		return "You must provide some text";
	}

	/* check if there is an underscore */
	if (str.includes("_")) {
		return "The text contains underscores";
	}

	/* obtener un array de palabras */
	let newString = str.split("-");

    
	/* poner en mayuscula la primera letra de cada palabra excepto la primera */ 
	for (let i=0; i < newString.length; i++) {
		
		for (let j=0; j < newString[i].length; j++) {
			/* check if there are any capital letters */
			if (newString[i][j] === newString[i][j].toUpperCase()) {
				return "The text contains capital letters";
			}

		}
		if (i>0) {
			newString[i] = newString[i][0].toUpperCase() + newString[i].slice(1);
		}
	}

	return newString.join("");
};

//console.log(convertKebabToLowerCamelCase("you_are-ready"));


describe("function convertKebabToLowerCamelCase", function () {
	test ("if it includes a capital letter, it should return 'The text contains capital letters'", () => {
		
		const n = "You-are-ready";
		const expected = "The text contains capital letters";
      
		const result = convertKebabToLowerCamelCase(n);
		
		expect(result).toBe(expected);
	});


	test ("if it includes an underscore, it should return 'The text contains underscores'", () => {
		
		const n = "you-are_ready";
		const expected = "The text contains underscores";
      
		const result = convertKebabToLowerCamelCase(n);
		
		expect(result).toBe(expected);
	});

	test ("if it is empty, it should return 'You must provide some text'", () => {
		
		const n = "";
		const expected = "You must provide some text";
      
		const result = convertKebabToLowerCamelCase(n);
		
		expect(result).toBe(expected);
	});

});

