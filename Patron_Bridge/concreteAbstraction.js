// concreteAbstraction.js
const Abstraction = require('./abstraction');

class ConcreteAbstraction extends Abstraction {
    operation() {
        return this.implementor.operationImplementation();
    }
}

module.exports = ConcreteAbstraction;
