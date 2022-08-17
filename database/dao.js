const { connect } = require("../routes");
const pool = require("./config");

let operations = {
  findUserById(id) {
    return pool.promise().query("select * from usuarios where id=?", [id]);
  },
  findByUsername(username) {
    return pool
      .promise()
      .query("select * from usuarios where login=?", [username]);
  },
  list: function () {
    return pool.promise().query("select * from veiculos");
  },
  findById(id) {
    return pool.promise().query("select * from veiculos where id = ?", [id]);
  },
  save: function (veiculo) {
    return pool
      .promise()
      .execute(
        "insert into veiculos (marca, modelo, ano, cor, categoria, combustivel, cambio, pcd) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          veiculo.marca,
          veiculo.modelo,
          veiculo.ano,
          veiculo.cor,
          veiculo.categoria,
          veiculo.combustivel,
          veiculo.cambio,
          veiculo.pcd,
        ]
      );
  },
  update: function (veiculo) {
    return pool
      .promise()
      .execute(
        "update veiculos set marca = ?, modelo = ?, ano = ?, cor = ?, categoria = ?, combustivel = ?, cambio = ?, pcd = ? where id = ?",
        [
          veiculo.marca,
          veiculo.modelo,
          veiculo.ano,
          veiculo.cor,
          veiculo.categoria,
          veiculo.combustivel,
          veiculo.cambio,
          veiculo.pcd,
          veiculo.id,
        ]
      );
  },
  remove: function (id) {
    return pool.promise().execute("delete from veiculos where id = ?", [id]);
  },
  search: function (modelo) {
    return pool
      .promise()
      .query("select * from veiculos where modelo like ?", [
        "%" + modelo + "%",
      ]);
  },
};

module.exports = operations;
