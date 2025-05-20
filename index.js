const convertToCelcius = (fahrenheit) => {
  const celcius = ((fahrenheit - 32) * 5) / 9;
  return celcius;
};

const fahrenheit = Number(prompt(`Enter a tempurature in Fahrenheit`));

const describeTempurature = (fahrenheit) => {
  const convertedFahrenheit = convertToCelcius(fahrenheit);
  if (convertedFahrenheit <= 0) {
    return `${fahrenheit} degrees fahrenheit is ${convertedFahrenheit} degrees celcius. 
    That would be very cold. Time to get the snow shovels.`;
  } else if (convertedFahrenheit < 20) {
    return `${fahrenheit} degrees fahrenheit is ${convertedFahrenheit} degrees celcius. 
    That would be cold. Bundle up, but be ready to take some layers off.`;
  } else if (convertedFahrenheit < 30) {
    return `${fahrenheit} degrees fahrenheit is ${convertedFahrenheit} degrees celcius. 
    That would be slightly warm. This, this is perfect.`;
  } else if (convertedFahrenheit < 40) {
    return `${fahrenheit} degrees fahrenheit is ${convertedFahrenheit} degrees celcius. 
    That would be hot. Probably a good beach day.`;
  } else if (convertedFahrenheit >= 40) {
    return `${fahrenheit} degrees fahrenheit is ${convertedFahrenheit} degrees celcius. 
    That would be very hot. Maybe stay inside for a while.`;
  }
};

const description = describeTempurature(fahrenheit);
alert(description);
