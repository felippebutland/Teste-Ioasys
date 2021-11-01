const ServiceUsuarios = require('../Services/UsuariosService.js');
let response = {};

class Usuarios {
    async create(req, res) {
        const usuario = await ServiceUsuarios.createUsuario(req.body);
        if (usuario && usuario.success) {
            response['cor'] = 'green';
            response['ico'] = 'check';
            response['type'] = 'success';
            response['mensagem'] = usuario.success ? usuario.success : 'Usuário cadastrado com sucesso!';
            res.status(200).send(response).end();
        } else {
            response['cor'] = 'red';
            response['ico'] = 'times';
            response['type'] = 'error';
            response['mensagem'] = usuario.error ? usuario.error : 'Erro ao cadastrar usuário!';
            res.status(500).send(response).end();
        }
    }

    async createAdmin(req, res) {
        const usuario = await ServiceUsuarios.createAdmin(req.body);
        if (usuario && usuario.success) {
            response['cor'] = 'green';
            response['ico'] = 'check';
            response['type'] = 'success';
            response['mensagem'] = usuario.success ? usuario.success : 'Usuário cadastrado com sucesso!';
            res.status(200).send(response).end();
        } else {
            response['cor'] = 'red';
            response['ico'] = 'times';
            response['type'] = 'error';
            response['mensagem'] = usuario.error ? usuario.error : 'Erro ao cadastrar usuário!';
            res.status(500).send(response).end();
        }
    }

    async login(req, res) {
        const usuario = await ServiceUsuarios.login(req.body);
        if (usuario) {
            response['cor'] = 'green';
            response['ico'] = 'check';
            response['type'] = 'success';
            response['data'] = usuario;
            response['mensagem'] = 'Usuário logado com sucesso';

            res.status(200).send(response).end();
        } else {
            response['cor'] = 'red';
            response['ico'] = 'times';
            response['type'] = 'error';
            response['mensagem'] = 'Erro ao logar!';
            res.status(500).send(response).end();
        }
    }

    update(req, res) {
        const usuario = ServiceUsuarios.update(req);
        if (usuario && usuario.success) {
            response['cor'] = 'green';
            response['ico'] = 'check';
            response['type'] = 'success';
            response['mensagem'] = 'Usuário atualizado com sucesso!';
            res.status(200).send(response).end();

        } else {
            response['cor'] = 'red';
            response['ico'] = 'times';
            response['type'] = 'error';
            response['mensagem'] = 'Erro ao atualizar usuário!';
            res.status(500).send(response).end();
        }
    }

    delete(req, res) {
        const usuario = ServiceUsuarios.delete(req)
        if (usuario && usuario.success) {
            response['cor'] = 'green';
            response['ico'] = 'check';
            response['type'] = 'success';
            response['mensagem'] = 'Usuário excluído com sucesso!';
            res.status(200).send(response).end();
        } else {
            response['cor'] = 'red';
            response['ico'] = 'times';
            response['type'] = 'error';
            response['mensagem'] = 'Erro ao excluir usuário!';
            res.status(500).send(response).end();
        }
    }

    async getAll(req, res) {
        const usuarios = await ServiceUsuarios.findAll(req);
        if (usuarios) {
            response['cor'] = 'green';
            response['ico'] = 'check';
            response['type'] = 'success';
            response['data'] = usuarios;
            res.status(200).send(response).end();
        } else {
            response['cor'] = 'red';
            response['ico'] = 'times';
            response['type'] = 'error';
            response['mensagem'] = 'Erro ao buscar usuários!';
            res.status(500).send(response).end();
        }
    }
}

module.exports = new Usuarios();