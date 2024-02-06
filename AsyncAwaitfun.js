//Async Function 
const d = async () => {
	let msg = "Hello World";
	return msg;
}
d().then(msg => console.log(msg));

//Await Function
const f = async () => {
    let g = await "Hii";
    console.log(g);
}
console.log(0);
f();
console.log(1);