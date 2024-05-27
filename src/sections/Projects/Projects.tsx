import React, { useContext, useState } from "react";
import { projectsData } from "../../../data/ProjectsData";
import { HiOutlineExternalLink, HiChevronRight } from "react-icons/hi";
import { RxGithubLogo } from "react-icons/rx";
import { PageContext } from "../../../context/PageContext";
import Modal from "../../../global/modal/Modal";
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
      <div
        ref={projectsRef}
        className="max-w-[1640px] w-full page-padding-x page-padding-top mx-auto"
      >
        <p
          data-aos="fade-right"
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } section-title`}
        >
          Projects
        </p>
        <div className="mt-16 grid grid-cols md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
          {projectsData?.map((project, index) => (
            <div
              className={`max-w-[1640px] h-full ${
                index !== projectsData.length - 1 && "mb-5"
              }  md:mb-10`}
              key={project.id}
            >
              <div
                data-aos="zoom-in"
                className="relative overflow-hidden rounded-lg"
              >
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
                <p
                  className={`font-bold ${
                    isDarkMode ? "text-gray-300" : "text-blue"
                  } text-[1.3rem] md:text-[1.5rem] w-auto md:min-w-max`}
                >
                  {project.title}
                </p>
                <div
                  className={`w-full h-[1px] opacity-[0.3] ${
                    isDarkMode ? "bg-white" : "bg-blue"
                  }`}
                />
                <div className="flex items-center gap-2">
                  <a target="_blank" href={project.source_code}>
                    <RxGithubLogo
                      className={`${
                        isDarkMode
                          ? "text-gray-300 hover:text-white"
                          : "text-blue hover:text-light-blue"
                      } cursor-pointer text-[1.63rem] md:text-[2rem]`}
                    />
                  </a>
                  <a target="_blank" href={project.live_link}>
                    <HiOutlineExternalLink
                      className={`${
                        isDarkMode
                          ? "text-gray-300 hover:text-white"
                          : "text-blue hover:text-light-blue"
                      } cursor-pointer text-[1.8rem] md:text-[2rem]`}
                    />
                  </a>
                </div>
              </div>
              <div data-aos="fade-right" className="my-1">
                <p className="text-yellow font-light text-md">
                  {project.technologiesUsed.join(" - ")}
                </p>
              </div>
              <div data-aos="fade-right" className="my-3 w-fit overflow-hidden">
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-blue"
                  } text-md md:text-lg font-light`}
                >
                  {project.details}
                  <span
                    onClick={() => handleOpenModal(project)}
                    className="flex gap-1 items-center text-sm py-1 md:text-[1rem] text-yellow cursor-pointer hover:underline"
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
