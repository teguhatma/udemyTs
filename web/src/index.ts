import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: 'Teguh Atma Yudha', age: 20 });

const root = document.getElementById('root');
// const userForm = new UserForm(document.getElementById('root')!, user);
if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error('Root element not found');
}
