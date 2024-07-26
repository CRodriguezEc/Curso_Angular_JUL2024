// main.js
const ConcreteAbstraction = require('./concreteAbstraction');
const ConcreteImplementorA = require('./concreteImplementorA');
const ConcreteImplementorB = require('./concreteImplementorB');

const implementorA = new ConcreteImplementorA();
const implementorB = new ConcreteImplementorB();

const abstractionA = new ConcreteAbstraction(implementorA);
const abstractionB = new ConcreteAbstraction(implementorB);

console.log(abstractionA.operation()); // Outputs: ConcreteImplementorA operation
console.log(abstractionB.operation()); // Outputs: ConcreteImplementorB operation
