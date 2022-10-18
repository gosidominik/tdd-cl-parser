import PortParser from './portparser'

describe('Portparser tests', () => {
    it("Should parse valid input to integer", () => {
        expect(PortParser.parse("1")).toBe(1);
    });
    
    it("Should throw Not Parsable error when given a text", () => {
        expect( () => { PortParser.parse("Hello") }).toThrow(new Error("Not parsable input"));
    });
    
    it("Should throw Not a valid port error when number with decimal is given", () => {
        expect( () => { PortParser.parse("3.2") }).toThrow(new Error("Not a valid port"));
    });
    
    it("Should throw Not a valid port error when port number is too big", () => {
        expect( () => { PortParser.parse("65566") }).toThrow(new Error("Not a valid port"));
    });

    it("Should throw Not a valid port error when port number is negative", () => {
        expect( () => { PortParser.parse("-1") }).toThrow(new Error("Not a valid port"));
    });
});
