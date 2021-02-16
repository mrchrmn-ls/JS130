class Clock {
  constructor(hours = 0, minutes = 0) {
    this.setTimeTo(hours, minutes);
  }

  static at(hours, minutes) {
    return new Clock(hours, minutes);
  }

  setTimeTo(hours, minutes) {
    if (minutes < 0) {
      this.minutes = 60 + (minutes % 60);
      this.hours = (hours + Math.floor(minutes / 60)) % 24;
    } else {
      this.hours = (hours + Math.floor(minutes / 60)) % 24;
      this.minutes = minutes % 60;
    }
  }

  toString() {
    return String(this.hours).padStart(2, "0") + ":" + String(this.minutes).padStart(2, "0");
  }

  add(minutes) {
    this.minutes += minutes;
    this.setTimeTo(this.hours, this.minutes);
    return this;
  }

  subtract(minutes) {
    this.minutes -= minutes;
    this.setTimeTo(this.hours, this.minutes);
    return this;
  }

  isEqual(clock) {
    if (this.toString() === clock.toString()) return true;
    return false;
  }
}

module.exports = Clock;