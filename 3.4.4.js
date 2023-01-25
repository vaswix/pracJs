function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
};

ElectricalAppliance.prototype.unplug = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
};

function Lamp(name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
    this.isPlugged = true;
}

Lamp.prototype = new ElectricalAppliance();

// Прибор 2
function Computer(name, brand, power, type, functionality, cpu, gpu, ram) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
    this.cpu = cpu
    this.gpu = gpu
    this.ram = ram
}

Computer.prototype = new ElectricalAppliance();
const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");
const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work", 'intel', 'nvidia', '16gb');
tableLamp.unplug();
homePC.plugIn();
console.log(homePC)
console.log(tableLamp)