const UsuariosService = require('../Services/UsuariosService.js');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

class FilmesService {
    async create(data) {
        try {
            const Usuario = await UsuariosService.findById(data.id);
            const { titulo, descricao, genero, diretor} = data;

            if (Usuario && Usuario.type === 'admin') {
                await prisma.filmes.create({
                    data: {
                        name: titulo,
                        description: descricao,
                        genre: genero,
                        director: diretor,
                        status: 'A',
                        userAdd: data.id
                    }
                });
                return {success: "Filme adicionado com sucesso!"}
            } else {
                return {error: 'Usuário não autorizado'};
            }
        }
        catch (error) {
            return error;
        }
    }

    async update(data) {
        try {
            const Usuario = await UsuariosService.findById(data.id);

            const { titulo, descricao, genero, diretor, id} = data;

            if (Usuario && Usuario.type === 'admin') {
                await prisma.filmes.update({
                    where: {
                        id: id
                    },
                    data: {
                        name: titulo,
                        description: descricao,
                        genre: genero,
                        director: diretor,
                        status: 'A',
                    }
                });
                return {success: "Filme atualizado com sucesso!"};
            } else {
                return {error: 'Usuário não autorizado'};
            }
        }
        catch (error) {
            return error;
        }
    }

    async delete(data) {
        try {
            const Usuario = UsuariosService.findById(data.id);
            const { titulo, descricao, genero, diretor, id} = data;

            if (Usuario && Usuario.type === 'admin') {
                const Filme = await prisma.filmes.update({
                    where: {
                        id: id
                    },
                    data: {
                        name: titulo,
                        description: descricao,
                        genre: genero,
                        director: diretor,
                        status: 'I',
                    }
                })

                console.log(Filme);
            
                return Filme;
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
            return await prisma.filmes.findMany({
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

    async findById(req) {
        try {
            const id = req.body.id;

            return await prisma.filmes.findMany({
                where: {
                    id: id,
                },
            });
        }
        catch (error) {
            return {error: "Não foi possivel buscar o filme!"}
        }   
    }

    async findByDiretor(req) {
        try {
            const diretor = req.body.diretor;

            return await prisma.filmes.findMany({
                where: {
                    director: diretor,
                },
            });
        }
        catch (error) {
            return {error: "Não foi possivel buscar o filme!"}
        }
    }

    async findByNome(req) {
        try {
            const nome = req.body.nome;

            return await prisma.filmes.findMany({
                where: {
                    nome: nome,
                },
            });
        }
        catch (error) {
            return {error: "Não foi possivel buscar o filme!"}
        }
    }

    async findByGenero(req) {
        try {
            const genero = req.body.genero;

            return await prisma.filmes.findMany({
                where: {
                    nome: genero,
                },
            });
        }
        catch (error) {
            return {error: "Não foi possivel buscar o filme!"}
        }
    }
}

module.exports = new FilmesService();