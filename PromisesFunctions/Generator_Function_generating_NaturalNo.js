
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