import React, { useContext, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { projectsData } from "../../data/ProjectsData";
import { HiOutlineExternalLink, HiChevronRight } from "react-icons/hi";
import { RxGithubLogo } from "react-icons/rx";
import { PageContext } from "../../context/PageContext";
import Modal from "../../global/modal/Modal";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);
  const { isDarkMode, projectsRef } = useContext(PageContext);
  const [showProjectDetailsModal, setShowProjectDetailsModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const onShowProjectDetails = (selectedProjectId) => {
    setHoveredProjectId(selectedProjectId);
  };

  const onHideProjectDetails = () => {
    setHoveredProjectId(null);
  };

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
      <div ref={projectsRef} className="page-padding">
        <p
          data-aos="fade-right"
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } section-title`}
        >
          Projects
        </p>
        <div className="mt-16">
          <Splide
            options={{
              perPage: 3,
              gap: 20,
              pagination: false,
              breakpoints: {
                640: {
                  perPage: 1,
                  gap: 10,
                },
                767: {
                  perPage: 2,
                  gap: 15,
                },
                1024: {
                  perPage: 2,
                  gap: 15,
                },
              },
            }}
          >
            {projectsData.map((project) => {
              const showProjectDetails = hoveredProjectId === project.id;
              return (
                <SplideSlide data-aos="fade-up" key={project.id}>
                  <div
                    onMouseLeave={onHideProjectDetails}
                    onMouseEnter={() => onShowProjectDetails(project.id)}
                    className="bg-whitesmoke relative overflow-hidden"
                  >
                    <img
                      className="object-contain"
                      src={project.thumbnail_image}
                    />
                    <div className="absolute h-[4.5rem] w-full bg-black/40 flex justify-center items-center -bottom-10" />
                    <div
                      className={`absolute h-full w-full opacity-0 bg-black/70 flex justify-center items-center -bottom-0 duration-500 ease-in-out ${
                        showProjectDetails && "opacity-100"
                      }`}
                    />
                    <div
                      className={` ${
                        showProjectDetails
                          ? "bottom-0 opacity-100 bg-whitesmoke text-blue"
                          : "-bottom-36 bg-opacity-30 bg-light-blue text-yellow"
                      } h-44 absolute transition-all duration-500 ease-in-out border-l-4 border-l-yellow`}
                    >
                      <div className="flex justify-between items-center px-2 pt-2">
                        <p className="text-[0.9rem] md:text-md opacity-100 text-yellow">
                          {project.title}
                        </p>
                        <div className="flex gap-2">
                          <a target="_blank" href={project.source_code}>
                            <RxGithubLogo
                              title="Source code"
                              className="text-xl cursor-pointer  text-blue hover:text-yellow duration-500 ease-in-out"
                            />
                          </a>
                          <a target="_blank" href={project.live_link}>
                            <HiOutlineExternalLink
                              title="Live link"
                              className="text-xl cursor-pointer  text-blue hover:text-yellow duration-500 ease-in-out"
                            />
                          </a>
                        </div>
                      </div>
                      <p className="px-2 pt-1 text-[0.75rem] md:text-[0.8rem] text-blue font-semibold">
                        {project.technologiesUsed.join(" - ")}
                      </p>
                      <p className="px-2 pt-3 text-[0.85rem] md:text-sm text-blue">
                        {project.details}
                        <span
                          onClick={() => handleOpenModal(project)}
                          className="flex pt-[0.1rem] items-center text-yellow cursor-pointer hover:underline"
                        >
                          Learn more <HiChevronRight />
                        </span>
                      </p>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
      <Modal open={showProjectDetailsModal} onClose={handleCloseModal}>
        <ProjectDetails selectedProject={selectedProject} />
      </Modal>
    </>
  );
};

export default Projects;
