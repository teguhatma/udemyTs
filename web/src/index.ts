import { User } from './models/User';

const user = new User({ name: 'Teguh Atma', age: 21 });
user.on('change', () => {
  console.log('user was changed');
});
