const User = require('./bd');
(async () => {
	let newUser = {login: 'Anton-Galkin' , password: '1234'};
	newUser = new User(newUser);
	await newUser.save();
	process.exit(0);
})();