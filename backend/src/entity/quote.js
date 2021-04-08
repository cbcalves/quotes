const { EntitySchema } = require("typeorm");
const Quote = require('./../model/quote');

module.exports = new EntitySchema({
  name: 'Quote',
  target: Quote,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    text: {
      type: "varchar"
    },
    author: {
      type: "varchar"
    }
  }
});