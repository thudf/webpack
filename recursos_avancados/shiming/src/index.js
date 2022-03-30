// console.log(_.difference([1], [1, 2, 3, 4, 5]));
// console.log(_.isEqual([1, 'a', {key: 1, label: 'teste'}], [1, 'a', {key: 1, label: 'teste'}]));
// console.log(_.lastIndexOf([1, 2, 3, 2, 1, 2, 1], 2));

const obj = [{a: 1, b: 2}, {a: 1, b:3}, {a: 1, c:1}];

console.log(_.differenceWith(obj, [{a:1, b:2}, {a:1, c:1}], _.isEqual));

var frutas = ['Maçã', 'Banana'];

// Array unshift
var adicionar = frutas.unshift('Morango');

// Array indexOf
var pos = frutas.indexOf('Banana');

// Array at
console.log(`Using an index of ${pos} the item returned is ${frutas.at(pos)}`);

// Array splice
var removedItem = frutas.splice(pos, 1);
console.log(frutas);
console.log(removedItem);


var list = [1, 2, 3, 4, 5];
console.log('list: ', list);
console.log('length: ', list.length);
const start = 1;
console.log('start: ', list.length + start);
const end = -1;
console.log('end: ', list.length + end);

// Array copyWhithin
console.log([1, 2, 3, 4, 5].copyWithin(0, start, end));

// Array entries
const entries = list.entries();
console.log(entries.next().value);
console.log(entries.next().value);

console.log(list.concat());