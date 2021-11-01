const jwt = require("jsonwebtoken");
const configJwt = require('../../../auth.js');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient()

class UsuariosService {

    async createUsuario(data) {
        try {
            const {name, email, senha, confirma_senha} = data

            if (senha !== confirma_senha) {
                return {error: 'As senhas são diferentes!'}
            }

            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
            const password = bcrypt.hashSync(senha, salt);

            await prisma.users.create({
                data: {
                    name: name,
                    email: email,
                    password: password,
                    type: 'user', //definindo como usuário padrão
                    status: 'A' //definindo status como ativo
                }
            });

            return {success: "Usuário cadastrado com sucesso"};
        }
        catch (error) {
            return error;
        }        
    }

    async createAdmin(data) {
        try {
            const {name, email, senha, confirma_senha} = data

            if (senha !== confirma_senha) {
                return {error: 'As senhas são diferentes!'}
            }

            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
            const password = bcrypt.hashSync(senha, salt);

            await prisma.users.create({
                data: {
                    name: name,
                    email: email,
                    password: password,
                    type: 'admin', //definindo como usuário padrão
                    status: 'A' //definindo status como ativo
                }
            });

            return {success: "Usuário cadastrado com sucesso"};
        }
        catch (error) {
            return error;
        }        
    }

    async login(data) {
        const user = await this.findById(data.id);

        if (!user)
            return {error: "O usuário não existe no banco de dados!"}

        if (user.status === 'I')
            return {error: "Usuário inativo não pode realizar login"}

        if(!await bcrypt.compare(data.senha, user.password))
           return {error: "A senha está incorreta!"}

        if (data.email !== user.email)
            return {error: "Esse cadastro não existe"}

        return jwt.sign({ id: user.id }, configJwt.secret, {
            expiresIn: configJwt.expiresIn
        });
    }
    
    async update(req) {
        try {
            const { nome, email, senha, user, id, status, id_user } = req.body;
            const Usuario = await this.findById(id_user);
            if (Usuario && Usuario.type === 'admin') {
                await prisma.users.update({
                    where: {
                        id: id
                    },
                    data: {
                        name: nome,
                        email: email,
                        password: senha,
                        type: user,
                        status: status
                    }
                });

                return {success: "Usuário atualizado com sucesso!"};
            } else {
                return {error: 'Usuário não autorizado'};
            }
        } 
        catch (error) {
            return error;
        }
    }

    async delete(req) {
        try {
            const { nome, email, senha, confirma_senha, user, id, id_user } = req.body;
            const Usuario = this.findById(id_user);

            if (Usuario && Usuario.type === 'admin') {
                await prisma.users.update({
                    where: {id: id},
                    data: {
                        name: nome,
                        email: email,
                        password: senha,
                        type: user,
                        status: "I"
                    }
                });

                return {success: "Usuário inativado com sucesso"};
            } else {
                return {error: 'Usuário não autorizado'};
            }

        } 
        catch (error) {
            return error;
        }
    }

    async findAll() {
        try {
            return await prisma.users.findMany({
                where: {
                    status: {
                        not: 'I'
                    }
                }
            });
        } 
        catch (error) {
            return error;
        }
    }

    async findById(id) {
        try {
            return await prisma.users.findUnique({
                where: {
                    id: id
                }
            });
        } catch (error){
            return error
        }
    }
}

module.exports =  new UsuariosService();