// import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkeList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, -101]);
numbersCollection.sort();
console.log(numbersCollection.data);
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('teguh');
charactersCollection.sort();
console.log(charactersCollection.data);

// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkeList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
