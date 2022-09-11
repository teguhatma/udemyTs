import { User } from './models/User';

const user = new User({ name: 'Teguh Atma', age: 21 });
user.attributes.get('id');
user.attributes.get('name');
user.attributes.get('age');

user.sync.save();
