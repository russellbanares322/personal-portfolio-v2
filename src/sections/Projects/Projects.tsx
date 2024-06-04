import { useState } from "react";
import { HiOutlineExternalLink, HiChevronRight } from "react-icons/hi";
import { RxGithubLogo } from "react-icons/rx";
import ProjectDetails from "./ProjectDetails";
import { TProjectsData, projectsData } from "../../data/projectsData";
import { usePageContext } from "../../context/PageContext";
import { Modal } from "../../components";
import { twMerge } from "tailwind-merge";

const Projects = () => {
  const { isDarkMode, projectsRef } = usePageContext();
  const [showProjectDetailsModal, setShowProjectDetailsModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<TProjectsData | null>(
    null
  );
  const projectsDataLength = projectsData.length;
  const iconStyleClassName = isDarkMode
    ? "text-gray-300 hover:text-white"
    : "text-blue hover:text-light-blue";

  const handleOpenModal = (selectedProjectData: TProjectsData) => {
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
          className={twMerge(
            isDarkMode ? "text-white" : "text-black",
            "section-title"
          )}
        >
          Projects
        </p>
        <div className="mt-16 grid grid-cols md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
          {projectsData?.map((project, index) => (
            <div
              className={twMerge(
                index !== projectsDataLength - 1 && "mb-5",
                "max-w-[1640px] h-full md:mb-10"
              )}
              key={project.id}
            >
              <div
                data-aos="zoom-in"
                className="relative overflow-hidden rounded-lg"
              >
                <img
                  onClick={() => handleOpenModal(project)}
                  className="duration-300 object-cover rounded-lg cursor-pointer hover:scale-[1.1]"
                  src={project.thumbnail}
                />
              </div>
              <div
                data-aos="fade-right"
                className="flex items-center gap-[1rem] w-full mt-5"
              >
                <p
                  className={twMerge(
                    isDarkMode ? "text-gray-300" : "text-blue",
                    "font-bold text-[1.3rem] md:text-[1.5rem] w-auto md:min-w-max"
                  )}
                >
                  {project.title}
                </p>
                <div
                  className={twMerge(
                    isDarkMode ? "bg-white" : "bg-blue",
                    "w-full h-[1px] opacity-[0.3]"
                  )}
                />
                <div className="flex items-center gap-2">
                  <a target="_blank" href={project.sourceCode}>
                    <RxGithubLogo
                      className={twMerge(
                        iconStyleClassName,
                        "cursor-pointer text-[1.63rem] md:text-[2rem]"
                      )}
                    />
                  </a>
                  <a target="_blank" href={project.liveLink}>
                    <HiOutlineExternalLink
                      className={twMerge(
                        iconStyleClassName,
                        "cursor-pointer text-[1.8rem] md:text-[2rem]"
                      )}
                    />
                  </a>
                </div>
              </div>
              <div data-aos="fade-right" className="my-1">
                <p className="text-yellow font-light text-md">
                  {project.technologies.join(" - ")}
                </p>
              </div>
              <div data-aos="fade-right" className="my-3 w-fit overflow-hidden">
                <p
                  className={twMerge(
                    isDarkMode ? "text-gray-300" : "text-blue",
                    "text-md md:text-lg font-light"
                  )}
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
