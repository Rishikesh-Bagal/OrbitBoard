const store = require('../server/src/store/dataStore.js');

try {
  store.deleteCard('board-1', 'col-backlog', 'card-1');
  console.log("SUCCESS");
} catch (err) {
  console.error("ERROR:");
  console.error(err.message);
}
