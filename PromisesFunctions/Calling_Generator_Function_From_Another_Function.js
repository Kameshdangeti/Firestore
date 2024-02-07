//Calling generator function from another function
function* f1() 
{ 
	yield 2; 
	yield 3; 
} 
function* f2() 
{ 
	yield 1; 
	yield* f1(); 
	yield 4; 
} 
for (let res of f2()) 
{ 
	console.log(res); 
}