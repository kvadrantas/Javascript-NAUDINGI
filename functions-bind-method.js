// 

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
