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

const company = {
    name: "TechCorp",
    location: "San Francisco",
    specs: {
        revenue: "2 Billion",
        employees: 500,
        isPublic: true
    },
    department: {
        name: "Engineering",
        lead: {
            firstName: "Sarah",
            lastName: "Chen",
            role: "CTO"
        }
    }
};


const kyes = Object.keys(computer);

console.log(company.department.lead.role);