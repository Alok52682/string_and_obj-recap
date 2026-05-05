const mobile = {
    brand: "Samsung",
    model: "Galaxy S24",
    color: "Titanium Gray",
    storageGB: 256,
    is5GEnabled: true,
    screenSize: 6.2
};

for (const props in mobile) {
    // console.log(mobile[props])
}

const keys = Object.keys(mobile)

for (const key of keys) {
    // console.log(mobile[key])
}

// console.log(keys);


const pen = {
    brand: "Parker",
    inkColor: "Blue",
    type: "Ballpoint",
    isRefillable: true
};

const pencil = new Object()
const rubber = Object.create({})

console.log(pencil, rubber)


function sum(num1, num2) {
    const total = num1 + num2;
    return total;
}

console.log(sum(10, 20));