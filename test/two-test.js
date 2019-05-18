var assert = require('chai').assert;
var IteratorFactory = require('../lib/iteratorFactory');

describe('IteratorFactory', function() {

  it('can be instantiated with a collection', function() {
    var collection = [1, 2, 3, 4, 5];
    var iteratorFactory = new IteratorFactory(collection);

    assert.equal(iteratorFactory.collection, collection)
  });

  describe('when instantiated with a collection', function() {

    it('the prototype function sum is invoked with the collection', function() {
      var factory = new IteratorFactory([1, 2, 3, 4, 5]);

      assert.equal(factory.sum(), 15);

      assert.equal(factory.sum([1, 2, 3]), 15);
    });

    it('the prototype function `sumAndSquare` is invoked with the collection', function() {
      var factory = new IteratorFactory([1, 2, 3, 4, 5]);

      assert.equal(factory.sumAndSquare(), 225);

      assert.equal(factory.sumAndSquare([10, 20, 30, 40]), 225);
    });

    it('the prototype function `onlyEvens` is invoked with the collection', function() {
      var factory = new IteratorFactory([1, 2, 3, 4, 5, 6]);

      assert.deepEqual(factory.onlyEvens([1, 2, 3, 4, 5, 6]), [2, 4, 6]);
    });

    it('the prototype function `onlyOdds` is invoked with the collection', function() {
      var factory = new IteratorFactory([1, 2, 3, 4, 5, 6]);

      assert.deepEqual(factory.onlyOdds([1, 2, 3, 4, 5, 6]), [1, 3, 5]);
    });

    it('the prototype function `squareAndSum` is invoked with the collection', function() {
      var factory = new IteratorFactory([1, 2, 3, 4, 5, 6]);

      assert.equal(factory.squareAndSum(), 91);
    });
  });
});
