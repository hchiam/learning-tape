const test = require('tape').test;
const add = require('./add.js');

test('The add method', function(t){
  t.equal(add(1,2), 3, 'should add two numbers correctly');
  t.end();
});
