/*jshint esversion: 6 */

// Constructor
class Chronometer {
  constructor () {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    // var that = this;
    this.intervalId = setInterval(() => {
      this.currentTime++;
      this.setTime();
    }, 1000);
  }

  setMinutes() {
    return parseInt(this.currentTime / 60);
  }

  setSeconds() {
    return parseInt(this.currentTime % 60);
  }

  twoDigitsNumber(a) {
    if (a < 10) return "0" + a;
    else return a.toString();
  }

  setTime() {
    var minutes = this.setMinutes;
    var seconds = this.setSeconds;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }
}

// function Chronometer() {

// }

// Chronometer.prototype.startClick = function () {

// };

// Chronometer.prototype.setMinutes = function () {
  
// };

// Chronometer.prototype.setSeconds = function () {
  
// };

// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
