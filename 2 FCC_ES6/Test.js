// Only change code below this line
class Thermostat {
  constructor(F) {
    this.T = F ;
  }

  get temperature() {
    let C = 5/9 * (F - 32); 
    return this.C ;
  }

  set temperature(value){
    return this.T ; 
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
