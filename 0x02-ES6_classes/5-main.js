import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200)
    console.log('good')
}
catch(err) {
  console.log('here')
    console.log(err);
}