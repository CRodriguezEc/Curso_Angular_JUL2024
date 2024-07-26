// app.js
const Adapter = require('./adapter');

const adapter = new Adapter();
adapter.request('param');  // Deberías ver "Request made in old interface."
