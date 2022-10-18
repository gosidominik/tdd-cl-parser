import LoggingParser from './loggingparser'

describe('LoggingParser tests', () => {
    it('Should return true when correct flag is given', () => {
        expect(LoggingParser.parse('-l')).toBe(true);
    });

    it('Should return false when no parameter is given', () => {
        expect(LoggingParser.parse()).toBe(false);
    });
});
