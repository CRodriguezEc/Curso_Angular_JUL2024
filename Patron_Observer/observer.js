// observer.js
class Observer {
    constructor(name) {
      this.name = name;
    }
  
    update(message) {
      console.log(`${this.name} received message: ${message}`);
    }
  }
  
  module.exports = Observer;
  