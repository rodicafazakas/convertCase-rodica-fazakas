/* Crea una función que reciba un texto en kebab-case y 
devuelva el texto escrito en lowerCamelCase */

let convertKebabToLowerCamelCase = function (str) {
	/* obtener un array de palabras */
	let newString = str.split("-");
	//console.log(newString);
	/* poner en mayuscula la primera letra de cada palabra excepto la primera */ 
	for (let i=0; i < newString.length; i++) {
		if (i>0) {
			newString[i] = newString[i][0].toUpperCase() + newString[i].slice(1);
		}
	}
	return newString.join("");
};

convertKebabToLowerCamelCase("you-are-ready");


describe("function convertKebabToLowerCamelCase", function () {
	test ("if it includes a capital letter, it should return 'The text contains capital letters'", () => {
		
		const n = "you-are-ready";
		const expected = "youAreReady";
      
		const result = convertKebabToLowerCamelCase(n);
		
		expect(result).toBe(expected);
		
	});
});

