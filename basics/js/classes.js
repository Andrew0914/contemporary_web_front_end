// como declarar una clase
class Heroe {
  // como inicializar valores y crear variables de clase
  constructor(name, powers) {
    this.name = name;
    this.powers = powers;
  }
  // como crear una funcion
  attack() {
    return `${this.name} attacks!`;
  }
}

//istanciar una clase
const superman = new Heroe("Clark", ["super fuerza"]);

console.log(superman.attack());

// Herencia

class Dog {
  eat() {
    console.log("🐕 Eats meat 🍖");
  }

  drink() {
    console.log("🐕 drinks water 💧");
  }
}

class BullDog extends Dog {
  eat() {
    super.eat();
    console.log("🐕 Eats chicken 🍗");
  }
}
