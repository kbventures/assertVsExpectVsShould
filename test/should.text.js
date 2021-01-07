let should = require('chai').should();
const foo = 'bar';
const beverages = {tea:['chai', 'matcha','oolong']};


describe('Testing suite demonstrating how should works', function(){
    it('Foo should to be a string', function(){
        foo.should.be.a('string');
    });
    it('const bar shoudl shoudl equal `bar`', function(){
        foo.should.equal('bar');
    })
    it('foo should have a lenghtOf 3', function(){
        foo.should.have.lengthOf(3);
    });
    it('beverages should have property tea with lenghtof 3', function(){
        beverages.should.have.property('tea').with.lengthOf(3);
    })
});