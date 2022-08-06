import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([10, 3, -5, 0, -101]);
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('teguh');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
