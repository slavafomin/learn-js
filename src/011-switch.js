
const action = 'foobar';


switch (action) {
  case 'create': {
    create();
    break;
  }
  case 'read': {
    read();
    break;
  }
  case 'update': {
    update();
    break;
  }
  case 'kill':
  case 'delete': {
    kill();
    break;
  }
  default: {
    console.error(`Unknown action: ${action}`);
  }
}

function create() {
  console.log('Creating');
}

function read() {
  console.log('Reading');
}

function update() {
  console.log('Updating');
}

function kill() {
  console.log('Deleting');
}
