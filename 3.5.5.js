class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    plugin() {
        console.log(`${this.name} is plugged`);
        this.isPlugged = true;
    }

    unplugin() {
        console.log(`${this.name} is unplugin`);
        this.isPlugged = false;
    }
}

class Lamp extends ElectricalAppliance {
    constructor(name, brand, power, bulbType) {
        super(name, power);
        this.brand = brand;
        this.bulbType = bulbType;
        this.isplugged = true;
    }
}

class Computer extends ElectricalAppliance {
    constructor(name, brand, power, type, functionality, cpu, gpu, ram) {
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.functionality = functionality;
        this.isPlugged = false;
        this.cpu = cpu
        this.gpu = gpu
        this.ram = ram
    }
}


const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");
const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work", 'intel', 'nvidia', '16gb');
tableLamp.unplugin();
homePC.plugin();
console.log(homePC)
console.log(tableLamp)