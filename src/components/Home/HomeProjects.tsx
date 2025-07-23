"use client";
import React, { useState } from "react";
import HomeProjectImage from "./HomeProjectImage";
import { homeProjectsDesktop } from "@/utils/clientsHomeDesktop";
import Modal from "../General UI/Modal";
import Image from "next/image";

const HomeProjects = () => {
  const [selectedProject, setSelectedProject] = useState<null | {
    imageLink: string;
    alt: string;
    text?: string;
  }>();
  return (
    <div className="hidden gap-5 md:grid grid-cols-3 mt-8 mx-10">
      {homeProjectsDesktop.map((proj) => (
        <HomeProjectImage
          imageLink={proj.imageLink}
          size={proj.size as "normal" | "large" | "tall" | "half"}
          alt={proj.alt}
          premio={proj.premio as "amco" | "muse" | "wina"}
          key={proj.id}
          onClick={() => setSelectedProject(proj)}
        />
      ))}

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <>
            <h2 className="text-xl font-semibold mb-4 uppercase">
              {selectedProject.alt}
            </h2>
            <div className="relative w-full max-w-md h-[50vh] mx-auto mb-4">
              <Image
                src={selectedProject.imageLink}
                alt={selectedProject.alt}
                fill
                className="rounded-lg object-contain"
                sizes="(max-width: 768px) 90vw, 400px"
              />
            </div>
            <p>algun texto lorem....</p>
            <p>{selectedProject?.text}</p>
          </>
        )}
      </Modal>
    </div>
  );
};

export default HomeProjects;
