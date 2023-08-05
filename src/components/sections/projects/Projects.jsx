import React, { useContext, useState, useRef } from "react";
import { projectsData } from "../../../data/ProjectsData";
import { HiOutlineExternalLink, HiChevronRight } from "react-icons/hi";
import { RxGithubLogo } from "react-icons/rx";
import { PageContext } from "../../../context/PageContext";
import Modal from "../../../global/modal/Modal";
import ProjectDetails from "./ProjectDetails";
import { useTransform, useScroll, motion } from "framer-motion";

const Projects = () => {
  const { isDarkMode, projectsRef } = useContext(PageContext);
  const [showProjectDetailsModal, setShowProjectDetailsModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectImagesRef = useRef();
  const { scrollYProgress } = useScroll({
    target: projectImagesRef,
    offset: ["0 1", "0.4 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
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
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } section-title`}
        >
          Projects
        </p>
        <motion.div
          ref={projectImagesRef}
          className="mt-16 flex justify-center items-center flex-wrap gap-8"
        >
          {projectsData?.map((project, index) => (
            <div
              className={`w-[30rem] h-[30rem] ${
                index !== projectsData.length - 1 && "mb-5"
              }  md:mb-10`}
              key={project.id}
            >
              <motion.div
                style={{
                  opacity: scrollYProgress,
                  scale: scaleProgress,
                }}
                className="relative overflow-hidden rounded-lg"
              >
                <img
                  onClick={() => handleOpenModal(project)}
                  className="duration-300 object-cover rounded-lg cursor-pointer hover:scale-[1.1]"
                  src={project.thumbnail_image}
                />
              </motion.div>
              <div className="flex items-center gap-[1rem] w-full mt-5">
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
              <div className="my-1">
                <p className="text-yellow font-light text-sm md:text-md">
                  {project.technologiesUsed.join(" - ")}
                </p>
              </div>
              <div className="my-3 w-fit overflow-hidden">
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
        </motion.div>
      </div>
      <Modal open={showProjectDetailsModal} onClose={handleCloseModal}>
        <ProjectDetails selectedProject={selectedProject} />
      </Modal>
    </>
  );
};

export default Projects;
