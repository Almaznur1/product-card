// 3. Создать структуру на ваш выбор, как было показано в лекции
// (имеется ввиду - с машинами/бьюти-продуктами).
// Придумайте свою структуру и реализуйте наследуемость классов

class PersonalComputer {
  constructor(cpu, ram, storage, gpu, os) {
    this.cpu = cpu;
    this.ram = ram;
    this.storage = storage;
    this.gpu = gpu;
    this.os = os;
  }

  showSpecs() {
    console.log(`This PC specs are:
cpu: ${this.cpu}
ram: ${this.ram}gb
storage: ${this.storage}gb
gpu: ${this.gpu}
os: ${this.os}`);
  }
}

const pc1 = new PersonalComputer("Intel Core i5 10400", 16, 1000, "integrated GPU", "Windows 11");
pc1.showSpecs();

class MiniPC extends PersonalComputer {
  constructor(cpu, ram, storage, gpu, os, brand, model) {
    super(cpu, ram, storage, gpu, os);
    this.brand = brand;
    this.model = model;
  }

  showSpecs() {
    super.showSpecs();
    console.log(`brand: ${this.brand}
model: ${this.model}`);

  }
}

const miniPC1 = new MiniPC("AMD Ryzen 7 7840HS", 16, 512, "integrated GPU", "Windows 11", "Brenuc", "N7P");
miniPC1.showSpecs();
