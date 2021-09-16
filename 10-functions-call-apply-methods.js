// ujs10-132-functions-call-apply-methods 
// Call and Apply allows you to call and apply methods from other objects to wanted object event if that 
// wanted object does not even have such methods
// Lets say, you have lots of similar objects with same properties, but different values and only one copy of methods.
// Call and Apply allows you to use that one copy of method on all objects.


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


let bilietas = Wizair.book;

// CALL METHOD 
bilietas.call(Wizair, 'Jonas Jonaitis', '2021-09-14');    // Atitikmuo: Wizair.book("Ona Onutaitaite", '2021-09-14');
bilietas.call(Wizair, 'Petras Petraitis', '2021-09-14');

bilietas.call(Ryanair, 'Antanas Antanaitis', '2021-09-14');   // Ryanair.book("Ona Onutaitaite"); Neveikia nes nera book metodo sitoje klaseje. 
bilietas.call(Ryanair, 'Anupras Anupraitis', '2021-09-14');


// APPLY METHOD 
// skirtumas tarp call ir apply tik toks, kad į apply paduodi duomenis masyve
let duomenys = ['Jurgis Jurgaitis', '2021-09-14'];
bilietas.apply(Ryanair, duomenys);  // atitikmuo su call: bilietas.call(Ryanair, ...duomenys);


console.log(Wizair.bookings, '------------------------------------------', Ryanair.bookings);
