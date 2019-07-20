class Fighter {
  constructor(obj) {
    this.name = obj.name;
    this.damage = obj.damage;
    this.health = obj.hp;
    this.agility = obj.agility;
    this.win = 0;
    this.loss = 0;
  }

  getName() {
    return this.name;
  }

  getDamage() {
    return this.damage;
  }

  getHealth() {
    return this.health;
  }

  getAgility() {
    return this.agility;
  }

  attack(obj) {
    let randomSuccess = Math.floor(Math.random() * 100);
    if (randomSuccess > 100 - obj.getAgility()) {
      console.log(this.name + ' attack missed ');
      return;
    }
    obj.dealDamage(this.getDamage());
    console.log(obj.name + ' make ' + obj.damage + ' to ' + this.name);
  }

  logCombatHistory() {
    console.log(' Name: ' + this.name + ',' + ' Wins: ' + this.win + ',' + 'Losses:' + this.loss);
  }

  heal(point) {
    let total = 100;
    let result = point + this.health;
    if (result <= total) {
      this.health += point;
    } else {
      console.log('You can get only' + this.health);
    }
  }

  dealDamage(damage) {
    this.health -= damage;
    if (this.health < 0) {
      this.health = 0;
    }
  }

  addWin() {
    this.win += 1;
  }

  addLoss() {
    this.loss += 1;
  }


}

function battle(obj1, obj2) {
  while (obj1.getHealth() > 0 && obj2.getHealth() > 0) {
    if (obj1.health > 0) {
      obj1.attack(obj2);
    }
    if (obj2.health > 0) {
      obj2.attack(obj1);
    }
  }

  if (obj1.health > 0) {
    obj1.addWin();
  } else {
    obj1.addLoss();
  }

  if (obj2.health > 0) {
    obj2.addWin();
  } else {
    obj2.addLoss();
  }

}