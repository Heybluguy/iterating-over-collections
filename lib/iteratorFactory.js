function iteratorFactory() {

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  this.sum = function(myArray) {
    return myArray.reduce(reducer);
    myArray.join('');
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

module.exports = iteratorFactory;