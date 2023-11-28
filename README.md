# Descrição
- Este repositório contém o segundo desafio do curso fullcyle.

## Requisitos
- Deve-se utilizar nginx como proxy reverso
- Deve-se retornar um html para o ngix contendo `Full Cycle Rocks!!` seguido de um lista nomes cadastrada no banco de dados.
- Deve ser utilizado nodejs com express
- Deve ser utilizado o banco de dados mysql

# Passos 

### Para subir a aplicação rode o seguinte comando
```bash
docker-compose up -d
```
### Para adicionar dados para aplicação:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe"}' http://localhost:3000/api/names
```

# Cleanup
### Para remover os containers rodando em modo detach
```bash
docker-compose rm 
```
### Para remover o volume criado
```bash
docker volume rm nginx-full-cycle_db
```