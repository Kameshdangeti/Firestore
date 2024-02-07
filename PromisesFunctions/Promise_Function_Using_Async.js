function asynchmethod() {
	let firstpromise = 
		new Promise((resolve, reject) => resolve("Hello"));
	let secondpromise = 
		new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(" How Are You..");
		}, 1000);
	});
	let bothpromise = 
		Promise.all([firstpromise, secondpromise]);
	return bothpromise;
}

async function display() {
	let d = await asynchmethod();
	console.log(d);
}
display();
