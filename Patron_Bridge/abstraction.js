// abstraction.js
class Abstraction {
    constructor(implementor) {
        this.implementor = implementor;
    }

    operation() {
        throw new Error('Method "operation" must be implemented.');
    }
}

module.exports = Abstraction;
