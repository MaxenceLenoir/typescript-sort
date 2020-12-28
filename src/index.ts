import { NumberCollection } from './NumberCollection'
import { CharacteresCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumberCollection([1,-18,3,6,75,35])
numbersCollection.sort();
console.log(numbersCollection.data);

const characteresCollection = new CharacteresCollection('Maxence');
characteresCollection.sort();
console.log(characteresCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-3);
linkedList.add(15);
linkedList.add(64);
linkedList.add(1);
linkedList.sort();
linkedList.print();

