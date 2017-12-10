const utils = require('./utils');

it('should add two numbers', () => {
    var result = utils.add(33, 11);

    if (result !== 44)
        throw new Error(`Expected 44, but got ${result}.`);
});

it('should square a number', () => {
    var result = utils.square(4);

    if (result !== 16)
        throw new Error(`Expected 16, but got ${result}`);
});