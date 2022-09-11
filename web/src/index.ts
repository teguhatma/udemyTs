import { User } from './models/User';

const user = new User({ name: 'Teguh Atma', age: 21 });
console.log(user.get('name'));

user.on('change', () => {
  console.log('User was changed, Wow!');
});

user.set({ name: 'Teguh Atma Yudha' });
