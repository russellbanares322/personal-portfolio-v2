import React, { useContext, useState } from "react";
import { projectsData } from "../../data/ProjectsData";
import { HiOutlineExternalLink, HiChevronRight } from "react-icons/hi";
import { RxGithubLogo } from "react-icons/rx";
import { PageContext } from "../../context/PageContext";
import Modal from "../../global/modal/Modal";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const { isDarkMode, projectsRef } = useContext(PageContext);
  const [showProjectDetailsModal, setShowProjectDetailsModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (selectedProjectData) => {
    setSelectedProject(selectedProjectData);
    setShowProjectDetailsModal(true);
  };
  const handleCloseModal = () => {
    setSelectedProject(null);
    setShowProjectDetailsModal(false);
  };

  return (
    <>
      <div ref={projectsRef} className="page-padding page-padding-top">
        <p
          data-aos="fade-right"
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } section-title`}
        >
          Projects
        </p>
        <div className="mt-16 flex justify-center items-center flex-wrap gap-8">
          {projectsData?.map((project) => (
            <div className="w-[30rem] h-[30rem] mb-5 md:mb-10" key={project.id}>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  onClick={() => handleOpenModal(project)}
                  className="duration-300 object-cover rounded-lg cursor-pointer hover:scale-[1.1]"
                  src={project.thumbnail_image}
                />
              </div>
              <div
                data-aos="fade-right"
                className="flex items-center gap-[1rem] w-full mt-5"
              >
                <p className="font-bold text-gray-300 text-[1.3rem] md:text-[1.5rem] w-auto md:min-w-max">
                  {project.title}
                </p>
                <div className="w-full h-[1px] opacity-[0.3] bg-white" />
                <div className="flex items-center gap-2">
                  <a target="_blank" href={project.source_code}>
                    <RxGithubLogo
                      className="text-gray-300 cursor-pointer hover:text-white"
                      size={28}
                    />
                  </a>
                  <a target="_blank" href={project.live_link}>
                    <HiOutlineExternalLink
                      className="text-gray-300 cursor-pointer hover:text-white"
                      size={30}
                    />
                  </a>
                </div>
              </div>
              <div data-aos="fade-right" className="my-1">
                <p className="text-yellow font-light">
                  {project.technologiesUsed.join(" - ")}
                </p>
              </div>
              <div data-aos="fade-right" className="my-1 w-fit overflow-hidden">
                <p className="text-white text-lg font-light">
                  {project.details}
                  <span
                    onClick={() => handleOpenModal(project)}
                    className="flex gap-1 items-center text-[1rem] text-yellow cursor-pointer hover:underline"
                  >
                    Learn more <HiChevronRight />
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal open={showProjectDetailsModal} onClose={handleCloseModal}>
        <ProjectDetails selectedProject={selectedProject} />
      </Modal>
    </>
  );
};

export default Projects;
