const convertToCelsius = function (fahrenheitTemperature) {
  const celsius = (fahrenheitTemperature - 32) / 1.8
  const celsiusRounded = Math.round(celsius * 10) / 10;
  // console.log(celsiusRounded);
  return celsiusRounded;
};

const convertToFahrenheit = function (celsiusTemperature) {
  const fahrenheit = (celsiusTemperature * 1.8) + 32;
  const fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
  // console.log(fahrenheitRounded);
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
