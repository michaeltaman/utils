const { pluck } = require("@mictrwork/utils");
console.log(pluck([{name: 'foo'}, {name: 'bar'}], 'name'));