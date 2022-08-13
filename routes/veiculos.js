var express = require("express");
var router = express.Router();
var dao = require("../database/dao");

router.get("/", function (request, response) {
  dao
    .list()
    .then(([rows]) => {
      response.render("veiculos/home", { veiculos: rows });
    })
    .catch((err) => {
      console.log(err);
      response.render("veiculos/home", { veiculos: [] });
    });
});

router.post("/delete", function (request, response) {
  dao
    .remove(request.body.id)
    .then(([result]) => {
      console.log(result);
      if (result.affectedRows > 0) {
        request.flash("success", "Veículo excluído com sucesso!");
      } else {
        request.flash(
          "success",
          `Veículo com id = ${request.body.id} não foi encontrado no Banco de Dados!`
        );
      }
      response.redirect("/veiculos");
    })
    .catch((err) => {
      console.log(err);
      request.flash("error", "Ocorreu um erro na exclusão do veículo!");
      response.render("veiculos/home", { alunos: [] });
    });
});

router.get("/cadastro", async function (request, response) {
  let row = {
    id: "",
    marca: "",
    modelo: "",
    ano: "",
    cor: "",
    categoria: "",
    combustivel: "",
    cambio: "",
    pcd: "",
  };
  if (request.query.id) {
    [result] = await dao.findById(request.query.id);
    row = result[0];
  }

  response.render("veiculos/cadastro", { veiculo: row });
});

router.post("/save", function (request, response) {
  if (request.body.id) {
    operacao = dao.update;
    success = "Dados do veículo atualizados com sucesso!";
  } else {
    operacao = dao.save;
    success = "Veículo cadastrado com sucesso!";
  }

  operacao(request.body)
    .then(([result]) => {
      request.flash("success", success);
      response.redirect("/veiculos");
    })
    .catch((err) => {
      console.log(err);
      request.flash("error", "Não foi possível cadastrar o veículo!");
      response.redirect("/veiculos");
    });
});

router.get("/search", function (request, response) {
  if (request.query.nome) {
    dao
      .search(request.query.nome)
      .then(([rows]) => {
        response.render("veiculos/home", { veiculos: rows });
      })
      .catch((err) => {
        console.log(err);
        request.flash("error", "Não foi possível efetuar a busca");
        response.redirect("/veiculos");
      });
  } else {
    response.redirect("/veiculos");
  }
});

module.exports = router;
