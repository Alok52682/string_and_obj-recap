const mobile = {
    brand: "Samsung",
    model: "Galaxy S24",
    color: "Titanium Gray",
    storageGB: 256,
    is5GEnabled: true,
    screenSize: 6.2
};

for (const props in mobile) {
    console.log(mobile[props])
}

const keys = Object.keys(mobile)

for (const key of keys) {
    console.log(mobile[key])
}

// console.log(keys);