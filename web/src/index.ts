import { User } from './models/User';

// Put
const user = new User({ id: 1 });
user.set({ name: 'Teguh', age: 20 });
user.save();

// Post
const newUser = new User({ name: 'Teguh Atma', age: 21 });
newUser.save();
newUser.events.on('change', () => {
  console.log('change!');
});
newUser.events.trigger('change');
