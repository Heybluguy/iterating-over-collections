function iteratorFactory() {

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  this.sum = function(myArray) {
    return myArray.reduce(reducer);
  };

  this.sumAndSquare = function(myArray) {
    sum = myArray.reduce(reducer);
    return Math.pow(sum, 2);
  };

  this.onlyEvens = function (myArray) {
    return myArray.filter(num => num % 2 === 0);
  };

  this.onlyOdds = function(myArray) {
    return myArray.filter(num => num % 2 !== 0);
  };

  this.squareAndSum = function(myArray) {
    squared = myArray.map(x => x = Math.pow(x, 2));
    return squared.reduce(reducer);
  };
};




class IteratorFactory {
  constructor(collection) {
    this.collection = collection;
  }

  reducer(accumulator, currentValue) {
    return accumulator + currentValue
  }

  sum() {
    return this.collection.reduce(this.reducer);
  }

  sumAndSquare() {
    this.sum = this.collection.reduce(this.reducer);
    return Math.pow(this.sum, 2);
  }

  onlyEvens() {
    return this.collection.filter(num => num % 2 === 0);
  }

  onlyOdds() {
    return this.collection.filter(num => num % 2 !== 0);
  }

  squareAndSum() {
    this.squared = this.collection.map(x => x = Math.pow(x, 2));
    return this.squared.reduce(this.reducer);
  }
}

module.exports = IteratorFactory;