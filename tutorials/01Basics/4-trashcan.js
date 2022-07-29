/*jshint esversion: 6*/

/**
 * 1. Demonstrates a class with an array element
 * 2. Populate the array and pop the elements as we do it std::array
 *
 * 
 */

class TrashCan {
    constructor() {
      this.items = [];
    }
  
    throwAway(item) {
      this.items.push(item);
    }
  
    clean() {
      while (this.items.length>0){
        this.items.pop();
      }
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  var elonTrashCan = new TrashCan();

elonTrashCan.throwAway('SpaceX1');
elonTrashCan.throwAway('Starlink');
elonTrashCan.throwAway('Tesla');
elonTrashCan.items.forEach(printItem);

var txt = "";
function printItem(value, index, array) {
    console.log(value);
}

txt = "";
const numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  console.log(txt += value );
}

elonTrashCan.clean();
console.log(elonTrashCan);
console.log(elonTrashCan.isEmpty()); 