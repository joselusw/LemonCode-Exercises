//Variables
const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

function isBookRead(title) {
    return books.find((element) => element.title === title)?.isRead ?? false;
}

console.log(isBookRead("Devastación")); // true
console.log(isBookRead("Canción de hielo y fuego")); // false
console.log(isBookRead("Los Pilares de la Tierra")); // false
