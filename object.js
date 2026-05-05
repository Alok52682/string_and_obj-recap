const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    married: true,
    hobbies: ["coding", "hiking"],
    'fav places': ["Tokyo", "Paris", "New York", "London", "Sydney"]
}

// dot notation
console.log(person.age);

// bracket notation 


console.log(person['fav places']);


// changing value

console.log(person.age);

person.age = 45;

console.log(person.age);

person['fav places'] = ["Tokyo", "Paris", "New York", "London", "Sydney", "Tokyo"];


console.log(person['fav places'])
