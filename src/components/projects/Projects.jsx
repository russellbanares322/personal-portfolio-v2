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
                perPage: 1,
                gap: 2,
              },
              1024: {
                perPage: 1,
                gap: 3,
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
                  className="bg-whitesmoke"
                >
                  <img
                    className="object-contain transition duration-500 ease-in-out"
                    src={project.thumbnail_image}
                  />
                  <div
                    className={`bg-whitesmoke ${
                      showProjectDetails ? "h-36" : "h-2"
                    } text-blue transition-all  duration-500 ease-in-out border-l-4 border-l-yellow`}
                  >
                    <div className="flex justify-between items-center px-2 pt-3">
                      <p className="font-bold text-md">{project.title}</p>
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
                    <p className="px-2 pt-1 text-sm">{project.details}</p>
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
