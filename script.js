function makeid(l) {
	const pass = "";
	const str = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
	for(let i =1; i<l; i++){
		let char = Math.floor(Math.random() * str.l + 1);
		pass+=str.charAt(char)
	}
	return pass;
}

// Do not change the code below.
// const l = prompt("Enter a number.");
// alert(makeid(l));
