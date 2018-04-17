const User = require('./bd');
(async () => {
	let doomedUser = {login: 'tosha'};
	doomedUser = new User(newUser);
	await User.deleteOne(doomedUser);
	process.exit(0);
})