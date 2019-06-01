import { expect } from 'chai';
import hello from '../src/hello';

describe('hello', () => {
    xit('should return hello', () => {
        expect(hello()).to.equal('hello');
    });
});
