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

//Using Async generator
const p1 = () => { 
	return new Promise((resolve, reject) => { 
		setTimeout(() => resolve(5), 5000) 
	}) 
} 
const P2 = () => { 
	return new Promise((resolve, reject) => { 
		setTimeout(() => resolve(6), 3000) 
	}) 
} 
async function* myGenerator() 
{ 
	const res1 = await p1(); 
	yield res1; 
	const res2 = await P2(); 
	yield res2; 
} 
let i = myGenerator(); 
for await (let v of myGenerator()) 
{ 
	console.log(v); 
}

