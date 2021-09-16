// ujs10-133-functions-bind-methoss
// bind allows you to bind and use methods from other objects to wanted object event if that 
// wanted object does not even have such methods
// Lets say, you have lots of similar objects with same properties, but different values and only one copy of methods.
// Bind allows you to use that one copy of method on all objects.

const Wizair = {
    marsrutas: 'Vilnius-Miunhenas',
    skrydzioNr: 'WVM1',
    aviakompanija: 'Wizair',
    bookings: [],
    book(asmuo, data) {
        this.bookings.push({asmuo, data, marstrutras: this.marsrutas, skrydzioNr: this.skrydzioNr, aviakompanija: this.aviakompanija});
    }
};

const Ryanair = {
    marsrutas: 'Vilnius-Miunhenas',
    skrydzioNr: 'RVM1',
    aviakompanija: 'Ryanair',
    bookings: [],
};

const book = Wizair.book;

const bilietasWiz = book.bind(Wizair);
const bilietasRyan = book.bind(Ryanair);

bilietasWiz('Jonas Jonaitis', '2021-09-15');
bilietasWiz('Petras Petraitis', '2021-09-15')
bilietasRyan('Antanas Antanaitis', '2021-09-14');
bilietasRyan('Anupras Anupraitis', '2021-09-14');

console.log(Wizair, '-----------------------------', Ryanair);
