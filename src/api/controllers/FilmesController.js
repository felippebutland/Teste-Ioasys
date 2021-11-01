const FilmesServices = require('../Services/FilmesService.js');
let response = {}

class FilmesController {
    async create(req, res) {
        const filmes = await FilmesServices.create(req.body);
        if (filmes) {
            response['cor'] = 'green';
            response['ico'] = 'check';
            response['type'] = 'success';
            response['mensagem'] = 'Usuário cadastrado com sucesso!';
            res.status(200).send(response).end();
        } else {
            response['cor'] = 'red';
            response['ico'] = 'times';
            response['type'] = 'error';
            response['mensagem'] = 'Erro ao cadastrar usuário!';
            res.status(500).send(response).end();
        }
    }

    update(req, res) {
        const filmes = FilmesServices.update(req.body)
        if (filmes && filmes.success) {
            response['cor'] = 'green';
            response['ico'] = 'check';
            response['type'] = 'success';
            response['mensagem'] = 'Filmes atualizado com sucesso!';
            res.status(200).send(response).end();
        } else {
            response['cor'] = 'red';
            response['ico'] = 'times';
            response['type'] = 'error';
            response['mensagem'] = 'Erro ao atualizar filmes!';
            res.status(500).send(response).end();
        }
    }

    delete(req, res) {
        const filmes = FilmesServices.delete(req.body);
        if (filmes) {
            response['cor'] = 'green';
            response['ico'] = 'check';
            response['type'] = 'success';
            response['mensagem'] = 'Filmes deletado com sucesso!';
            res.status(200).send(response).end();
        } else {
            response['cor'] = 'red';
            response['ico'] = 'times';
            response['type'] = 'error';
            response['mensagem'] = 'Erro ao deletar filmes!';
            res.status(500).send(response).end();
        }
    }

    findAll(req, res) {
        const filmes = FilmesServices.findAll(req);
        if (filmes) {
            response['cor'] = 'green';
            response['ico'] = 'check';
            response['type'] = 'success';
            response['data'] = filmes;
            res.status(200).send(response).end();
        } else {
            response['cor'] = 'red';
            response['ico'] = 'times';
            response['type'] = 'error';
            response['mensagem'] = 'Erro ao buscar usuários!';
            res.status(500).send(response).end();
        }
    }

    async findById(req, res) {
        const filmes = await FilmesServices.findById(req);
        if (filmes && filmes.error) {
            response['cor'] = 'red';
            response['ico'] = 'times';
            response['type'] = 'error';
            response['mensagem'] = 'Erro ao buscar usuários!';
            res.status(200).send(response).end();
        } else {
            response['cor'] = 'green';
            response['ico'] = 'check';
            response['type'] = 'success';
            response['data'] = filmes;
            res.status(500).send(response).end();
        }
    }

    async findByDiretor(req, res) {
        const filmes = await FilmesServices.findByDiretor(req);
        if (filmes && filmes.error) {
            response['cor'] = 'red';
            response['ico'] = 'times';
            response['type'] = 'error';
            response['mensagem'] = 'Erro ao buscar usuários!';
            res.status(200).send(response).end();
        } else {
            response['cor'] = 'green';
            response['ico'] = 'check';
            response['type'] = 'success';
            response['data'] = filmes;
            res.status(500).send(response).end();
        }
    }

    async findByNome(req, res) {
        const filmes = await FilmesServices.findByNome(req);
        if (filmes && filmes.error) {
            response['cor'] = 'red';
            response['ico'] = 'times';
            response['type'] = 'error';
            response['mensagem'] = 'Erro ao buscar usuários!';
            res.status(200).send(response).end();
        } else {
            response['cor'] = 'green';
            response['ico'] = 'check';
            response['type'] = 'success';
            response['data'] = filmes;
            res.status(500).send(response).end();
        }
    }

    async findByGenero(req, res) {
        const filmes = await FilmesServices.findByGenero(req);
        if (filmes && filmes.error) {
            response['cor'] = 'red';
            response['ico'] = 'times';
            response['type'] = 'error';
            response['mensagem'] = 'Erro ao buscar usuários!';
            res.status(200).send(response).end();
        } else {
            response['cor'] = 'green';
            response['ico'] = 'check';
            response['type'] = 'success';
            response['data'] = filmes;
            res.status(500).send(response).end();
        }
    }
}

module.exports = new FilmesController();