// adapter.js
//  Clase con Metodos vigentes
const AdapterInterface = require('./adapterInterface');

//  Clase con Metodos antiguos
const OldInterface = require('./oldInterface');

class Adapter extends AdapterInterface {
  constructor() {
    super();
    this.oldInterface = new OldInterface();
  }

  request(newParam) {
    // Aquí puedes traducir `newParam` a un formato que `OldInterface` entienda, si es necesario.
    this.oldInterface.requestInOldWay({});
  }
}

module.exports = Adapter;
