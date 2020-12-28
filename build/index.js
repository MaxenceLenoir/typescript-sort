"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumberCollection_1 = require("./NumberCollection");
const numbersCollection = new NumberCollection_1.NumberCollection([1, -18, 3, 6, 75, 35]);
const sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
