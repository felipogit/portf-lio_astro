
export interface Project {
    name: string;
    description: string;
    link: string;
    img: string;
    repository?: string;
}


export const projects: Project[] = [
    {
        name: "Bartolomeu Lima - Advocacia",
        description: `Esse foi meu primeiro trabalho profissional, onde fui contratado para desenvolver um site completo para
    um advogado. Um site com varias páginas, cada tema uma pagina completa com informações sobre o tema e um FAQ personalizado, 
    para que o cliente possa saber mais sobre o tema. Adiconei um botão de whatsapp para que o cliente possa entrar em contato, 
    um botão que dispara um alerta para que o cliente possa entrar em contato com o advogado. Menu responsivo para que o cliente
    possa acessar as páginas de qualquer tela. Site mostrado no google com técnicas de SEO. Nesse trabalho eu utilizei React,
    Typescript, Styled Components, react-router-dom, react-icons, react-helmet-async e react-scroll. `,
        link: "https://www.bartolomeulima.com.br",
        img: "https://res.cloudinary.com/dsq93mfak/image/upload/v1716920854/bartolomeu_tgx1se.png",

    },
    {
        name: "E-commerce Weartake",
        description: `Esse é um dos meus primeiros projetos que fiz em JavaScript, é um projeto
        desenvolvido com javassript vanilla, onde tudo é feito com dados mocados e renderizados na tela.
        Criei um carrinho de compras, um botão para adicionar e remover itens. Também adicionei uma barra
        de pesquisa, tudo que entra no carrido é somado e subtraido do valor total. A aplicação foi desenvolvida
        com JavaScript, HTML e CSS.`,
        link: "https://ecommerce-roan-kappa.vercel.app/",
        img: "https://res.cloudinary.com/dsq93mfak/image/upload/v1716920854/ecommerce_oy3qyb.png",
        repository: "",
    },

    {
        name: "Burger-Shop",
        description: `Uma Hambugueria onde você pode escolher seus produtos
    e adicionar ao carrinho, remover produtos, pesquisar na barra de pesquisa 
    pelo seu produto preferido. Utilizei a API da Kenzie Acadêmy apra reenderizar os produtos na tela.
    Criei um modal para o carrinho de compras e useu algumas bibliotecas para mostrar quando o produto
    for adicionado no carrinho.
    A aplicação foi feita com React, TypeScript, Styled Components e React-Toastify.`,
        link: "https://hamburger-shop-coral.vercel.app/",
        img: "https://res.cloudinary.com/dsq93mfak/image/upload/v1716920854/burger_shop_jzawe7.png",
        repository: "https://github.com/felipogit/Hamburger-shop",
    },

    {
        name: "Pagina de Checkout",
        description: `Uma pagina de checkout onde o usuario pode fazer checkout para uma viagem, nessa aplicação,
    o usuario pode escolher as datas de ida e volva, adicionar a quantidade de pessoas, adulto ou crianças,
    nome completo e email. Nessa aplicação temos verificações no formulaário para garantir que o usuario envie os dados
    obrigatorios e criei um modal para que apareça uma mensagem de confirmação do checkout. Para o desenvolvimento, utilizei o 
    Figma para criar o layout da aplicação, React, Styled Components, 
    TypeScript e Zod para validação dos dados.`,
        link: "https://front-end-checkout.vercel.app/",
        img: "https://res.cloudinary.com/dsq93mfak/image/upload/v1716920853/checkout_n2ngxg.png",
        repository: "https://github.com/felipogit/front-end-checkout",
    },
    {
        name: "Fashion Store",
        description: ` Uma aplicação de e-commerce onde o usuario pode escolher seus produtos e adicionar ao carrinho, selecionar o item
    para ver mais detalhes, também criamos um painei de administrador para que o administrador possa adicionar novos produtos, remover produtos.
    Esse foi um Projeto que fiz em equipe para aprender a trabahar em equipe, tive a experiencia de trabalhar em equipe e aprender como trabalhar
    com metodologia ágil como o Scrum, também aprendemos a trabalhar com gitflow para organizar nosso projeto. Utilizamaos React, Styled Components e TypeScript, 
    Zode, React-Toastify e React-Hooks-Form para validação dos dados.`,
        link: "https://fashion-online-store-group2.vercel.app/",
        img: "https://res.cloudinary.com/dsq93mfak/image/upload/v1716920854/fashionstore_dsxwui.png",
        repository: "https://github.com/felipogit/FashionStore",
    },
    {
        name: "Locadora de Filmes",
        description: `Microsserviço de Gerenciamento de Filmes
        Desenvolvi um microsserviço em TypeScript para gerenciar a coleção de filmes de uma plataforma de streaming, utilizando PostgreSQL como banco de dados. Este projeto foi criado para atender a uma demanda específica de um cliente exigente, seguindo um conjunto rigoroso de regras de negócios.

        Tecnologias Utilizadas
        Linguagem: TypeScript
        Banco de Dados: PostgreSQL
        Framework: Express.js
        Funcionalidades do Microsserviço
        Criação de Filmes.`,
        link: "https://github.com/felipogit/M4-s2-movies",
        img: "https://res.cloudinary.com/dsq93mfak/image/upload/v1717435613/Locadora_mspmvk.png",
    },
    {
        name: "User e Courses + Permissão de Administrador",
        description: `API de Controle de Usuários e Cursos com Autenticação e Permissões
        Descrição do Projeto
        Este projeto é uma API desenvolvida para gerenciar usuários e cursos, com controle de acessos e permissões. O MVP (Minimum Viable Product) foi implementado para permitir que usuários sejam cadastrados, façam login, se inscrevam em cursos e gerenciem suas inscrições, com funcionalidades de administração restritas a usuários com permissões especiais. A API foi desenvolvida em TypeScript e utiliza um banco de dados PostgreSQL para armazenamento de dados.
        
        Tecnologias Utilizadas
        TypeScript: Linguagem de programação utilizada para garantir maior segurança e robustez no código.
        PostgreSQL: Banco de dados relacional utilizado para armazenar informações sobre usuários e cursos.
        Node.js: Plataforma utilizada para a construção do servidor da API.
        Express: Framework web utilizado para a construção das rotas e middleware da API.
        JWT (JSON Web Token): Utilizado para a autenticação e autorização de usuários.
        Zod: Biblioteca para validação e serialização de dados de entrada e saída.
        Funcionalidades
        Gerenciamento de Usuários
        Cadastro de Usuário: Permite o cadastro de novos usuários, com armazenamento seguro das senhas em formato de hash.
        Autenticação de Usuário: Geração de token JWT para autenticação e acesso seguro à API.
        Listagem de Usuários: Permite a listagem de todos os usuários cadastrados, acessível apenas para administradores.
        Gerenciamento de Cursos
        Cadastro de Curso: Administradores podem criar novos cursos, especificando nome e descrição.
        Listagem de Cursos: Permite listar todos os cursos disponíveis.
        Matrícula em Curso: Administradores podem matricular usuários em cursos específicos.
        Desmatrícula em Curso: Administradores podem desativar a matrícula de usuários em cursos.
        Listagem de Usuários em Curso: Permite listar todos os usuários matriculados em um curso específico, acessível apenas para administradores.
        Segurança e Permissões
        Autenticação com JWT: Garantia de que apenas usuários autenticados possam acessar determinados recursos.
        Controle de Permissões: Rotas específicas acessíveis apenas para administradores, garantindo a integridade e segurança dos dados.
        Organização do Projeto
        Estrutura de Diretórios: O projeto segue uma organização clara e estruturada, com diretórios separados para controladores, modelos, serviços e configurações.
        Scripts SQL: Inclui scripts SQL para criação e inserção de tabelas, garantindo a consistência e integridade dos dados no banco de dados.`,
        link: "https://github.com/felipogit/user-and-courses-jwt",
        img: "https://res.cloudinary.com/dsq93mfak/image/upload/v1717436916/curses-users_ji4sdb.png",
    },
    {
        name: "KImóveis - Sistema de Gerenciamento Imobiliário",
        description: `O KImóveis é uma aplicação robusta desenvolvida para otimizar o gerenciamento de imóveis e usuários em uma imobiliária moderna. Com funcionalidades completas para cadastro de imóveis, gerenciamento de usuários, e agendamento de visitas, esta aplicação oferece uma solução eficiente e segura para as necessidades da imobiliária.

        Tecnologias Utilizadas
        
        TypeScript para tipagem estática
        Express.js como framework de backend
        TypeORM para ORM e manipulação de banco de dados
        PostgreSQL como banco de dados
        JWT para autenticação segura
        Zod para validação de dados
        bcryptjs para hashing de senhas
        Principais Funcionalidades
        
        Gestão de Usuários
        
        Criação, listagem e atualização de usuários
        Soft delete para desativação segura de usuários
        Sistema de login com validação e geração de tokens JWT
        Gestão de Categorias
        
        Criação e listagem de categorias de imóveis
        Garantia de unicidade para nomes de categorias
        Gestão de Imóveis
        
        Cadastro detalhado de imóveis
        Listagem de imóveis por categoria
        Verificação de unicidade para endereços de imóveis
        Agendamento de Visitas
        
        Sistema de agendamento com verificação de conflitos de horários
        Restrições para agendamento durante horários comerciais e dias úteis
        Listagem de agendamentos para administradores
        Segurança e Testes
        
        Segurança: Utilização de bcryptjs para segurança das senhas e JWT para autenticação, garantindo acesso seguro aos recursos.
        Testes Automatizados: Implementação de testes automatizados para garantir a integridade e funcionalidade de cada endpoint e operação.
        Conclusão
        
        O KImóveis é uma solução completa e segura para o gerenciamento de imóveis e usuários, destacando-se pela sua eficiência, robustez e facilidade de uso. Este projeto demonstra a aplicação
         de tecnologias modernas e boas práticas de desenvolvimento, sendo um excelente exemplo de backend em TypeScript com TypeORM.`,
        link: "https://github.com/felipogit/kim-veis-typeorm-with-relationships",
        img: "https://res.cloudinary.com/dsq93mfak/image/upload/v1717436917/kmoveis_quikut.png",
    }

];

