// concreteImplementorA.js
const Implementor = require('./implementor');

class ConcreteImplementorA extends Implementor {
    operationImplementation() {
        return 'ConcreteImplementorA operation';
    }
}

module.exports = ConcreteImplementorA;
