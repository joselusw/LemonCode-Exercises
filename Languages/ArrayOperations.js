//Variables
const master = ['one', 'two', 'three', 'four'];

//1.- Head
const head = ([head, ...tail]) => console.log(head);
head(master);

//2.- Tail
const tail = ([head, ...tail]) => console.log(tail);
tail(master);

//3.- Init
const init = (array) => console.log(array.slice(0, array.length - 1));

init(master);

//4.- Last
const last = (array) => console.log(array[array.length - 1]);
last(master);
