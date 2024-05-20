module.exports = class CommandParser {
    constructor(input) {
        this.input = input;
    }

    extractQuotedStrings() {
        // Regular expression to match words followed by equal sign and quoted strings
        const regex = /(\w+)\s*=\s*"([^"]*)"/g;
        const result = {};
        let match;
    
        // Use regex to find matches and add them to the result object
        while((match = regex.exec(this.input)) !== null) {
            const key = match[1];
            const value = match[2];
            result[key] = value;
        }
    
        return result;
    }

    getArgs = () => this.input.split(" ");
    getCommand = () => this.getArgs()[0];
    argPresent = (arg) => this.getArgs().includes(arg);
}