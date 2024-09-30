# APIs e Web Services

Esta API RESTful oferece um conjunto completo de operações CRUD para gerenciar Usuários, Clientes, Campanhas, Planos, Criativos, Pagamentos e Credenciais. Com ela, é possível criar, consultar, atualizar e excluir dados relacionados a cada um desses modelos, facilitando o gerenciamento de campanhas de marketing e clientes.

A API foi desenvolvida seguindo os padrões REST, utiliza autenticação JWT, e retorna os dados em formato JSON. Além disso, possui documentação detalhada via Swagger, suporte a escalabilidade e alta disponibilidade, e é compatível com integrações em diversos ambientes.

## Objetivos da API

O objetivo desta API é fornecer uma interface robusta e flexível para gerenciar informações, facilitando a comunicação entre a empresa e seus clientes por meio de uma integração eficiente com aplicações web e mobile.

Essa API serve como um ponto central para que as aplicações possam acessar e manipular dados de forma ágil e segura. Com um design escalável, a API é projetada para suportar futuras implementações e melhorias no sistema, permitindo que a empresa evolua conforme as demandas do mercado e as necessidades dos usuários. Isso resulta em um sistema mais maduro e adaptável, capaz de acompanhar as tendências e inovações tecnológicas.


## Arquitetura

A arquitetura de uma REST API utilizando o Firebase Firestore como banco de dados é projetada para ser escalável e flexível. A API oferece endpoints RESTful que permitem operações CRUD para diferentes recursos, acessíveis via métodos HTTP. Um middleware gerencia autenticação e autorização, utilizando tokens JWT e a autenticação do Firebase. A lógica de negócio é separada em serviços que interagem com o Firestore, onde os dados são armazenados em documentos organizados em coleções. A documentação da API foi feita com Swagger.

![Fluxo de Requisições](/docs/img/data-request-flow.jpg "Fluxo de Requisições")

## Modelagem da Aplicação
A modelagem de dados para os modelos User, Client, Campaign, Plans, PostCreative, Payment e SocialCredentials é estruturada de forma a refletir as relações entre eles. O modelo User representa os usuários que podem acessar o sistema, enquanto o modelo Client armazena informações sobre os clientes que estão vinculados a um usuários. Cada Client pode ter várias Campaigns associadas, representando as campanhas de marketing que os pertence.

Além disso, cada Campaign pode ter múltiplos PostCreatives, que são os criativos de postagens usadas nas campanhas. O modelo Payment registra as transações financeiras relacionadas a cada cliente, enquanto SocialCredentials armazena as credenciais sociais necessárias para autenticação em plataformas de mídia social. Assim, a relação entre os modelos é hierárquica, onde um User pode gerenciar um ou Clients ou representar um usuário da empresa, que por sua vez podem estar associados a diversas Campaigns, Payments, PostCreatives e SocialCredentials. Essa estrutura facilita o gerenciamento de dados e as interações entre os diferentes componentes do sistema.

![UML Back-End](/docs/img/uml-database.jpg "UML Back-End")


## Fluxo de Dados

O fluxo de dados da API começa quando um cliente, como a aplicação web ou mobile, envia uma requisição HTTP a um endpoint da API, utilizando métodos como GET, POST, PATCH ou DELETE. Essa requisição pode incluir parâmetros e um corpo com dados.

O servidor, ao receber a requisição, verifica a autenticação e autorização do cliente, aplica a lógica de negócios e interage com o banco de dados para recuperar ou modificar informações. Em seguida, os dados são formatados em JSON e enviados de volta ao cliente como uma resposta HTTP, incluindo um código de status que indica o resultado da operação.

Por fim, o cliente processa essa resposta, atualizando a interface do usuário ou realizando outras ações, completando assim o ciclo de comunicação entre cliente e API.


## Requisitos Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
| RF-001 | A API deve permitir a criação de um novo usuário. | ALTA |
| RF-002 | A API deve permitir a listagem de todos os usuários. | MÉDIA |
| RF-003 | A API deve permitir a busca de um usuário específico pelo seu ID. | ALTA |
| RF-004 | A API deve permitir a atualização de informações de um usuário. | ALTA |
| RF-005 | A API deve permitir a remoção de um usuário pelo seu ID. | ALTA |
| RF-006 | A API deve permitir a criação de um novo cliente. | ALTA |
| RF-007 | A API deve permitir a listagem de todos os clientes. | MÉDIA |
| RF-008 | A API deve permitir a busca de um cliente específico pelo seu ID. | ALTA |
| RF-009 | A API deve permitir a atualização das informações de um cliente. | MÉDIA |
| RF-010 | A API deve permitir a exclusão de um cliente pelo seu ID. | MÉDIA |
| RF-011 | A API deve permitir a criação de uma nova campanha. | ALTA |
| RF-012 | A API deve permitir a listagem de todas as campanhas. | ALTA |
| RF-013 | A API deve permitir a busca de uma campanha específica pelo seu ID. | MÉDIA |
| RF-014 | A API deve permitir a atualização de uma campanha existente. | ALTA |
| RF-015 | A API deve permitir a remoção de uma campanha pelo seu ID. | ALTA |
| RF-016 | A API deve permitir a criação de um novo plano. | ALTA |
| RF-017 | A API deve permitir a listagem de todos os planos. | ALTA |
| RF-018 | A API deve permitir a busca de um plano específico pelo seu ID. | MÉDIA |
| RF-019 | A API deve permitir a atualização de um plano existente. | ALTA |
| RF-020 | A API deve permitir a exclusão de um plano pelo seu ID. | MÉDIA |
| RF-021 | A API deve permitir a criação de um novo criativo. | ALTA |
| RF-022 | A API deve permitir a listagem de todos os criativos. | ALTA |
| RF-023 | A API deve permitir a busca de um criativo específico pelo seu ID. | ALTA |
| RF-024 | A API deve permitir a atualização de um criativo. | ALTA |
| RF-025 | A API deve permitir a exclusão de um criativo pelo seu ID. | MÉDIA |
| RF-026 | A API deve permitir a criação de um novo registro de pagamento. | ALTA |
| RF-027 | A API deve permitir a listagem de todos os registros de pagamentos. | ALTA |
| RF-028 | A API deve permitir a busca de um registro de pagamento específico pelo seu ID. | ALTA |
| RF-029 | A API deve permitir a atualização de um registro de pagamento. | ALTA |
| RF-030 | A API deve permitir a exclusão de um registro de pagamento pelo seu ID. | ALTA |
| RF-031 | A API deve permitir a criação de novas credenciais. | MÉDIA |
| RF-032 | A API deve permitir a listagem de todas as credenciais. | MÉDIA |
| RF-033 | A API deve permitir a busca de credenciais específicas pelo seu ID. | MÉDIA |
| RF-034 | A API deve permitir a atualização de credenciais. | MÉDIA |
| RF-035 | A API deve permitir a remoção de credenciais pelo seu ID. | MÉDIA |

## Requisitos Não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
| RNF-01 | A API deve utilizar autenticação via tokens JWT. | ALTA | 
| RNF-02 | Todas as comunicações devem ser feitas por HTTPS. | ALTA | 
| RNF-03 | A API deve implementar mecanismos de autorização para proteger os recursos. | ALTA | 
| RNF-04 | A API deve suportar um grande volume de requisições simultâneas. | MÉDIA | 
| RNF-05 | Respostas devem ser dadas em menos de 200 ms para GET e até 500 ms para POST, PATCH, DELETE. | MÉDIA | 
| RNF-06 | Deve utilizar caching para otimizar a resposta de endpoints frequentemente acessados. | MÉDIA | 
| RNF-07 | A API deve ter uma disponibilidade mínima de 99,9%. | MÉDIA | 
| RNF-08 | Deve ser tolerante a falhas, garantindo redundância. | ALTA | 
| RNF-09 | A API deve ter monitoramento em tempo real e gerar logs de erros e acessos detalhados. | MÉDIA | 
| RNF-10 | O código deve seguir boas práticas de desenvolvimento, como padrões RESTful e código limpo. | ALTA | 
| RNF-11 | O sistema deve permitir adições e mudanças sem causar indisponibilidade. | ALTA | 
| RNF-12 | Deve haver ambientes de staging e produção separados. | ALTA | 


## Tecnologias Utilizadas

A API REST desenvolvida em **Node.js**, utilizando o **Firebase** para autenticação e o **Firestore** como banco de dados. A estrutura da API é construída com **Express**, permitindo a definição de endpoints que respondem a requisições HTTP.

Para autenticação, um middleware valida tokens **JWT**, garantindo que apenas usuários autorizados possam acessar os recursos da API. O Firestore, um banco de dados NoSQL do Firebase, é utilizado para armazenar e gerenciar dados em tempo real, a integração com o Firestore é feita através da SDK do Firebase, facilitando operações CRUD.

Além disso, a API é documentada utilizando **Swagger**, o que proporciona uma interface clara e interativa para desenvolvedores que desejam entender e testar os endpoints disponíveis. Essa documentação inclui detalhes sobre as requisições, respostas e códigos de status, facilitando a integração e tornando o desenvolvimento mais ágil.

## API Endpoints

Todo o Back-End foi cuidadosamente documentado com o Swagger, ferramenta utilizada para criar e visualizar APIs de forma interativa. Com ele, é possível inspecionar cada endpoint da aplicação, verificando seus parâmetros de entrada, métodos HTTP (como GET, POST, PATCH e DELETE, que compõem as operações de um sistema CRUD), além das respostas para cenários de sucesso ou erro. Abaixo está o link para a documentação completa, seguido de alguns exemplos de endpoints alguns endpoints.

[Link Da Documentação do Swagger](https://pmv-si-2024-2-pe6-t2-g08-dashboard.onrender.com/api-docs)

### Users
#### Get All Users
- **Método:** GET
- **URL:** `/users`
- **Resposta:**
  - Sucesso (200 OK)
    ```
    {
      "message": "Success",
      "data": [
          {
              id: Lx2gPf5q5fhDoBtAf5j2KCemKkv2
              name: Alan Turing
              email: alan.turing@sga.pucminas.br
              role: Admin
          }
      ]
    }
    ```
  - Erro (400,500)
    ```
    {
      "message": "No Users found",
    }
    ```
#### Get User By Id
- **Método:** GET
- **URL:** `/users/{id}`
- **Resposta:**
  - Sucesso (200 OK)
    ```
    {
      "message": "Success",
      "data": [
          {
              id: Lx2gPf5q5fhDoBtAf5j2KCemKkv2
              name: Alan Turing
              email: alan.turing@sga.pucminas.br
              role: Admin
          }
      ]
    }
    ```
  - Erro (400,500)
    ```
    {
      "message": "No Users found",
    }
    ```

#### Create Users
- **Método:** POST
- **URL:** `/users`
- **Parâmetros:**
    ```javascript
      {
          id //Id do usuário
          name //Nome do usuário
          email //Email do usuário
          role //Regra de acesso do usuário
      }
    ```
- **Resposta:**
  - Sucesso (200 OK)
    ```
    {
      "message": "Success",
      "data": [
          {
              id: Lx2gPf5q5fhDoBtAf5j2KCemKkv2
              name: Alan Turing
              email: alan.turing@sga.pucminas.br
              role: Admin
          }
      ]
    }
    ```
  - Erro (400,500)
    ```
    {
      "message": "Body is empty, cannot update the user.",
    }
    ```

#### Update User
- **Método:** PATCH
- **URL:** `/users/{id}`
- **Parâmetros:**
    ```javascript
      {
          name //Nome do usuário
          email //Email do usuário
          role //Regra de acesso do usuário
      }
    ```
- **Resposta:**
  - Sucesso (200 OK)
    ```
    {
      "message": "user updated successfully",
    }
    ```
  - Erro (400,500)
    ```
    {
      "message": "Body is empty, cannot update the user.",
    }
    ```

#### Remove User
- **Método:** DELETE
- **URL:** `/users/{id}`
- **Resposta:**
  - Sucesso (200 OK)
    ```
    {
      "message": "The user was deleted",
    }
    ```
  - Erro (400,500)
    ```
    {
      "message": "The user was not found.",
    }
    ```

## Considerações de Segurança

A segurança da API utilizando Firebase e JWT protege dados e garante acesso apenas a usuários autorizados. O Firebase oferece um sistema de autenticação robusto, suportando opções como email/senha e autenticação social, emitindo um token de autenticação após o login. Esse token é utilizado no formato JWT.

Um middleware na API valida o token JWT em requisições que exigem autenticação, permitindo o acesso apenas se o token for válido. Além de verificar a autenticidade, a API pode checar as permissões do usuário, assegurando que cada um tenha acesso apenas aos recursos apropriados. A comunicação é feita via HTTPS, protegendo os dados transmitidos, e os tokens possuem um tempo de expiração, exigindo que o usuário se autentique novamente após esse período.

## Implantação

A implantação da API em um ambiente de produção na plataforma de nuvem [Render](https://render.com/) é um processo eficiente e direto. Para começar, a aplicação deve ser empacotada, garantindo que todas as dependências estejam corretamente configuradas no arquivo de configuração package.json. Após isso, é feita a conexão com o repositório no GitHub, permitindo que o Render faça o deploy automaticamente.

Na plataforma Render, é necessário criar um novo serviço, escolhendo a opção de "Web Service" e configurando a fonte como o repositório Git. Os requisitos mínimos para a execução da API são de 1 CPU e 512 MB de RAM, o que é suficiente para lidar com um volume moderado de requisições. É fundamental definir as variáveis de ambiente, como as credenciais do Firebase, para garantir que a aplicação funcione corretamente em produção.

Uma vez configurado, Render irá construir e implantar a aplicação automaticamente. Após a implantação, a API ficará acessível por meio de uma URL fornecida pela plataforma, permitindo sua utilização.

[Link Da API em Produção](https://pmv-si-2024-2-pe6-t2-g08-dashboard.onrender.com)

## Testes
Os testes da API foram realizados para cada endpoint, seguindo a implementação de cada modelo conforme as operações CRUD. Utilizando a extensão Thunder Client, foi possível identificar e corrigir bugs de forma eficiente, além de validar o processo de autenticação e garantir a precisão dos retornos da API. Essa abordagem assegura que todos os endpoints funcionem corretamente e atendam aos requisitos estabelecidos. 

![Interface do Thunder Client](/docs/img/thunder-client-interface.png "Interface do Thunder Client")

O [Thunder Client](https://www.thunderclient.com/) é uma extensão do Visual Studio Code que simplifica o teste de APIs RESTful. Após instalar a extensão, você pode criar novas requisições, selecionando o método HTTP (GET, POST, PUT, DELETE) e inserindo a URL do endpoint desejado. É possível adicionar cabeçalhos, parâmetros de consulta e um corpo para requisições que exigem dados.

![Teste de requisição da Lista de Usuários](/docs/img/example-request-user-list.png "Teste de requisição da Lista de Usuários")


# Referências

> - [Swagger Documentation](https://swagger.io/docs/specification/v3_0/about/)
> - [Firebase References](https://firebase.google.com/docs?hl=pt-br)
> - [Firestore References](https://firebase.google.com/docs/firestore?hl=pt-br)
> - [Express JS Guides](https://expressjs.com/)
> - [JWT Introduction](https://jwt.io/introduction)
> - [Render Quickstarts](https://docs.render.com/)

![Gráfico de contribuições do Projeto](/docs/img/contributors-graphs.png "Gráfico de contribuições do Projeto")