# Imersão Full Cycle 3 - Desafios 2 e 3

![Imersão Full Stack && Full Cycle](https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/grupo_4417.png)

Participe gratuitamente: https://imersao.fullcycle.com.br/

## Informações do desafio 2

Nesse desafio você trabalhará com backend e frontend juntos para consolidar os conhecimentos adquiridos nas aulas de Nest.js e React.js.

Para isso:

- Crie um docker-compose.yaml que levante uma aplicação Nest.js e React juntos
- A aplicação Nest.js precisa rodar na porta 3000
- Aplicação React.js precisa rodar na porta 3001
- Ao acessar http://localhost:3001 a aplicação React precisa consumir e listar "rotas" do endpoint do Nest.js: http://localhost:3000/routes
- O endpoint http://localhost:3000/routes precisa retornar 5 rotas com os seguintes dados: 
  - title: título da rota
  - startPosition: latitude e longitude
  - endPosition: latitude e longitude

## Informações do desafio 3

Nesse desafio, você deverá gerar os manifestos yaml do Kubernetes (deployment e service) para o backend e o frontend que criados no desafio 2.

Você NÃO precisa utilizar um Cloud Provider como AWS, GCP e Azure para realizar essa tarefa. Você pode realizar localmente a instalação do cluster utilizando o Kind (https://kind.sigs.k8s.io/).

### Executando

```bash
# Aplicar ConfigMap para frontend-deployment
kubectl apply -f k8s/frontend-configmap.yaml

# Aplicar Deployments
kubectl apply -f k8s/api-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml

# Aplicar Services
kubectl apply -f k8s/api-service.yaml
kubectl apply -f k8s/frontend-service.yaml

# Port-forward no host para a porta 3001
kubectl port-forward svc/frontend-service 3001:3001
```

Ao acessar http://localhost:3001, a aplicação do frontend deverá servir a página de "Rotas".
