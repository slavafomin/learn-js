
// BAD:

if (true) {

  if (true) {

    if (true) {

      if (true) {

        // action

      } else {

        // error

      }

    } else {

      // error

    }

  } else {

    // error

  }

} else {

  // error

}


// GOOD:

if (!true) {
  // error
}

if (!true) {
  // error
}

if (!true) {
  // error
}

if (!true) {
  // error
}

// action


// EXAMPLE: BAD

const isOnline = true;
const hasFreeDiskSpace = true;
const isBusy = false;

if (isOnline) {

  if (hasFreeDiskSpace) {

    if (!isBusy) {
      // DOWNLOAD FILE

    } else {
      console.error('System is busy!');

    }

  } else {
    console.error('No free disk space!');

  }

} else {
  console.error('You must be online!');

}

// EXAMPLE: GOOD

const isOnline = true;
const hasFreeDiskSpace = true;
const isBusy = false;

if (!isOnline) {
  console.error('You must be online!');
  process.exit(1);
}

if (!hasFreeDiskSpace) {
  console.error('No free disk space!');
  process.exit(1);
}

if (isBusy) {
  console.error('System is busy!');
  process.exit(1);
}

// DOWNLOAD FILE
