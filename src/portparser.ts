class PortParser {
    static parse(input: string): number {
        if (input.includes('.') || input.includes(',')) {
            throw new Error("Not a valid port");
        };
        let parsedInput = parseInt(input);
        if (Number.isNaN(parsedInput)) {
            throw new Error("Not parsable input");
        } else if (parsedInput > 65565 || parsedInput < 0) {
            throw new Error("Not a valid port");
        } else {
            return parsedInput;
        };
    };
};

export default PortParser;