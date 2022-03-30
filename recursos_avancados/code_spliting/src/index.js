import print from './msg';

console.log(_.difference([1, 2, 3], [1, 4, 5]));
console.log(_.lastIndexOf([1, 2, 3, 2, 1, 2, 1], 2));

print();

const body = $('body');

const p = $("<p></p>").text("Inserindo texto").css("color", "red");

body.append(p);