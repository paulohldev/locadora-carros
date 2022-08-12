const pool = require("./config");

let operations = {
  list: function () {
    console.log("listou");
  },
  save: function (veiculo) {},
  update: function (veiculo) {},
  remove: function (id) {},
  findById: function (id) {},
};

module.exports = operations;

// pool
//   .promise()
//   .query("select * from veiculos")
//   .then(([rows]) => {
//     console.log(rows);
//   });
