import { User } from './models/User';

const user = new User({ name: 'New record', age: 123 });

console.log(user.get('name'));

user.on('change', () => {
	console.log('User was changed');
});

user.trigger('change');
