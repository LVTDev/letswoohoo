"use client";
// import React, { useState } from "react";
import HomeProjectImage from "./HomeProjectImage";
import { homeProjectsDesktop } from "@/utils/clientsHomeDesktop";
// import Modal from "../General UI/Modal";
// import Image from "next/image";

const HomeProjects = () => {
  // const [selectedProject, setSelectedProject] = useState<null | {
  //   imageLink: string;
  //   alt: string;
  //   text?: string;
  //   fullImage?: string;
  //   videoLink?: string;
  //   descriptionENG?: string;
  //   descriptionESP?: string;
  //     isImage?: boolean;
  // isVideo?: boolean;
  // }>();
  return (
    <div className=" gap-5 grid grid-cols-3 mt-8 w-[85vw]   mx-auto ">
      {homeProjectsDesktop.map((proj) => (
        <HomeProjectImage
          imageLink={proj.imageLink}
          alt={proj.alt}
          premio={proj.premio as "amco" | "muse" | "wina"}
          key={proj.id}
          // onClick={() => setSelectedProject(proj)}
          onClick={() =>{}}
          videoLink={proj.videoLink}
          isImage={proj.isImage}
          isVideo={proj.isVideo}
          full={proj.full}
          hasLink={proj.hasLink}
          campana={proj.campana!}
          tags={proj.tags!}
        />
      ))}

      {/* <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="h-[80vh] overflow-auto">
            <div className="relative w-full max-w-md h-[30vh] mx-auto mb-4">
              <Image
                src={selectedProject.fullImage || selectedProject.imageLink}
                alt={selectedProject.alt}
                fill
                className="rounded-lg object-contain"
                sizes="(max-width: 768px) 90vw, 400px"
              />
            </div>
            {selectedProject.videoLink && (
              <div className="mx-auto w-max">
                <video width="320" height="240" controls>
                  <source src={selectedProject.videoLink} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <p className="font-albert my-6">{selectedProject?.descriptionENG}</p>
            <p>{selectedProject?.descriptionESP}</p>
          </div>
        )}
      </Modal> */}
    </div>
  );
};

export default HomeProjects;
