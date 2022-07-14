'use strict';

// 1. Quadratic equation

let button = document.getElementById('button');
let result = document.getElementById('result');

button.addEventListener('click', function() {

	result.innerHTML = 'Your result is...';
	let elems = document.querySelectorAll('.cft');
	let xs = getSolution(elems);
	if (xs.length == 2) {
		result.innerHTML += ' x1 = ' + xs[0] + ', x2 = ' + xs[1];
	} else {
		result.innerHTML += ' ' + xs[0];
	}

})


function getSolution(data) {

	let numbers = [];
	for (let i = 0; i < data.length; i++) {
		numbers.push(data[i].value);
	}
	let [a, b, c] = numbers;
	let d = b**2 - (4 * a * c);
	let res = [];
	if (d < 0) {

		let x = 'no result!';
		res.push(x);

	} else if (d == 0) {

		let x = -b / (2 * a);
		res.push(x);

	} else {

		let x1 = (-b + d**0.5) / (2 * a);
		let x2 = (-b - d**0.5) / (2 * a);
		res.push(x1.toFixed(2), x2.toFixed(2));

	}
	return res;

}



// 2. Pythagorean triple

let ptb = document.getElementById('pt__button');
let ptr = document.getElementById('pt__result');

ptb.addEventListener('click', function() {

	ptr.innerHTML = 'Is this a pythagorean triple: ';
	let elems = document.querySelectorAll('.pt');
	let numbers = [];
	for (let elem of elems) {
		numbers.push(Number(elem.value));
	}
	let result = isPythTriple(numbers);
	ptr.innerHTML += result;

})

function isPythTriple(data) {

	let tri = data.map(Number);
	let i = tri.indexOf(Math.max(...tri));
	let z = tri.splice(i, 1)[0];
	let [x, y] = tri.map(Number);
	if (z**2 == x**2 + y**2) {
		return 'Pythagorean triple!';
	}
	return 'Sorry, not this one';

}



// 3. Common divisors

let cdb = document.getElementById('cd__button');
let cdr = document.getElementById('cd__result');
let gcdr = document.getElementById('gcd__button');
let glcm = document.getElementById('lcm__button');

cdb.addEventListener('click', function() {

	cdr.innerHTML = 'Common divisors are: ';
	let elems = document.querySelectorAll('.cd');
	let numbers = [];
	for (let elem of elems) {
		numbers.push(elem.value);
	}
	cdr.innerHTML += getCommDiv(numbers);

})

gcdr.addEventListener('click', function() {

	cdr.innerHTML = 'Greatest common divisor is: ';
	let elems = document.querySelectorAll('.cd');
	let numbers = [];
	for (let elem of elems) {
		numbers.push(elem.value);
	}
	cdr.innerHTML += getGreatCommDiv(numbers);

})

glcm.addEventListener('click', function() {

	cdr.innerHTML = 'Least common multiple is: ';
	let elems = document.querySelectorAll('.cd');
	let numbers = [];
	for (let elem of elems) {
		numbers.push(elem.value);
	}
	cdr.innerHTML += getLeastComMult(numbers);

})



function getCommDiv(data) {

	let [a, b] = data.map(Number);
	if (a == 0 || b == 0) {
		return '-----';
	}
	let res = [];
	for (let i = 1; i < Math.abs(a) + 1; i++) {
		if (a % i == 0) {
			if (b % i == 0) {
				res.push(i);
			}
		}
	}

	return res.join(', ');
	
}

function getGreatCommDiv(data) {

	let [a, b] = data.map(Number);
	let d;
	if (a == 0 || b == 0) {
		return '-----';
	} else if (a < b) {
		let c = a;
		a = b;
		b = c;
	}
	while (b != 0) {
		d = a % b;
		a = b;
		b = d;
	}
	return a;

}

function getLeastComMult(data) {

	let [a, b] = data.map(Number);
	if (a == 0 || b == 0) {
		return '-----';
	}
	return Math.abs(a * b) / getGreatCommDiv(data);

}