Regras de negocio:


Usuários:

Para criar um usuário administrador, dispare a rota 'api/v1/users/addAdmin' -> passando as informações necessárias para criar o cadastro de um usuário;


Para criar um usuário comum, dispare a rota 'api/v1/users/addUsers' -> passando as informações necessárias Para criar o cadastro de um usuário;


Para buscar os usuários, dispare a rota 'api/v1/users/getAllUsers', essa rota busca todos os usuários;

Para buscar todos os usuários ativos, dispare a rota 'api/v1/users/getAllUsersAtivos', essa rota busca todos os usuários ativos;

Para buscar todos os usuários inativos, dispare a rota 'api/v1/users/getAllUsersInativos', essa rota busca todos os usuários inativos;

Para atualizar um determinado usuário, dispare a rota 'api/v1/users/updateUsers' -> essa rota atualiza as informações do usuário determinado (passando o ID como parâmetro)


Para deletar (desativar) um determinado usuário, dispare a rota 'api/v1/users/deleteUsers' -> essa rota inativa o usuario;


Filmes:

Para inserir um novo filme, dispare a rota 'api/v1/filmes/addFilmes', Para inserir o registro, você tem que passar como parâmetro o id do seu usuário, e será possível apenas inserir sendo seu usuário for administrador;

Para atualizar determinado filme, dispare a rota 'api/v1/filmes/updateFilmes' -> Para atualizar o registro, você tem que passar como parâmetro o id do seu usuário, e será possível apenas atualizar sendo seu usuário for administrador;

Para deletar(inativar) determinado filme, dispare a rota 'api/v1/filmes/deletarFilmes' -> Para deletar o registro, você tem que passar como parâmetro o id do seu usuário, e será possível apenas deletar sendo seu usuário for administrador;

Para buscar todos os filmes, dispare a rota 'api/v1/filmes/getAllFilmes', assim buscará todos os filmes registrados no banco;

Para buscar filmes com determinado diretor, dispare a rota 'api/v1/filmes/getFilmesByDiretor', assim buscará todos os filmes registrados com esse diretor;

Para buscar filmes com determinado nome, dispare a rota 'api/v1/filmes/getFilmesByNome', assim buscará todos os filmes registrados com esse nome;

Fora a rota de criação de usuário e criação de administrador, todas são protegidas pelo token fornecido ao fazer Login;
Todas as rotas retornarão um padrão em json, sendo: type, color, message, e data.

### Rodando o projeto 

Certifique-se que tem o node instalado em seu computador, atráves do comando no terminal:
``` 
node -v 
``` 

Após isso, clone o repositório e instale as dependências do npm no projeto, rodando o código:
``` 
npm install 
``` 

Certifique-se que tem instalado o postgress no computador, usando o comando:
``` 
postgres --version
```

Tendo instalado, inicie ele via terminal:
``` 
cd C:\Program Files\PostgreSQL\14\bin\ 
&& 
pg_ctl -D "C:\Program Files\PostgreSQL\14\data" start 
```

Estando tudo certo, rode o comando no terminal:
``` 
npm start
```

Ele iniciará com o nodemon. 

Para iniciar, cadastre um usuário no banco de dados e realize o login, pegue o token da resposta do JSON e utilize no header de cada requisição, lembre-se de utilizar o Bearer na frente, por exemplo:
``` 
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjM1NzMwMDc2LCJleHAiOjE2MzU3MzAxMTl9.Vge45PmWtwiLVSKdwr9xKvOzPGCN219YOVEusp2C1qg
```

Uma cópia de todas as requisições estão na pasta:
``` 
Requisições
```

Apenas importe para seu simulador de API Client preferido.

Para quaisquer dúvida, não hesite me contatar:
E-mail: butlandfelippe@gmail.com
Telefone: 49 9 9910-9316

