import { Sorter } from './Sorter'
import { NumberCollection } from './NumberCollection'

const numbersCollection = new NumberCollection([1,-18,3,6,75,35])
const sorter = new Sorter(numbersCollection)
sorter.sort();
console.log(numbersCollection.data)