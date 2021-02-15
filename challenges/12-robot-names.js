let currentRobots = [];

class Robot {
  constructor() {
    this.robotName = generateRobotName();
  }

  reset() {
    currentRobots.splice(currentRobots.indexOf(this.robotName),1);
    this.robotName = generateRobotName();
  }

  name() {
    return this.robotName;
  }

}

function getRandomLetter() {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

function getRandomDigit() {
  return String(Math.floor(Math.random() * 10));
}

function generateRobotName() {
  let name = "";
  for (let index = 0; index < 2; index += 1) {
    name += getRandomLetter();
  }
  for (let index = 0; index < 3; index += 1) {
    name += getRandomDigit();
  }
  if (currentRobots.includes(name)) {
    name = generateRobotName();
  }
  currentRobots.push(name);
  return name;
}

module.exports = Robot;