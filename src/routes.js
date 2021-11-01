const { Router } = require("express");
const UsuariosController = require("../src/api/controllers/UsuariosController.js");
const FilmesController = require("../src/api/controllers/FilmesController.js");
const authMiddleware = require("../src/api/middlewares/auth.js");

const routes = Router();

routes.post("/api/v1/users/createUser", function (req, res){
    UsuariosController.create(req, res);
});

routes.post("/api/v1/users/createAdmin", function (req, res){
    UsuariosController.createAdmin(req, res);
});

routes.post("/api/v1/users/login", function (req, res) {
    UsuariosController.login(req, res);
})

//usuários
routes.post("/api/v1/users/updateUser", authMiddleware, function (req, res) {
    UsuariosController.update(req, res);
});

routes.delete("/api/v1/users/deleteUser", authMiddleware, function (req, res) {
    UsuariosController.delete(req, res);
});

routes.get("/api/v1/users/getAllUsers", authMiddleware, function (req, res) {
    UsuariosController.getAll(req, res);
});

//filmes
routes.post("/api/v1/filmes/createFilme", authMiddleware, function (req, res) {
    FilmesController.create(req, res);
});

routes.post("/api/v1/filmes/updateFilme", authMiddleware,  function (req, res){
    FilmesController.update(req, res);
});

routes.delete("/api/v1/filmes/deleteFilme", authMiddleware, function (req, res) {
    FilmesController.delete(req, res);
});

routes.get("/api/v1/filmes/getAllFilmes", authMiddleware, function (req, res){
    FilmesController.findAll(req, res);
});

routes.post("/api/v1/filmes/getFilmeById", authMiddleware,function (req, res){
    FilmesController.findById(req, res);
});

routes.post("/api/v1/filmes/getFilmeByDiretor", authMiddleware,function (req, res){
    FilmesController.findByDiretor(req, res);
});

routes.post("/api/v1/filmes/getFilmeByNome", authMiddleware, function (req, res){
    FilmesController.findByNome(req, res);
});

routes.post("/api/v1/filmes/getFilmeByGenero", authMiddleware,function (req, res){
    FilmesController.findByGenero(req, res);
});

module.exports = routes;