// -------------- SLICE --------------
// does not mutate the original array
// slice creates new array not a reference to old array
// we can use Slice method to create shallow copy of any array

let m = ['a', 'b', 'c', 'd', 'e'];
const newm1 = m.slice(2);       // [ 'c', 'd', 'e' ]
const newm2 = m.slice(2, 4);   // [ 'c', 'd' ]
const newm3 = m.slice(-1);      // [ 'e' ]          slices 1 element from the end
const newm4 = m.slice(-2);      // [ 'd', 'e' ]     slices 2 elements from the end
const newm5 = m.slice(1, -2);   // [ 'b', 'c' ]

console.log(newm1, newm2, newm3, newm4, newm5);

// SHALLOW COPY
// this is copy not a reference to object
const sc1 = m.slice();
// you can also create shallow copy with spread operator ...
const sc2 = [...m];

console.log(sc1, sc2);


// -------------- SPLICE --------------
// mutates the original array
// splice creates new array not a reference to old array
// splice literatly cuts peace of array from original array 
// it actually can be used to delete wanted element from the array

m = ['a', 'b', 'c', 'd', 'e'];
const sp1 = m.splice(2);    // sp1= [ 'c', 'd', 'e' ]       m= [ 'a', 'b' ]

// delete last element from the array 
m = ['a', 'b', 'c', 'd', 'e'];
m.splice(-1);   // [ 'a', 'b', 'c', 'd' ]

m = ['a', 'b', 'c', 'd', 'e'];
m.splice(1, 2);   // [ 'a', 'd', 'e' ]  second parameter is the number of elements we want to delete

m = ['a', 'b', 'c', 'd', 'e'];
m.splice(2, 2);   // [ 'a', 'b', 'e' ]  second parameter is the number of elements we want to delete

console.log(m);


// -------------- REVERSE --------------
// mutates the original array
// changes array order 

m = ['a', 'b', 'c', 'd', 'e'];
m.reverse();

console.log(m);


// -------------- CONCAT --------------
// combines 2 arrays into one 
// does not mutate the original array

const m1 = ['a', 'b', 'c', 'd', 'e'];
const m2 = ['f', 'g', 'h', 'i', 'j'];

const m3 = m1.concat(m2);   //   ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const m4 = [...m1, ...m2];   //   ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

console.log(m1, m2, m3, m4);


// -------------- JOIN --------------
// joins all elements in the array by provided separator 

m = ['a', 'b', 'c', 'd', 'e'];
console.log(
    m.join('-')     // a-b-c-d-e
    );

    
// -------------- OTHER METHODS --------------
    // push
    // unshift
    // shift 
    // pop
    // indexof
    // includes 
