const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    
    describe('#add', () => {
        
        it('should add two numbers', () => {
            var result = utils.add(33, 11);
    
            expect(result).toBe(44).toBeA('number');
        });    
    });

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });

    it('should square a number', (done) => {
        utils.square(4, (squared) => {
            expect(squared).toBe(16).toBeA('number');
            done();
        });
    });
});