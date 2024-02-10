const a = ["Andhra","Telagana", "Karnataka", "Tamilnadu", "Kerala"];

const a2 = a.map(function (s) 
{
	return s.length;
});

console.log("Normal way ", a2); 
const a3 = a.map((s) => s.length);
console.log("Using Arrow Function ", a3); 
