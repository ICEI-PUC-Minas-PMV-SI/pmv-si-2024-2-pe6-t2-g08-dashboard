# Front-end Web

Este web app ajuda a gerenciar clientes e campanhas de maneira centralizada e prática. Ele permite o cadastro de clientes com informações detalhadas e o acompanhamento de campanhas, incluindo objetivos, orçamento e cronogramas. Com um painel de relatórios, a equipe pode visualizar o desempenho das campanhas, enquanto o sistema de comunicação integrado facilita aprovações e feedbacks diretamente na plataforma. Além disso, a aplicação organiza tarefas e equipes, promovendo uma gestão eficiente e melhorando a produtividade ao manter todas as informações acessíveis em um só lugar.

## Tecnologias Utilizadas
O web app seria desenvolvido com React em JavaScript, uma biblioteca que facilita a criação de interfaces. Para lidar com as requisições à API, Axios seria utilizado, simplificando o processo de comunicação entre o frontend e o backend, garantindo maior flexibilidade e controle nas chamadas HTTP. No design dos componentes, Material UI seria a base, oferecendo uma interface moderna e consistente com componentes prontos e personalizáveis, o que ajudaria a acelerar o desenvolvimento e garantir uma ótima experiência para o usuário.

## Arquitetura

A arquitetura MVC para este web app em React organizaria o código em três camadas: Model, View e Controller. A camada Model gerenciaria o estado dos dados e as interações com a API, usando hooks para lidar com o estado e os efeitos das requisições de dados. Na camada Controller, providers de contexto seriam usados para gerenciar e distribuir o estado global e as funções principais para os componentes, permitindo que toda a aplicação acesse dados compartilhados de forma centralizada. Por fim, a camada View seria composta por componentes React que renderizam a interface do usuário, onde os hooks de estado e as funções dos providers atualizariam a interface dinamicamente conforme as interações. Essa estrutura permite que cada parte do app tenha responsabilidades específicas, melhorando a organização e a manutenibilidade do código.

## Modelagem da Aplicação
A modelagem desta aplicação focaria em organizar os dados essenciais para gerenciar clientes, planos, usuários e campanhas de forma integrada. Cada cliente teria um perfil com informações básicas, como nome, contato e histórico de campanhas. Os planos representariam os diferentes pacotes de serviços oferecidos, detalhando tipos de ações e limites de campanhas, e estariam associados aos clientes para personalizar suas estratégias. Os usuários da plataforma seriam os responsáveis pela criação e gerenciamento das campanhas, podendo ter diferentes níveis de acesso conforme suas funções. As campanhas incluiriam detalhes como objetivos, orçamento e cronograma, sendo vinculadas tanto aos clientes quanto aos planos para facilitar o controle e o acompanhamento de resultados. Essa estrutura de dados permite um fluxo claro de informações, integrando clientes, planos de serviço, usuários da equipe e campanhas de forma coesa e eficiente.

## Projeto da Interface Web
A interface web deste projeto apresentaria uma visão geral organizada, onde uma tabela exibe informações essenciais dos clientes e usuários, como nome, contato e status, facilitando a gestão rápida. Além disso, gráficos dinâmicos visualizam dados das campanhas, mostrando métricas de desempenho, como alcance, engajamento e conversões, para ajudar na análise de resultados de forma intuitiva. Essa combinação de tabela e gráficos oferece uma experiência completa, permitindo que o usuário acompanhe os detalhes dos clientes e o progresso das campanhas em uma única interface clara e funcional.

### Design Visual
O design da aplicação, inspirado no Google Material, usa o tema dark para uma experiência visual moderna e confortável, especialmente em ambientes com pouca luz. A tipografia com a fonte Roboto traz legibilidade e elegância à interface, enquanto o tema escuro, com tons de cinza e azul, oferece contraste ideal para os elementos visuais. Componentes como botões, cards e tabelas seguem o estilo Material, com espaçamento bem definido, sombras sutis e animações suaves para proporcionar uma interação intuitiva e agradável. Esse design combina funcionalidade com um visual sofisticado, garantindo consistência e uma navegação fluida para o usuário.

### Layout Responsivo
o web app, o layout responsivo garante que a interface funcione perfeitamente em diferentes dispositivos e tamanhos de tela. Em desktops, os usuários visualizam as informações em um layout de múltiplas colunas, onde tabelas com dados de clientes e gráficos de desempenho das campanhas estão facilmente acessíveis. Essa configuração permite uma análise abrangente das informações sem a necessidade de rolagem excessiva. Quando acessado em tablets, o design se ajusta para manter a legibilidade, com colunas reduzidas e menus organizados para acesso rápido às funcionalidades. Em smartphones, o layout se transforma em uma única coluna, otimizando o espaço e permitindo que os usuários acessem facilmente as tabelas e gráficos em um formato compacto. Os menus se tornam ícones expansíveis, facilitando a navegação em uma tela menor. Essa abordagem responsiva assegura que todos os usuários, independentemente do dispositivo, tenham uma experiência fluida e intuitiva ao gerenciar clientes, planos e campanhas.

## Fluxo de Dados

No fluxo de dados da web app, a interação do usuário começa na interface, onde ele pode realizar ações como visualizar clientes, criar campanhas ou consultar relatórios. Quando o usuário solicita essas informações, a aplicação envia uma requisição para a REST API. A API, por sua vez, processa essa requisição, acessando o banco de dados para obter os dados necessários. Uma vez que a API recupera as informações, ela as envia de volta para a aplicação em formato JSON.

A aplicação então atualiza a interface do usuário com os dados recebidos, apresentando tabelas, gráficos ou mensagens de sucesso, dependendo da ação realizada. Se o usuário decidir modificar ou adicionar dados, como criar um novo cliente ou atualizar uma campanha, a aplicação enviará outra requisição para a API com as informações necessárias. A API executará a ação correspondente no banco de dados e retornará uma confirmação de sucesso ou erro. Esse ciclo contínuo de requisições e respostas permite que a aplicação seja interativa e responsiva, proporcionando uma experiência fluida e dinâmica para o usuário.

## Requisitos Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
| RF-001 | A Aplicação deve permitir a criação de um novo usuário. | ALTA |
| RF-002 | A Aplicação deve permitir a listagem de todos os usuários. | MÉDIA |
| RF-003 | A Aplicação deve permitir a busca de um usuário específico. | ALTA |
| RF-004 | A Aplicação deve permitir a atualização de informações de um usuário. | ALTA |
| RF-005 | A Aplicação deve permitir a remoção de um usuário. | ALTA |
| RF-006 | A Aplicação deve permitir a criação de um novo cliente. | ALTA |
| RF-007 | A Aplicação deve permitir a listagem de todos os clientes. | MÉDIA |
| RF-008 | A Aplicação deve permitir a busca de um cliente específico. | ALTA |
| RF-009 | A Aplicação deve permitir a atualização das informações de um cliente. | MÉDIA |
| RF-010 | A Aplicação deve permitir a exclusão de um cliente. | MÉDIA |
| RF-011 | A Aplicação deve permitir a criação de uma nova campanha. | ALTA |
| RF-012 | A Aplicação deve permitir a listagem de todas as campanhas. | ALTA |
| RF-013 | A Aplicação deve permitir a busca de uma campanha específica. | MÉDIA |
| RF-014 | A Aplicação deve permitir a atualização de uma campanha existente. | ALTA |
| RF-015 | A Aplicação deve permitir a remoção de uma campanha. | ALTA |
| RF-016 | A Aplicação deve permitir a criação de um novo plano. | ALTA |
| RF-017 | A Aplicação deve permitir a listagem de todos os planos. | ALTA |
| RF-018 | A Aplicação deve permitir a busca de um plano específico. | MÉDIA |
| RF-019 | A Aplicação deve permitir a atualização de um plano existente. | ALTA |
| RF-020 | A Aplicação deve permitir a exclusão de um plano. | MÉDIA |
| RF-021 | A Aplicação deve permitir a criação de um novo criativo. | ALTA |
| RF-022 | A Aplicação deve permitir a listagem de todos os criativos. | ALTA |
| RF-023 | A Aplicação deve permitir a busca de um criativo específico. | ALTA |
| RF-024 | A Aplicação deve permitir a atualização de um criativo. | ALTA |
| RF-025 | A Aplicação deve permitir a exclusão de um criativo. | MÉDIA |
| RF-026 | A Aplicação deve permitir a criação de um novo registro de pagamento. | ALTA |
| RF-027 | A Aplicação deve permitir a listagem de todos os registros de pagamentos. | ALTA |
| RF-028 | A Aplicação deve permitir a busca de um registro de pagamento específico. | ALTA |
| RF-029 | A Aplicação deve permitir a atualização de um registro de pagamento. | ALTA |
| RF-030 | A Aplicação deve permitir a exclusão de um registro de pagamento. | ALTA |
| RF-031 | A Aplicação deve permitir a criação de novas credenciais. | MÉDIA |
| RF-032 | A Aplicação deve permitir a listagem de todas as credenciais. | MÉDIA |
| RF-033 | A Aplicação deve permitir a busca de credenciais específicas. | MÉDIA |
| RF-034 | A Aplicação deve permitir a atualização de credenciais. | MÉDIA |
| RF-035 | A Aplicação deve permitir a remoção de credenciais. | MÉDIA |

## Requisitos Não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
| RNF-01 | A Aplicação deve utilizar autenticação via tokens JWT. | ALTA | 
| RNF-02 | Todas as comunicações devem ser feitas por HTTPS. | ALTA | 
| RNF-03 | A Aplicação deve implementar mecanismos de autorização para proteger os recursos. | ALTA | 
| RNF-04 | A Aplicação deve suportar um grande volume de requisições simultâneas. | MÉDIA | 
| RNF-05 | Respostas devem ser dadas em menos de 200 ms para GET e até 500 ms para POST, PATCH, DELETE. | MÉDIA | 
| RNF-06 | Deve utilizar caching para otimizar a resposta de endpoints frequentemente acessados. | MÉDIA | 
| RNF-07 | A Aplicação deve ter uma disponibilidade mínima de 99,9%. | MÉDIA | 
| RNF-08 | Deve ser tolerante a falhas, garantindo redundância. | ALTA | 
| RNF-09 | A Aplicação deve ter monitoramento em tempo real e gerar logs de erros e acessos detalhados. | MÉDIA | 
| RNF-10 | O código deve seguir boas práticas de desenvolvimento, como padrões RESTful e código limpo. | ALTA | 
| RNF-11 | O sistema deve permitir adições e mudanças sem causar indisponibilidade. | ALTA | 
| RNF-12 | Deve haver ambientes de staging e produção separados. | ALTA | 


## Considerações de Segurança

[Discuta as considerações de segurança relevantes para a aplicação distribuída, como autenticação, autorização, proteção contra ataques, etc.]


## Implantação

A implantação da Aplicação em um ambiente de produção na plataforma de nuvem [Render](https://render.com/) é um processo eficiente e direto. Para começar, a aplicação deve ser empacotada, garantindo que todas as dependências estejam corretamente configuradas no arquivo de configuração package.json. Após isso, é feita a conexão com o repositório no GitHub, permitindo que o Render faça o deploy automaticamente.

Na plataforma Render, é necessário criar um novo serviço, escolhendo a opção de "Web Service" e configurando a fonte como o repositório Git. Os requisitos mínimos para a execução da API são de 1 CPU e 512 MB de RAM, o que é suficiente para lidar com um volume moderado de requisições. É fundamental definir as variáveis de ambiente, como as credenciais do Firebase, para garantir que a aplicação funcione corretamente em produção.

Uma vez configurado, Render irá construir e implantar a aplicação automaticamente. Após a implantação, a Aplicação ficará acessível por meio de uma URL fornecida pela plataforma, permitindo sua utilização.

[Link Da Aplicação em Produção](https://pmv-si-2024-2-pe6-t2-g08-dashboard.onrender.com)

## Testes

[Descreva a estratégia de teste, incluindo os tipos de teste a serem realizados (unitários, integração, carga, etc.) e as ferramentas a serem utilizadas.]

1. Crie casos de teste para cobrir todos os requisitos funcionais e não funcionais da aplicação.
2. Implemente testes unitários para testar unidades individuais de código, como funções e classes.
3. Realize testes de integração para verificar a interação correta entre os componentes da aplicação.
4. Execute testes de carga para avaliar o desempenho da aplicação sob carga significativa.
5. Utilize ferramentas de teste adequadas, como frameworks de teste e ferramentas de automação de teste, para agilizar o processo de teste.

# Referências

> - [Material UI](https://mui.com/material-ui/)
> - [React](https://react.dev/)
> - [JWT Introduction](https://jwt.io/introduction)
> - [Render Quickstarts](https://docs.render.com/)

