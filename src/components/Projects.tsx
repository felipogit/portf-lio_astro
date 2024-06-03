import { useState } from "react";
import { Modal } from "./Modal";
import { CardProject } from "./CardProject";
import { projects, type Project } from "./projectsMock";


export const Projects = () => {

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <div className="flex flex-col items-center max-w-8xl mx-auto mt-20 gap-5 px-4">
            <h2 className="text-5xl">Projetos</h2>
            <div>
                <ul className="flex flex-wrap justify-center gap-20 w-full mt-10">
                    {projects.map((project) => (
                        <CardProject
                            key={project.name}
                            name={project.name}
                            description={project.description}
                            link={project.link}
                            img={project.img}
                            onClick={() => openModal(project)}
                        />
                    ))}
                </ul>
            </div>

            <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                {selectedProject && (
                    <CardProject
                        name={selectedProject.name}
                        description={selectedProject.description}
                        link={selectedProject.link}
                        img={selectedProject.img}
                        isModal={true}
                    />
                )}
            </Modal>
        </div>
    );


}
