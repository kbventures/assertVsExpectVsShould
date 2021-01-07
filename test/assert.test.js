const assert = require('chai').assert;

const foo = 'bar';

const beverages = {teat:['chai','matcha','oolong']};

describe('Testing suite demonstrating how assert works', function(){
    it('Assert foo to be a string', function(){
        assert.typeOf(foo,'string');
    });
    it('Assert foo to be a string', function(){
        assert.typeOf(foo,'string', 'foo is a string');
    });
    it('Assert foo is equal bar', function(){
        assert.equal(foo, 'bar','foo equal `bar`');
    })
    it('Assert lenght Of food is 3', function(){
        assert.lengthOf(foo, 3, 'foo`s value has a lenght of 3');
    });
    it('Assert beverages tea key as a length Of 3', function(){
        assert.lengthOf(beverages.teat, 3, 'beverages has 3 types of tea');
    })
});