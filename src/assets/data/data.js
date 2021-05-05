var food = require('./food.json');
var user = require('./user.json');
var payment = require('./payment.json');
var address = require('./address.json');
var order = require('./order.json');

module.exports = () => ({
  foods: food.foods,
  users: user.users,
  payments: payment.payments,
  addresses: address.address,
  orders: order.orders
});