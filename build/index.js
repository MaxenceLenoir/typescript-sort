"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberCollection_1 = require("./NumberCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumberCollection_1.NumberCollection([1, -18, 3, 6, 75, 35]);
numbersCollection.sort();
console.log(numbersCollection.data);
const characteresCollection = new CharactersCollection_1.CharacteresCollection('Maxence');
characteresCollection.sort();
console.log(characteresCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-3);
linkedList.add(15);
linkedList.add(64);
linkedList.add(1);
linkedList.sort();
linkedList.print();
