//Variables
const master = { tyreFront: "soft", tyreRear: "medium" };

//1.- Clone
function clone(source) {
    return { ...source };
}

console.log(master);
console.log(clone(master));

//1.- Merge
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
    return { ...target, ...source };
}

console.log(merge(a, b));
