//Basic Generate Function generates three numbers 
function* fun() { 
	yield 10; 
	yield 20; 
	yield 30; 
} 
// Calling the Generate Function 
let gen = fun(); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value);

/*-------------------------------------------*/

// Generate Function generates natural numbers 
function* nextNatural() { 
	let naturalNumber = 1; 
	// Infinite Generation 
	while (true) 
    { 
		yield naturalNumber++; 
	} 
} 
// Calling the Generate Function 
let g = nextNatural(); 
for (let i = 0; i < 10; i++) 
{ 
	console.log(g.next().value); 
}
