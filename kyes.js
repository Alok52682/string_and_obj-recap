const computer = {
    brand: "Apple",
    model: "MacBook Pro",
    processor: "M3 Max",
    ramGB: 64,
    isLaptop: true,
    storage: {
        type: "SSD",
        sizeGB: 1024
    },
    ports: ["USB-C", "HDMI", "SDXC"],
    powerOn: function () {
        return "System starting...";
    }
};

const kyes = Object.keys(computer);

console.log(kyes);