# JetWeb backend
Teste o projeto aqui: [Api JetWeb](https://jetweb.herokuapp.com/operators)

# 🚀 Acesso ao projeto:

Aconselhado ter instalado o NodeJS.

Para instalar o node [clique aqui](https://nodejs.org/en/)

## Para iniciar o projeto
Clone o projeto:
```
  git clone https://github.com/ArieleM/jetweb.git
```
Acesse a pasta:
```
  cd jetweb
```
Crie o arquivo ".env" e adicione as suas informações para rodar localmente:
```
  CLEARDB_DATABASE_URL=mysql://seu_usuario:seu_senha@seu_host:porta_seu_banco/nome_seu_banco
```
Instale as dependências:

```
  yarn 
```
Rode as migrations: 
```
  yarn typeorm migration:run
```
Rode o projeto:

```
  yarn dev
```

# ⚙️ Funcionalidades:

- Criar operador
- Criar cliente
- Alterar cliente
- Listar clientes
- Listar operadores com seus clientes
