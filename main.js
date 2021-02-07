let n = parseInt(prompt("Сколько случайных нечетных цифр хотите получить?")),
	x = parseInt(prompt("Введите первое число:")),
	y = parseInt(prompt("Введите второе число:"));

let generateOddNumber = function(a,b){
	let num = Math.max(a,b) - Math.floor((Math.max(a,b) - Math.min(a,b) + 1) * Math.random()) ;
	if (num % 2 === 0 ) {
		generateOddNumber(a,b);
	} else {
		console.log(`Cлучайное нечетное число: ${num}`);
	}
}
	
for (let i = 0; i < n	; i++) {
	generateOddNumber(x,y);
}