let person = {age: 23, name: "Shristi"};
let address = {city: "Bhopal", Locality: "Indrapuri"};  // Deep Copy
let person_addr = {...person,...address}; // Deep Copy
document.write(`${person_addr.age},${person_addr.name}<br>`);
document.write(`${person_addr.city},${person_addr.Locality}<br>`);
