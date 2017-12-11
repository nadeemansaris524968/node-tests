const expect = require('expect');

describe('App', () => {

    it('should call the spy method', () => {
        var spy = expect.createSpy();
        spy('Andrew');
        expect(spy).toHaveBeenCalled('Andrew');
    });
});