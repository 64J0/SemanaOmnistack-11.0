# Notas de aula do último vídeo da semana Omnistack 11:

## Pacote para realizar validações (backend):

* celebrate

## Pacote para realizar testes automatizados (backend):

* jest

### Tipos de teste:

* integração: testa uma funcionalidade completa, "tocando" em vários trechos do código da aplicação. Para esse tipo de teste são feitas chamadas às rotas da API e os resultados são verificados.
	* supertest (faz requisições http às rotas da aplicação, especializada para realização de testes).

* unitários: testa um pedaço da aplicação de forma muito isolada (funções da pasta utils por exemplo).

## Pacote para trocar a variável de ambiente do Node e fazer os testes com o banco de dados de teste no lugar do banco de dados de desenvolvimento/produção/etc.

* cross-env

## Deploy

### Backend/NodeJS:

	Aplicação experimental -> heroku (opção mais cara).
	Aplicação comercial -> digital ocean (precificação previsível).
	Aplicação gigante -> aws, gcp e ms azure.

### Frontend:

	Aplicação experimental -> netlify.

## Estudos posteriores:

* Padrões de código ESLint, Prettier.

* Autenticação JWT.

* Styled Components.
