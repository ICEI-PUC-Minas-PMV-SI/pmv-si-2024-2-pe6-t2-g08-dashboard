# Front-end Móvel
A aplicação móvel da *Classe A Company* é uma solução que permite aos clientes da empresa de marketing monitorar estatísticas detalhadas e o desempenho de suas contas no Instagram. Com funcionalidades para gerenciar campanhas publicitárias, acessar e organizar a agenda de campanhas, capturar imagens e vídeos diretamente pelo aplicativo, além de agendar e acompanhar reuniões, a plataforma oferece uma experiência completa para otimizar estratégias de marketing e fortalecer a conexão entre a empresa e seus clientes.

## Tecnologias Utilizadas
O aplicativo móvel da Classe A Company foi desenvolvido com React Native, uma poderosa framework baseada em JavaScript que permite a criação de aplicativos nativos para Android e iOS a partir de um único código-fonte, garantindo eficiência no desenvolvimento e manutenção.

A interface do usuário foi projetada com a biblioteca React Native Paper, que oferece componentes prontos e estilizados de acordo com o padrão Material Design, proporcionando uma experiência moderna, consistente e acessível. Para lidar com navegação e transições entre telas, foi utilizada a biblioteca React Navigation, amplamente adotada por sua flexibilidade e suporte robusto.

A aplicação também incorpora bibliotecas auxiliares para funcionalidades específicas, como axios para requisições HTTP, Context API para gerenciamento de estado. O design responsivo e as animações fluidas garantem que o aplicativo seja intuitivo e agradável de usar em diferentes dispositivos.

Essa combinação de tecnologias assegura uma solução robusta, escalável e eficiente para atender às necessidades de monitoramento e gestão de marketing digital dos clientes.

## Arquitetura

O front-end do aplicativo móvel da Classe A Company, utilizando JavaScript e uma arquitetura modular que facilita a integração com a REST API do backend. Essa integração é responsável por gerenciar as operações CRUD (Create, Read, Update, Delete) de forma eficiente e segura, conectando os usuários às funcionalidades essenciais do sistema.

Cada interação do aplicativo com o backend é realizada por meio de requisições HTTP enviadas aos endpoints RESTful. A biblioteca axios é utilizada para simplificar as requisições e lidar com respostas, permitindo a troca de dados entre o front-end e o backend. O gerenciamento de estado no aplicativo utiliza o Context API, garantindo que as informações recuperadas da API sejam armazenadas e exibidas em tempo real de forma consistente.

A segurança da comunicação entre o front-end e o backend é garantida por meio de tokens JWT (JSON Web Tokens). Após a autenticação inicial, o token é armazenado de forma segura no dispositivo do usuário, utilizando o AsyncStorage. Esse token é incluído automaticamente nos cabeçalhos das requisições, garantindo que apenas usuários autenticados possam acessar ou modificar os dados.

As operações de CRUD no aplicativo permitem, por exemplo, que os usuários visualizem estatísticas de campanhas, atualizem informações de perfil, criem novas campanhas ou excluam dados obsoletos. Cada operação é mapeada para fluxos de navegação intuitivos, desenvolvidos com React Navigation, assegurando uma experiência fluida e responsiva.

Essa integração entre o front-end em React Native e a API segura baseada em JWT oferece aos usuários uma plataforma confiável e eficiente para gerenciar suas estratégias de marketing digital diretamente no aplicativo.

![Fluxo de Requisições](/docs/img/data-request-flow.jpg "Fluxo de Requisições")

## Modelagem da Aplicação
A modelagem de dados para os modelos User, Client, Campaign, Plans, PostCreative, Payment e SocialCredentials é estruturada de forma a refletir as relações entre eles. O modelo User representa os usuários que podem acessar o sistema, enquanto o modelo Client armazena informações sobre os clientes que estão vinculados a um usuários. Cada Client pode ter várias Campaigns associadas, representando as campanhas de marketing que os pertence.

Além disso, cada Campaign pode ter múltiplos PostCreatives, que são os criativos de postagens usadas nas campanhas. O modelo Payment registra as transações financeiras relacionadas a cada cliente, enquanto SocialCredentials armazena as credenciais sociais necessárias para autenticação em plataformas de mídia social. Assim, a relação entre os modelos é hierárquica, onde um User pode gerenciar um ou Clients ou representar um usuário da empresa, que por sua vez podem estar associados a diversas Campaigns, Payments, PostCreatives e SocialCredentials. Essa estrutura facilita o gerenciamento de dados e as interações entre os diferentes componentes do sistema.

![UML Back-End](/docs/img/uml-database.jpg "UML Back-End")

## Projeto da Interface
O projeto de interface da aplicação em **React Native** utiliza os princípios do **Material Design** como base para criar uma experiência de usuário moderna e funcional, com a biblioteca **React Native Paper** como suporte técnico essencial. Essa biblioteca fornece componentes altamente personalizáveis e otimizados, como botões, cards, modais e listas, todos configurados para atender aos padrões de usabilidade e estética do Material Design.

A arquitetura do front-end foi projetada para garantir modularidade, permitindo o reaproveitamento de componentes e a manutenção eficiente do código. A estilização utiliza temas globais, configurados para gerenciar cores, tipografia e espaçamentos de forma centralizada, garantindo consistência visual em toda a aplicação.

Além disso, a integração nativa da **React Native Paper** com os mecanismos de acessibilidade do sistema operacional aprimora a experiência para usuários com necessidades especiais. A implementação de transições suaves e carregamento dinâmico de componentes garante uma navegação fluida, mesmo em dispositivos com recursos limitados, enquanto o design responsivo permite que a interface se ajuste perfeitamente a diferentes tamanhos de tela.

![Mobile Home Page](/docs/img/mobile-app-home.png "Mobile Home Page")
![Mobile Home Page](/docs/img/mobile-app-login.png "Mobile Home Page")

### Wireframes
O wireframe da aplicação é estruturado com uma arquitetura de navegação híbrida que combina uma **bottom navigation bar** e um **drawer menu**, assegurando uma experiência de usuário fluida e organizada. A **bottom bar**, implementada com **React Navigation Bottom Tabs**, gerencia a navegação principal entre as telas de **Home**, **Calendário**, **Analytics** e **Campanhas**, otimizando o acesso às funcionalidades mais frequentes.

O **drawer menu**, integrado ao **header** da aplicação por meio de **React Navigation Drawer**, permite a navegação para telas secundárias, como **Perfil** e **Configurações**, sem interferir na experiência principal. Para telas específicas derivadas de outras, como a tela de **Criativos** acessada ao selecionar uma campanha na tela de **Campanhas**, utiliza-se uma abordagem baseada em **stack navigation**, garantindo transições rápidas e a preservação do estado entre as telas.

Essa estrutura de navegação hierárquica e modular, combinada com o suporte técnico de bibliotecas robustas, como **React Navigation**, garante uma interface altamente responsiva, escalável e intuitiva, adequada tanto para uso frequente quanto para funcionalidades de nicho.

![Mobile Home Page](/docs/img/mobile-app-creatives.png "Mobile Home Page")
![Mobile Home Page](/docs/img/mobile-app-creatives-aprove.png "Mobile Home Page")

### Design Visual
O design visual da aplicação é fortemente inspirado nos princípios do Material Design, proporcionando uma interface moderna, limpa e altamente funcional. A aplicação oferece suporte a temas Light e Dark, permitindo aos usuários alternar entre uma aparência clara e uma escura, conforme sua preferência ou condições de iluminação, mantendo uma experiência visual consistente em ambas as opções. A escolha de cores segue uma paleta harmoniosa e correlata, com tons suaves e contrastantes que garantem legibilidade e uma navegação confortável, ao mesmo tempo que aderem aos padrões de acessibilidade do Material Design.

A exibição de gráficos diversos é uma parte central da interface, utilizando elementos visuais como gráficos de barras, linhas e tortas para representar estatísticas e dados de forma clara e interativa. Estes gráficos são desenhados para serem facilmente legíveis e dinâmicos, com animações sutis que melhoram a experiência de interação. A utilização de cards para organizar as informações oferece uma forma estruturada de apresentar conteúdos, como campanhas, métricas e notificações, destacando dados importantes de maneira clara e visualmente atraente. Cada card é projetado com bordas arredondadas e sombras suaves, seguindo as diretrizes do Material Design para proporcionar profundidade e separação visual entre os elementos.

O design é focado na usabilidade, com espaçamentos amplos, ícones nítidos e tipografia legível, criando uma interface intuitiva e responsiva em diferentes dispositivos. As transições entre telas e a navegação também são suaves, garantindo que a experiência do usuário seja fluida e agradável, independentemente da configuração visual escolhida.

![Mobile Home Page](/docs/img/mobile-app-wraper.png "Mobile Home Page")
![Mobile Home Page](/docs/img/mobile-app-analytics.png "Mobile Home Page")
![Mobile Home Page](/docs/img/mobile-app-analytics2.png "Mobile Home Page")

### Layout Responsivo
A **responsividade** da aplicação móvel foi projetada para garantir uma experiência consistente e otimizada em diferentes tamanhos de tela e dispositivos, ajustando-se automaticamente ao ambiente do usuário. Utilizando **React Native** e **Flexbox** como principais ferramentas de layout, a interface adapta-se de forma fluida, ajustando a disposição dos elementos com base nas dimensões e orientações da tela (portrait ou landscape).

A estrutura de **layout flexível** permite que os componentes, como **cards**, **gráficos** e botões de navegação, se ajustem proporcionalmente, ocupando o espaço disponível sem comprometer a legibilidade ou a usabilidade. As **fontes** e **ícones** são dimensionados de acordo com o tamanho da tela, utilizando unidades relativas (como **em** ou **rem**), garantindo que o conteúdo permaneça legível em dispositivos maiores e menores.

Além disso, a aplicação implementa **Media Queries** e **platform-specific design** para personalizar a experiência conforme o sistema operacional (iOS ou Android) e as particularidades de cada dispositivo. A utilização do **React Native Paper**, que segue os padrões do **Material Design**, facilita a adaptação dos componentes da interface, já que a biblioteca tem suporte nativo para temas e estilos responsivos.

Para otimizar a navegação, a **bottom bar** e o **drawer menu** são implementados de forma que se ajustem dinamicamente, com a **bottom bar** reorganizando-se para ocultar ou exibir itens conforme o tamanho da tela, e o **drawer** garantindo fácil acesso a telas secundárias sem sobrecarregar a interface.

A experiência visual é testada e ajustada para diferentes densidades de pixels (DPI) e resoluções, assegurando que a aplicação seja igualmente agradável tanto em smartphones de entrada quanto em dispositivos de alta performance, sem perda de qualidade ou funcionalidade. Dessa forma, a aplicação oferece uma navegação ágil, mesmo em dispositivos com recursos limitados, proporcionando uma experiência eficiente e acessível em qualquer cenário.

![Mobile Home Page](/docs/img/mobile-app-calendar.png "Mobile Home Page")
![Mobile Home Page](/docs/img/mobile-app-login.png "Mobile Home Page")


### Interações do Usuário
As interações do usuário na aplicação são projetadas para serem intuitivas e dinâmicas, utilizando animações suaves para melhorar a experiência de navegação e interação. Durante as transições entre telas, como ao mudar da Home para Campanhas, são aplicadas animações de fade e deslizar, proporcionando uma sensação de continuidade e fluidez na navegação.

Ao carregar gráficos e cards, animações progressivas são usadas para revelar os dados de forma gradual, utilizando progress bars ou animadores que aumentam a percepção de desempenho e tornam o carregamento mais agradável. Isso é feito utilizando React Native Animated para implementar efeitos de transição e animação de componentes, como crescimento de gráficos e desvanecimento de cards.

A Splash Screen é exibida inicialmente ao abrir o aplicativo, oferecendo uma introdução visual enquanto o conteúdo principal está sendo carregado. Ela utiliza animações simples e não intrusivas, como fade-in, e desaparece após o carregamento completo da aplicação, preparando o usuário para a interface principal.

Os botões e inputs são projetados para interagir de forma eficiente com touch. Eles são grandes o suficiente para facilitar o toque, com feedback visual, como highlight e elevations, para indicar interatividade. Botões de ação são animados ao toque, oferecendo um efeito de press ou ripple (efeito de onda), enquanto os inputs exibem animações de foco e validação para garantir uma interação clara e satisfatória.

Essas animações e interações são implementadas de forma a proporcionar uma experiência fluida, responsiva e agradável, respeitando o desempenho da aplicação e a usabilidade em dispositivos móveis.

![Mobile Home Page](/docs/img/mobile-app-splash.png "Mobile Home Page")

## Fluxo de Dados

No fluxo de dados do aplicativo móvel, a interação do usuário começa na interface, onde ele pode realizar ações como visualizar estatísticas, criar campanhas ou consultar relatórios. Quando o usuário solicita essas informações, o aplicativo envia uma requisição para a **REST API**. A API, por sua vez, processa a solicitação, acessando o **Firebase Firestore** para recuperar os dados necessários. Uma vez que a API obtém as informações, ela as envia de volta para o aplicativo em formato **JSON**.

A aplicação então atualiza a interface do usuário com os dados recebidos, exibindo **gráficos**, **cards** ou mensagens de sucesso, conforme a ação realizada. Se o usuário decidir modificar ou adicionar dados, como criar uma nova campanha ou atualizar informações de perfil, o aplicativo envia uma nova requisição para a API com as informações necessárias. A API executa a ação correspondente no banco de dados e retorna uma confirmação de sucesso ou erro.

Esse ciclo contínuo de requisições e respostas permite que o aplicativo seja interativo e responsivo, proporcionando uma experiência fluida e dinâmica. A integração com **JWT** garante que apenas usuários autenticados possam realizar alterações, enquanto as animações e transições de tela melhoram a experiência do usuário, tornando o processo de navegação mais intuitivo e agradável.

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

A segurança do aplicativo móvel em **React Native** é garantida através da utilização de **JWT (JSON Web Tokens)** para autenticação e **AsyncStorage** para armazenar as credenciais. Após o login, o usuário envia suas credenciais para o backend, que valida e retorna um **token JWT**. Esse token é então armazenado no **AsyncStorage** para persistência local, permitindo que o usuário permaneça autenticado em sessões subsequentes. Ao fazer requisições ao backend, o token é incluído no cabeçalho das requisições para garantir a autenticidade do usuário. Caso o token expire, o backend responde com um erro de autenticação, e o usuário precisa se reconectar. O aplicativo deve remover o token do AsyncStorage ao fazer logout, garantindo que dados sensíveis não fiquem acessíveis. Para maior segurança, é importante usar **HTTPS** para comunicação e, se possível, soluções mais seguras para o armazenamento de credenciais, como **react-native-keychain**.

## Implantação

Para implantar um aplicativo móvel em **React Native** usando **Expo**, você começa configurando o ambiente de desenvolvimento, instalando o **Expo CLI** e criando o projeto com o comando `expo init`. Durante o desenvolvimento, você pode testar o aplicativo usando o comando `expo start` e visualizá-lo no **Expo Go** em dispositivos Android ou iOS.

Quando o aplicativo estiver pronto, você precisa configurar o arquivo `app.json`, onde define configurações como nome, ícone e versão do app. Para gerar o pacote de instalação para **Android**, use o comando `expo build:android`. O Expo criará o arquivo necessário (APK ou AAB) e fornecerá um link para o download. Para iOS, o processo é semelhante, mas você precisa de uma conta de desenvolvedor da Apple. Com o comando `expo build:ios`, o Expo irá gerar o arquivo **.ipa**, que também será disponibilizado para download.

Após a geração dos pacotes, você pode enviar o arquivo **.apk** ou **.aab** para a **Google Play Console** para o Android, ou o arquivo **.ipa** para a **App Store Connect** para iOS. O Expo facilita esse processo, gerenciando muitas configurações que normalmente requerem ferramentas como **Xcode** ou **Android Studio**.

## Testes

A **testagem** manual da aplicação móvel em **React Native** com **Expo** envolve a verificação de várias funcionalidades essenciais para garantir uma experiência de usuário sem falhas. Primeiramente, o processo de **login** é testado, validando se as credenciais corretas permitem o acesso e se o sistema bloqueia usuários não autenticados, exibindo mensagens de erro apropriadas quando as credenciais são inválidas.

A **navegação entre telas** é testada para garantir que a transição entre seções como **Home**, **Campanhas** e **Analytics** ocorra de forma fluida e sem erros. São feitas verificações em dispositivos físicos e emuladores para garantir que os botões de navegação funcionem corretamente e que as animações entre as telas sejam suaves e sem falhas.

Em relação à **comunicação com o backend**, são realizadas requisições para testar a **conexão** e o retorno das respostas da API. Isso inclui verificar se os dados são recuperados corretamente e apresentados na interface, como gráficos ou tabelas. Além disso, são simulados erros de comunicação, como **timeout** ou **erro 500**, para verificar se o aplicativo lida adequadamente com essas falhas, exibindo mensagens de erro como "Falha na conexão" e mantendo a experiência do usuário sem que o aplicativo falhe ou trave.

Para garantir a **segurança**, é testado se o **JWT** é armazenado corretamente e enviado nas requisições para o backend. Também são verificadas situações de **expiração do token**, para garantir que o usuário seja desconectado ou solicitado a fazer login novamente quando o token expirar.

Esses testes manuais garantem que o aplicativo seja funcional, seguro e forneça uma experiência de uso consistente e sem falhas.

# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
