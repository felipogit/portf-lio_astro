import { useState } from "react";
import { Modal } from "./Modal";

import bartolomeuImg from "/public/bartolomeu.png";
import ecommerceImg from "/public/ecommerce.png";
import burgerShopImg from "/public/burger-shop.png";
import checkoutImg from "/public/checkout.png";
import fashionstoreImg from "/public/fashionstore.png";

interface Project {
    name: string;
    description: string;
    link: string;
    img: string;
}

export const Projects = () => {

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const projects: Project[] = [
        {
            name: "Bartolomeu Lima - Advocacia",
            description: `Esse foi meu primeiro trabalho profissional, onde fui contratado para desenvolver um site completo para
        um advogado. Um site com varias páginas, cada tema uma pagina completa com informações sobre o tema e um FAQ personalizado, 
        para que o cliente possa saber mais sobre o tema. Adiconei um botão de whatsapp para que o cliente possa entrar em contato, 
        um botão que dispara um alerta para que o cliente possa entrar em contato com o advogado. Menu responsivo para que o cliente
        possa acessar as páginas de qualquer tela. Site mostrado no google com técnicas de SEO. Nesse trabalho eu utilizei React,
        Typescript, Styled Components, react-router-dom, react-icons, react-helmet-async e react-scroll. `,
            link: "https://res.cloudinary.com/dsq93mfak/image/upload/v1716920854/bartolomeu_tgx1se.png",
            img: "public/bartolomeu.png",
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
        },
        {
            name: "Fashion Store",
            description: ` Uma aplicação de e-commerce onde o usuario pode escolher seus produtos e adicionar ao carrinho, selecionar o item
        para ver mais detalhes, também criamos um painei de administrador para que o administrador possa adicionar novos produtos, remover produtos.
        Esse foi um Projeto que fiz em equipe para aprender a trabahar em equipe, tive a experiencia de trabalhar em equipe e aprender como trabalhar
        com metodologia ágil como o Scrum, também aprendemos a trabalhar com gitflow para organizar nosso projeto. Utilizamaos React, Styled Components e TypeScript, 
        Zode, React-Toastify e React-Hooks-Form para validação dos dados.`,
            link: "https://fashion-online-store-group2.vercel.app/",
            img: "https://res-console.cloudinary.com/dsq93mfak/media_explorer_thumbnails/73f905ed5800132680864bc8ac1d60db/detailed",
        },
    ];


    const openModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <div className="flex flex-col items-center max-w-8xl mx-auto mt-20 gap-5 px-4">
            <h2 className="text-5xl">Projetos</h2>
            <div>
                <ul className="flex flex-wrap justify-center gap-20 w-full mt-10 ">
                    {projects.map((project) => (
                        <li key={project.name} className="flex flex-col gap-3">
                            <a
                                href="#"
                                onClick={() => openModal(project)} 
                                className="text-xl font-medium flex flex-col gap-3 hover:scale-110 duration-300"
                            >
                                <h2>{project.name}</h2>
                                <img
                                    src={project.img}
                                    alt={project.name}
                                    className="w-full xl:w-[33rem]"
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            
            <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                {selectedProject && (
                    <>
                        <div className="lg:flex justify-between gap-5 ">
                            <div>
                                <img className="w-[50rem]" src={selectedProject.img} alt={selectedProject.name} />
                            </div>
                            <div className="lg:flex flex-col w-full max-w-[40rem]">
                                <h2 className="text-2xl font-bold">{selectedProject.name}</h2>
                                <p className="mt-4">{selectedProject.description}</p>
                            <button
                                onClick={() => setIsModalOpen(false)} 
                                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Fechar
                            </button>
                            </div>

                        </div>
                        <div className="flex items-center gap-5 ">
                            <a className="mt-4 bg-red-500 text-white px-4 py-2 rounded" href={selectedProject.link} target="_blank">
                                Acessar projeto
                            </a>
                            <a className="mt-4 bg-red-500 text-white px-4 py-2 rounded" href="">
                                Acessar repositório
                            </a>

                        </div>
                    </>
                )}
            </Modal>
        </div>
    );

}
