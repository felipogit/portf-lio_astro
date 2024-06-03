import React from 'react';

interface Project {
    name: string | null;
    description: string | null;
    link: string | null;
    img: string | null;
    onClick?: () => void;
    repository?: string | null;
    isModal?: boolean;

}

export const CardProject = ({ name, description, link, img, onClick, repository, isModal = false }: Project) => {
    return (
        <li className={`flex flex-col gap-3 ${isModal ? 'w-full' : ''}`}>
            {!isModal ? (
                <a
                    href="#"
                    onClick={onClick}
                    className="text-xl font-medium flex flex-col gap-3 hover:scale-110 duration-300"
                >
                    <h2>{name}</h2>
                    <img
                        src={img || ''}
                        alt={name || ''}
                        className="w-full xl:w-[33rem] xl:h-[16rem]"
                    />
                    
                </a>
            ) : (
                <>
                    <div className="lg:flex justify-between gap-5">
                        <div>
                            <img className="w-[50rem]  " src={img || ''} alt={name || ''} />
                        </div>
                        <div className="lg:flex flex-col w-full max-w-[40rem]">
                            <h2 className="text-2xl font-bold">{name}</h2>
                            <p className="mt-4">{description}</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:gap-5 w-full">
                        <a
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto text-center hover:bg-pink-600 dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
                            href={link || '#'} target="_blank"
                        >
                            Acessar projeto
                        </a>
                        <a
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto text-center hover:bg-pink-600 dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
                            href={repository || '#'} target="_blank"
                        >
                            Acessar repositório
                        </a>
                    </div>
                </>
            )}
        </li>
    );
};
