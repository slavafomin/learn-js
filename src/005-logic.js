
const isWinter = true;
const isBadWeather = true;
const wasCleaned = false;

// Logical "AND"
if (isWinter && isBadWeather) {
  console.log('Start cleaning!');
}

// Logical "OR"
if (isWinter || isBadWeather) {
  console.log('Cleaning could be required!');
}

// Logical "NOT"
if (!wasCleaned) {
  console.log('Go cleaning!');
}
