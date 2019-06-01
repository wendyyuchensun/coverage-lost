import { expect } from 'chai';
import hi from '../src/hi';

describe('hi', () => {
    it('should return hi', () => {
        expect(hi()).to.equal('hi');
    });
});
