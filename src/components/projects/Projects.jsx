import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { projectsData } from "../../data/ProjectsData";
import { HiOutlineExternalLink, HiOutlineCode } from "react-icons/hi";

const Projects = () => {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const onShowProjectDetails = (selectedProjectId) => {
    setHoveredProjectId(selectedProjectId);
  };

  const onHideProjectDetails = () => {
    setHoveredProjectId(null);
  };
  return (
    <div className="page-padding">
      <p className="section-title">Projects</p>
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
              <SplideSlide key={project.id}>
                <div
                  onMouseLeave={onHideProjectDetails}
                  onMouseEnter={() => onShowProjectDetails(project.id)}
                  className="bg-whitesmoke relative overflow-hidden"
                >
                  <img
                    className={`object-contain transition duration-500 ease-in-out shadow-md inset-0 ${
                      showProjectDetails && "blur-[0.1rem]"
                    }`}
                    src={project.thumbnail_image}
                  />
                  <div
                    className={` ${
                      showProjectDetails
                        ? "bottom-0 opacity-100 bg-whitesmoke text-blue"
                        : "-bottom-28 bg-opacity-30 bg-light-blue text-light-yellow"
                    }  h-36 absolute transition-all duration-500 ease-in-out border-l-4 border-l-yellow`}
                  >
                    <div className="flex justify-between items-center px-2 pt-2">
                      <p className="font-bold text-[0.9rem] md:text-md opacity-100">
                        {project.title}
                      </p>
                      <div className="flex gap-2">
                        <a target="_blank" href={project.live_link}>
                          <HiOutlineExternalLink
                            title="Live link"
                            className="text-xl cursor-pointer  text-blue hover:text-yellow duration-500 ease-in-out"
                          />
                        </a>
                        <a target="_blank" href={project.source_code}>
                          <HiOutlineCode
                            title="Source code"
                            className="text-xl cursor-pointer  text-blue hover:text-yellow duration-500 ease-in-out"
                          />
                        </a>
                      </div>
                    </div>
                    <p className="px-2 pt-1 text-[0.8rem] md:text-sm">
                      {project.details}
                    </p>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Projects;
