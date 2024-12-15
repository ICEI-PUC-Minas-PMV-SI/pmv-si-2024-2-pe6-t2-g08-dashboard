# Introdução

O projeto será feito em parceria com a empresa Classe A Company, uma empresa que atua no ramo do marketing digital, prestando serviços de marketing para outras empresas, ajudando-as a se posicionar com autoridade nas redes sociais. O projeto de sistemas distribuídos irá colaborar com a Classe A criando uma área de integração entre a empresa e os seus clientes, onde será possível que o cliente final tenha acesso a todos os serviços ofertados dentro de uma aplicação web e um aplicativo mobile que irão centralizar as principais informações referentes à determinado cliente, para que ele tenha um acesso rápido e prático. 

## Problema

A aplicação será utilizada principalmente para melhorar a comunicação entre a Classe A e os seus clientes, e consequentemente também irá beneficiar a experiência do cliente. Existem diversos pontos dentro da comunicação com o cliente, que podem ser melhorados, trazendo uma maior assertividade no cumprimento dos serviços prestados. A aprovação de criativos é um dos principais problemas que será solucionado com a aplicação, ajudando ambos os lados a dar celeridade ao processo de aprovação, e tornando a aplicação da estratégia mais assertiva.  

## Objetivos

Desenvolver um sistema distribuído que seja capaz de centralizar todas as informações que o cliente final precisa saber sobre o serviço prestado pela Classe A. Serão utilizadas APIs e Web Services para integrar as informações em tempo real. O sistema será acessível via interface Web e Mobile, permitindo aos clientes consultar as métricas do seu instagram e facebook, aprovar criativos produzidos pela Classe A, consultar datas de pagamentos e de ensaios audiovisuais, assim como vizualizar contratos e prazos de entrega de serviços. A equipe da Classe A também terá ferramentas para gerenciar os acessos dos clientes, deixando tudo apto a ser consultado pelo cliente final. 
 

## Justificativa

A implementação desse sistema é essencial para a modernização e otimização dos processos internos da Classe A e também da comunicação com os seus clientes. O sistema será essencial também para uma melhor experiência do cliente em relação aos serviços contratados, com maior visibilidade sobre o andamento das campanhas, e uma comunicação mais assertiva com a prestadora dos serviços. 

## Público-Alvo

O público-alvo principal deste sistema inclui: 
 
- Clientes da agência de Marketing Classe A Company. 
 
- Equipe administrativa da Classe A. 
 
- Gestores da Classe A e colaboradores que estão diretamente associados à produção dos entregáveis pré-definidos no contrato de serviço.

# Especificações do Projeto

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O aplicativo deve se conectar à API da Meta para buscar dados sobre seguidores, interações, alcance, impressões e outras métricas relevantes.| ALTA | 
|RF-002| O aplicativo deve exibir um painel/dashboard/tabela onde os usuários possam visualizar todas as métricas disponíveis. | ALTA | 
|RF-003| O aplicativo deve permitir a exportação dos dados em formatos como CSV ou PDF, para que os usuários possam analisar os dados fora do aplicativo. | MÉDIA |
|RF-004| O aplicativo deve enviar notificações push para alertar os usuários sobre mudanças significativas nas métricas. | ALTA | 
|RF-005| Deve permitir o gerenciamento de diferentes perfis de usuários, com diferentes níveis de acesso, como administradores e visualizadores.| MÉDIA |
|RF-006| O aplicativo deve oferecer uma seção dedicada ao gerenciamento de campanhas de marketing. | MÉDIA |
|RF-007| Analise quais tipos de conteúdo têm o melhor desempenho em termos de engajamento, ajudando os usuários a ajustar suas estratégias de conteúdo. | ALTA | 
|RF-008| O aplicativo deve calcular e fornecer relatórios sobre o retorno sobre investimento (ROI) de campanhas publicitárias. | ALTA | 
|RF-009| O aplicativo deve ter uma sessão para gerenciamento(aprovação, feedbacks, mudanças) de criativos | ALTA | 



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| As comunicações com a API da Meta devem ser criptografados usando HTTPS. | ALTA | 
|RNF-004| O aplicativo deve implementar medidas de proteção contra ataques de segurança, como injeção de SQL e ataques de força bruta.  |  ALTA | 
|RNF-005| O aplicativo deve ser capaz de lidar com um grande número de usuários simultâneos sem degradação significativa de desempenho. | ALTA | 
|RNF-006| O sistema deve incluir mecanismos de fallback caso a API da Meta esteja temporariamente indisponível.  |  MÉDIA | 
|RNF-007| A interface do usuário deve ser intuitiva, permitindo que os usuários naveguem facilmente entre as diferentes seções. | MÉDIA | 
|RNF-008| O design deve ser responsivo, garantindo uma boa experiência de usuário em diferentes tamanhos de tela. |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O sistema deve integrar-se com a API da Meta para acessar dados sobre métricas de redes sociais. A integração deve seguir as diretrizes da Meta para autenticação OAuth e segurança. Restrições podem ocorrer devido a limitações na API ou alterações nas políticas da Meta. |
|02| A aplicação deve ser acessível tanto via web (principais navegadores) quanto em dispositivos móveis (iOS e Android). A compatibilidade com versões específicas de sistemas operacionais e navegadores pode limitar algumas funcionalidades ou exigir ajustes técnicos. |
|03| O sistema deve garantir tempos de resposta inferiores a 3 segundos para carregamento de métricas e visualização de dados. Restrições de desempenho podem surgir devido ao volume de dados ou complexidade das consultas. |
|04| Todos os dados de autenticação e comunicação com a API da Meta devem ser criptografados usando HTTPS. O sistema deve proteger contra ataques como injeção de SQL e força bruta, e qualquer falha de segurança pode impactar a confidencialidade e integridade dos dados. |
|05| O gerenciamento de usuários e permissões deve ser rigoroso para garantir que cada perfil de usuário veja apenas as informações para as quais tem permissão. Restrições podem surgir na implementação de níveis de acesso e controle de permissões. |
|06| As fases de desenvolvimento, teste e lançamento devem ser concluídas conforme o plano de projeto. Adaptações e mudanças durante o processo podem causar atrasos. |
|07| O sistema deve estar em conformidade com regulamentações de proteção de dados como GDPR e LGPD. A não conformidade pode resultar em penalidades e impactar a operação do sistema. |
|08| A interface deve ser intuitiva e responsiva, mas limitações de design podem ocorrer devido a restrições de tempo ou orçamento. A experiência do usuário deve ser testada e otimizada para diversos dispositivos e tamanhos de tela. |
|09| O sistema deve ser capaz de lidar com o tráfego e a carga previstos, garantindo alta disponibilidade e escalabilidade. Limitações na infraestrutura de servidores podem afetar o desempenho e a capacidade do sistema. |
|10| O sistema deve ser desenvolvido e implementado dentro do prazo estabelecido. As mudanças no cronograma devem ser justificadas e comunicadas de forma adequada. |

Essas restrições são essenciais para a gestão eficiente do projeto e para garantir que o sistema atenda às necessidades da Classe A Company e de seus clientes dentro dos parâmetros estabelecidos.

# Catálogo de Serviços


Este catálogo descreve os serviços e funcionalidades da aplicação desenvolvida para a Classe A marketing digital, com foco em negócios locais. A aplicação foi projetada para centralizar e facilitar o acesso às informações dos serviços contratados, oferecendo uma interface intuitiva e prática para a gestão dessas informações.

1. Área do cliente
Descrição: Interface centralizada onde os clientes podem acessar todas as informações dos serviços contratados, incluindo detalhes sobre campanhas, relatórios, faturas e comunicação com a equipe de suporte.
Quem pode solicitar: Todos os clientes da empresa Classe A.
Como acessar: Através de login seguro na aplicação web ou mobile.
Níveis de qualidade e disponibilidade: Acesso 24/7 com suporte técnico em horário comercial.
Prazo para implementação: Imediato após a criação da conta do cliente.
Custos: Incluso no pacote de serviços contratados.

2. Área de aprovação de criativos
Descrição: Seção dedicada a aprovação de criativos por parte do cliente.
Quem pode solicitar: Todos os clientes da empresa Classe A.
Como acessar: Diretamente na área do cliente.
Níveis de qualidade e disponibilidade: Acesso 24/7 com suporte técnico em horário comercial.
Prazo para implementação: Imediato após a criação da conta do cliente.
Custos: Incluso no pacote de serviços contratados.

3. Gerenciamento de campanhas
Descrição: Ferramenta para visualização e acompanhamento de todas as campanhas de marketing ativas, com relatórios detalhados de desempenho, métricas e KPIs.
Quem pode solicitar: Clientes com campanhas de marketing ativas.
Como acessar: Diretamente na área do cliente.
Níveis de qualidade e disponibilidade: Relatórios atualizados em tempo real, disponíveis 24/7.
Prazo para implementação: Imediato, com relatórios disponíveis assim que as campanhas forem lançadas.
Custos: Incluso no pacote de serviços contratados.

4. Faturas e pagamentos
Descrição: Seção dedicada à gestão de faturas, permitindo que os clientes visualizem o histórico de pagamentos, baixem faturas e realizem pagamentos online.
Quem pode solicitar: Todos os clientes com serviços contratados.
Como acessar: Disponível na área do cliente sob a seção “Faturas e Pagamentos”.
Níveis de qualidade e disponibilidade: Acesso 24/7, com histórico de pagamentos detalhado.
Prazo para implementação: Imediato após a ativação da conta.
Custos: Incluso no pacote de serviços contratados.

5. Suporte e comunicação
Descrição: Canal de comunicação direta com a equipe de suporte, incluindo abertura de tickets, chat em tempo real, e histórico de interações.
Quem pode solicitar: Todos os clientes.
Como acessar: Através da área do cliente, na seção “Suporte”.
Níveis de qualidade e disponibilidade: Suporte em horário comercial, com opção de atendimento prioritário para emergências.
Prazo para implementação: Imediato.
Custos: Incluso no pacote de serviços contratados; atendimento prioritário pode ter custos adicionais.

6. Documentos e contratos
Descrição: Centralização de todos os documentos e contratos relacionados aos serviços contratados, com opção de download e visualização.
Quem pode solicitar: Todos os clientes.
Como acessar: Na área do cliente, seção “Documentos e Contratos”.
Níveis de qualidade e disponibilidade: Acesso 24/7.
Prazo para implementação: Disponível imediatamente após a contratação dos serviços.
Custos: Incluso no pacote de serviços contratados.

7. Notificações e alertas
Descrição: Sistema de notificações para manter os clientes informados sobre atualizações de campanhas, vencimento de faturas, e outras informações relevantes.
Quem pode solicitar: Todos os clientes.
Como acessar: Configurações disponíveis na área do cliente, com notificações enviadas via e-mail ou SMS.
Níveis de qualidade e disponibilidade: Personalizável pelo cliente, disponível 24/7.
Prazo para implementação: Imediato.
Custos: Incluso no pacote de serviços contratados.

Como acessar a aplicação
Os clientes podem acessar a aplicação através de um login seguro na web ou por meio do aplicativo mobile, disponível para downloadatravés de link enviado pela empresa responsável. Após o login, todas as funcionalidades estarão disponíveis conforme os serviços contratados.

Atualizações e suporte
A aplicação é constantemente atualizada para garantir a melhor experiência possível. Qualquer nova funcionalidade ou melhoria será comunicada através da área do cliente e por e-mail.

Este catálogo é um guia completo para entender as funcionalidades oferecidas pela aplicação, garantindo que todas as informações necessárias para a gestão dos serviços contratados estejam sempre acessíveis.

# Arquitetura da Solução

O sistema proposto é uma solução integrada, desenvolvida para gerenciar campanhas e publicações no Instagram, além de monitorar e analisar o impacto dessas ações na rede social. Ele é composto por duas aplicações principais que compartilham o mesmo backend e banco de dados: uma aplicação web voltada para o uso interno da equipe, focada no gerenciamento e monitoramento das campanhas, e uma aplicação mobile, direcionada aos clientes, que permite acompanhar os resultados e impactos das suas campanhas.

A aplicação web, desenvolvida em React, oferece uma interface intuitiva para que a equipe possa criar, validar e monitorar campanhas, bem como analisar o impacto no perfil do cliente no Instagram. A comunicação com o backend ocorre por meio de requisições HTTP, utilizando a biblioteca Axios para consumir os endpoints da API construída com Node.js e Express. O sistema de autenticação utiliza tokens JWT, garantindo acesso seguro e restrito às funcionalidades da aplicação. Uma vez autenticado, o usuário pode criar campanhas, validar processos e acessar relatórios detalhados sobre o desempenho das campanhas.

O backend é responsável por coletar dados diretamente da API do Instagram, extraindo métricas como curtidas, comentários, compartilhamentos e alcance das publicações. Esses dados são processados e organizados, possibilitando o monitoramento em tempo real do impacto da marca do cliente. A aplicação web exibe essas informações em dashboards interativos, com gráficos e análises que auxiliam a equipe a compreender o desempenho do perfil e ajustar as estratégias conforme necessário.

Por outro lado, a aplicação mobile, desenvolvida em React Native, é voltada para os clientes, oferecendo-lhes acesso em tempo real aos dados de desempenho de suas campanhas no Instagram. A aplicação permite monitorar métricas como número de interações, crescimento de seguidores e impacto geral das publicações. Assim como na aplicação web, a comunicação com o backend ocorre via chamadas RESTful protegidas por tokens JWT. O Firebase é utilizado para garantir a sincronização em tempo real dos dados, permitindo que os clientes acessem informações atualizadas sem a necessidade de recarregar a aplicação.

O backend, desenvolvido com Node.js e Express, é o núcleo central da solução. Ele expõe uma série de endpoints RESTful que permitem a execução de operações CRUD para o gerenciamento das campanhas e processamento dos dados do Instagram. A autenticação de usuários é realizada via tokens JWT, garantindo operações seguras após a validação do acesso. Além disso, o backend comunica-se com o Firebase para armazenar e sincronizar as informações das campanhas. Cada vez que uma campanha é atualizada no Instagram, o backend processa as novas métricas e atualiza os dados nas aplicações web e mobile, garantindo que os relatórios sejam sempre precisos.

O sistema de banco de dados utiliza o Firebase, que armazena todas as informações relacionadas às campanhas, usuários e resultados de impacto. O Firebase Authentication gerencia o login dos usuários, tanto para a equipe quanto para os clientes. Além disso, o Firebase assegura a sincronização dos dados entre as aplicações, permitindo que todos tenham acesso às informações mais recentes sobre o desempenho das campanhas.

A integração com a API do Instagram é fundamental para o funcionamento do sistema, permitindo a coleta automatizada de dados sobre as publicações, como curtidas, comentários e alcance. Esses dados são processados pelo backend e exibidos de maneira clara e organizada nas interfaces web e mobile, possibilitando que tanto a equipe quanto os clientes acompanhem o impacto do perfil no Instagram e tomem decisões estratégicas baseadas nos resultados.

Essa arquitetura robusta e escalável assegura uma comunicação eficiente entre todas as partes do sistema, oferecendo uma solução completa para a gestão das campanhas. A combinação das tecnologias escolhidas proporciona à equipe e aos seus clientes um acompanhamento preciso das métricas e a possibilidade de ajustes contínuos nas estratégias.

![Fluxograma da Arquitetura](/docs/img/flowchart-architecture.jpg "Fluxograma da Arquitetura")


## Tecnologias Utilizadas

A arquitetura do sistema utiliza um conjunto de tecnologias, tanto no **frontend** quanto no **backend**, com foco na escalabilidade, desempenho e integração de dados. A seguir, estão as principais tecnologias empregadas.

### 1. **Frontend:**
- **React (Web)**: 
  - É uma biblioteca JavaScript utilizada para a construção de interfaces de usuário dinâmicas e responsivas. Na aplicação web, React é utilizado para construir a interface de gerenciamento de campanhas. Ele oferece uma abordagem baseada em componentes, o que facilita a manutenção, reutilização de código e a criação de interfaces, como dashboards e gráficos, e o **React Hooks** usado para gerenciar o estado global da aplicação.
  
- **React Native (Mobile)**:
  - Permite o desenvolvimento de aplicações móveis nativas para iOS e Android, utilizando a mesma base de código JavaScript do React. React Native é utilizado para criar a aplicação mobile, permitindo que os clientes da empresa acompanhem campanhas. Ele compartilha lógica de negócios com a aplicação web, mas fornece uma experiência nativa e otimizada para dispositivos móveis, com suporte a notificações push e integração direta com APIs nativas de sistema operacional.

### 2. **Backend: Node.js com Express**
- **Node.js**:
  - É uma plataforma de execução JavaScript que permite rodar código no lado do servidor. No sistema, Node.js é responsável por toda a lógica de backend, lidando com requisições HTTP das aplicações frontend, processando dados e se comunicando com serviços externos, como o Firebase e a API do Instagram. Sua arquitetura (event-driven) permite o gerenciamento eficiente de múltiplas conexões simultâneas, ideal para escalabilidade.

- **Express**:
  - É um framework web minimalista para Node.js que facilita a construção de APIs RESTful. Express é utilizado para estruturar as rotas da API e lidar com todas as operações CRUD do sistema, como o gerenciamento de campanhas e a coleta de dados de impacto do Instagram. Ele também é responsável pela implementação de middlewares de autenticação com JWT, garantindo a segurança das requisições.

### 3. **Banco de Dados: Firebase**
- **Firebase**:
  - É uma plataforma desenvolvida pelo Google que oferece um conjunto de ferramentas e serviços voltados para o desenvolvimento de aplicações web e mobile. Ele é utilizado por desenvolvedores para criar aplicações escaláveis e seguras, sem a necessidade de gerenciar toda a infraestrutura de servidores ou bancos de dados.
  - **Firebase Authentication**:
  Um serviço do Firebase que oferece autenticação baseada em email/senha, provedores de login social (Google, Facebook) e autenticação personalizada via tokens JWT. O Firebase Authentication é usado para garantir a segurança do sistema, gerenciando o acesso de usuários. Ele integra-se facilmente ao frontend e backend, permitindo autenticação fluida tanto nas aplicações web quanto mobile.
  - **Firebase Realtime Database ou Firestore**:
  O Firebase oferece dois tipos principais de banco de dados: Realtime Database, que armazena dados em uma estrutura JSON e permite sincronização em tempo real; e Firestore, que oferece um banco de dados NoSQL mais estruturado e flexível. O Firebase armazena todas as informações relacionadas às campanhas e seus resultados. 

### 4. **APIs Externas:**
- **API do Instagram**:
  -  A API do Instagram permite que aplicações interajam com os dados do Instagram, obtendo informações como postagens, curtidas, comentários e outras interações. O backend do sistema, construído em Node.js, utiliza módulo **Axios** para realizar requisições HTTP à API do Instagram. Essas requisições recuperam dados sobre o impacto das campanhas de marketing da empresa, como curtidas, comentários e seguidores ganhos, que são posteriormente processados, armazenados no Firebase e exibidos nas interfaces de usuário.

### 5. **Comunicação e Gerenciamento de Estado**
- **Axios**:
  - Bibliotecas JavaScript para realizar requisições HTTP. Tanto no React quanto no React Native, Axios é utilizado para fazer requisições à API backend, enviando dados, recebendo respostas e lidando com erros. Ele é essencial para a comunicação entre o frontend e o backend.

- **JWT (JSON Web Tokens)**:
  - JWT é um padrão aberto para autenticação que permite que as partes compartilhem informações com segurança. JWT é utilizado para autenticar e autorizar usuários no sistema. Ele garante que apenas usuários autenticados possam acessar os recursos sensíveis, tanto no backend quanto nas interfaces web e mobile.


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
