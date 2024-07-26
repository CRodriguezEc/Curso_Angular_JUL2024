// index.js
const Subject = require('./subject');
const Observer = require('./observer');

// Crear el sujeto (observable)
const subject = new Subject();

// Crear observadores
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

// Añadir observadores al sujeto
subject.addObserver(observer1);
subject.addObserver(observer2);

// Notificar a los observadores
subject.notifyObservers('Hello, observers!');

// Eliminar un observador
subject.removeObserver(observer1);

// Notificar de nuevo
subject.notifyObservers('Observer 1 should not receive this.');
