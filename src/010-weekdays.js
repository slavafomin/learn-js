
console.log(getWeekDayNameTernary(5));

function getWeekDayName(weekDay) {
  if (weekDay === 1) {
    return 'Monday';
  } else if (weekDay === 2) {
    return 'Tuesday';
  } else if (weekDay === 3) {
    return 'Wednesday';
  } else if (weekDay === 4) {
    return 'Thursday';
  } else if (weekDay === 5) {
    return 'Friday';
  } else if (weekDay === 6) {
    return 'Saturday';
  } else if (weekDay === 7) {
    return 'Sunday';
  }
}

function getWeekDayNameTernary(weekDay) {

  return (
      weekDay === 1 ? 'Monday'
    : weekDay === 2 ? 'Tuesday'
    : weekDay === 3 ? 'Wednesday'
    : weekDay === 4 ? 'Thursday'
    : weekDay === 5 ? 'Friday'
    : weekDay === 6 ? 'Saturday'
    : weekDay === 7 ? 'Sunday'
    : undefined
  );

}

function getWeekDayNameSwitch(weekDay) {

  switch (weekDay) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 7:
      return 'Sunday';
  }

}
