// 3. Реализовать абстрактный класс Drink
// (абстрактный он, потому что не должен иметь экземпляров. Он используется только для наследования).
// От него мы будем создавать наследников - лимонад, чай, кофе и прочие напитки, которые посчитаете нужным. Их должно быть от 3 до 5.

// Наш абстрактный класс должен содержать общие свойства, связанные со всеми напитками (это то, что есть у каждого напитка), а это:
// 1) название
// 2) размер
// 3) цена
// 4) температура (приватный). Почему? Потому что мы не можем влиять на температуру вне класса.

// Также наш класс должен содержать общие методы, такие как:
// 1) получить информацию про напиток
// 2) получить температуру напитка
// 3) установить температуру напитка
// 4) приготовить напиток (приватный)
// 5) подать напиток

//  После уже реализовываем наследников, например для кофе нам нужны дополнительные параметры,
// помимо тех 4, что названы выше. Это вид зёрен, вид молока и прочее.

class Drink {
  #temperature;
  constructor(name, volume, price, temperature) {
    this.name = name;
    this.volume = volume;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo(additionalInfo) {
    return `${this.name} ${this.volume} ${this.price} ${this.#temperature} ${additionalInfo}`;
  }

  getTemp() {
    return this.#temperature;
  }

  setTemperature(temperature) {
    this.#temperature = temperature;
    console.log("Температура установлена!");
  }

  #prepare() {
    this.setTemperature(this.temperature);
    console.log("Напиток готов!");
  }

  serve() {
    this.#prepare();
    console.log("Напиток подан!");
  }
}

class Lemonade extends Drink {
  constructor(name, volume, price, temperature, flavor) {
    super(name, volume, price, temperature);
    this.flavor = flavor;
  }

  getInfo() {
    return super.getInfo(this.flavor);
  }
}

class Tea extends Drink {
  constructor(name, volume, price, temperature, origin, kind) {
    super(name, volume, price, temperature);
    this.origin = origin;
    this.kind = kind;
  }

  getInfo() {
    return super.getInfo(`${this.origin} ${this.kind}`);
  }
}

class Coffee extends Drink {
  constructor(name, volume, price, temperature, origin, kind) {
    super(name, volume, price, temperature);
    this.origin = origin;
    this.kind = kind;
  }

  getInfo() {
    return super.getInfo(`${this.origin} ${this.kind}`);
  }
}

class Cafe {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  getInfo() {
    return `${this.name} ${this.address}`
  }

  orderDrink(drink) {
    drink.serve();
  }
}

coffee = new Coffee("cappuccino", "200ml", "200p", "60", "Brazil", "coffee beans");
cafe = new Cafe("Caspi", "Moscow");

console.log(cafe.getInfo());
console.log(coffee.getInfo());
cafe.orderDrink(coffee);

// 4. После того, как реализовали класс "напиток" и его наследников, приступаем к классу "Кафе".
// Он у нас будет принимать 2 параметра, например название кафе и его месторасположение. Реализуем 2 метода внутри него:
// 1) получить информацию про кафе
// 2) заказать напиток

// При заказе напитка мы будем передавать аргументом сам напиток и вызывать его внутренние методы,
// например - подать напиток, А этот метод внутри себя вызывает метод для готовки напитка и выполняет всякие побочные действия,
// по типу изменения температуры и прочее.

// Что итоговое должно получиться:
// 1. Можем получить информацию про кафе
// 2. Можем заказать напиток
// 3. Можем получить информацию про напиток
