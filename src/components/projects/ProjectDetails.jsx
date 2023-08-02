import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { RxGithubLogo } from "react-icons/rx";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const ProjectDetails = ({ selectedProject }) => {
  return (
    <>
      <img
        className="rounded-tr-lg rounded-tl-lg"
        src={selectedProject?.thumbnail_image}
      />
      <div className="px-5 pt-5">
        <h1 className="text-white text-[1.5rem] md:text-[2rem] font-bold">
          {selectedProject?.title}
        </h1>
        <p className="text-sm md:text-md text-yellow">
          {selectedProject?.technologiesUsed.join(" - ")}
        </p>
        <p className="my-5 text-white text-sm md:text-md">
          {selectedProject?.details}
        </p>
        <div>
          <h3 className="text-white text-[1.5rem] font-bold mb-2">
            Project images<span className="text-yellow">.</span>
          </h3>
          <Splide
            options={{
              perPage: 1,
              height: 500,
              arrows: false,
              breakpoints: {
                640: {
                  height: 300,
                },
                767: {
                  height: 300,
                },
                1024: {
                  height: 500,
                },
              },
            }}
          >
            {selectedProject?.images.map((image) => (
              <SplideSlide key={image.src}>
                <img
                  alt="project-images"
                  className="rounded-tr-lg rounded-tl-lg object-contain "
                  src={image.src}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <h3 className="text-white text-[1.5rem] font-bold mt-2">
          Project links<span className="text-yellow">.</span>
        </h3>
        <div className="flex gap-3 text-yellow mt-2">
          <a
            href={selectedProject?.source_code}
            target="_blank"
            className="text-sm md:text-md flex items-center gap-1 hover:underline"
          >
            <RxGithubLogo size={17} /> source code
          </a>
          <a
            href={selectedProject?.live_link}
            target="_blank"
            className="text-sm md:text-md flex items-center gap-1 hover:underline"
          >
            <HiOutlineExternalLink size={17} /> live project
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
