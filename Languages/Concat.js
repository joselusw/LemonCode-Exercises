//Variables
const master = ['one', 'two', 'three', 'four'];
const secondary = ['five', 'six', 'seven', 'eight'];

//1.- Concat
const concat = (a, b) => console.log([...a, ...b]);
concat(master, secondary);

//2.- Multiple concat (optional)
const multipleConcat = (...args) => console.log([].concat(...args));
multipleConcat(master, secondary, master, secondary);