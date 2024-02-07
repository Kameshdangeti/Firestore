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