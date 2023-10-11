import { User } from './models/User';

const user = new User({ id: 1 });
const user2 = new User({ name: 'New record', age: 123 });

user.set({ name: 'NEW NAME', age: 9999 });

user.save();
user2.save();

user.events.on('change', () => {
	console.log('change!');
});

user.events.trigger('change');
