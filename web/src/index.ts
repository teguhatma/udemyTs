import { User } from './models/User';

const user = new User({ name: 'Teguh', age: 20 });

user.on('change', () => {
  console.log('Change #1');
});

user.on('change', () => {
  console.log('Change #2');
});

user.trigger('change');
