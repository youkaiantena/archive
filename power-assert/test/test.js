var assert = require('power-assert');

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert([1, 2, 3].indexOf(0) === -1);
      assert([1, 2, 3].indexOf(5) === -1);
      assert([1, 2, 3].indexOf(1) === -1);
    });
  });
});
