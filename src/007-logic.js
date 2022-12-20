
const isWinter = true;
const isBadWeather = false;
const wasCleaned = false;
const forceCleaning = false;
const hasCleaningCrew = false;

// Nesting
// Вложенные операторы
if ((isWinter && isBadWeather && !wasCleaned) || forceCleaning) {

  if (hasCleaningCrew) {
    console.log('Start cleaning!');

  } else {
    console.log('Call for cleaning crew!');

  }

} else {
  console.log('Nothing to clean');

}
