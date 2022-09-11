import { User } from './models/User';

const user = new User({ name: 'Teguh Atma', age: 21 });

// A quick remindeer on accessors

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Teguh', 'Atma');
console.log(person.fullName);
