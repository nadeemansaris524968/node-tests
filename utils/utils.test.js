const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    var result = utils.add(33, 11);

    expect(result).toBe(44).toBeA('number');
});

it('should square a number', () => {
    var result = utils.square(4);

    expect(result).toBe(16).toBeA('number');
});

it('should verify first and last names are set', () => {
    var user = utils.setName({ firstName: '', lastName: ''}, 'Nadeem Ansari');

    expect(user).toInclude({ firstName: 'Nadeem', lastName: 'Ansari'}).toBeA('object');
});