class LoggingParser {
    static parse(flag?: string): boolean {
        if(typeof flag !== 'undefined') {
            return true;
        };
        return false;
    };
};

export default LoggingParser;