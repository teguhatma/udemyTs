import { User } from './models/User';

const user = new User({ name: 'Teguh', age: 20 });

user.set({ name: 'Teguh Atma Yudha' });

console.log(user.get('name'));
console.log(user.get('age'));
