// concreteImplementorB.js
const Implementor = require('./implementor');

class ConcreteImplementorB extends Implementor {
    operationImplementation() {
        return 'ConcreteImplementorB operation';
    }
}

module.exports = ConcreteImplementorB;
