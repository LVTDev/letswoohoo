'use client'
import React, { useState } from "react";
import HomeProjectImage from "./HomeProjectImage";
import { homeProjectsDesktop } from "@/utils/clientsHomeDesktop";
import Modal from "../General UI/Modal";

const HomeProjects = () => {
  const [selectedProject, setSelectedProject] = useState<null | {
    imageLink: string;
    alt: string;
    text?: string;
  }>();
  return (
    <div className="hidden gap-5 md:grid grid-cols-3 mt-8">
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

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <>
            <h2 className="text-xl font-semibold mb-4">{selectedProject.alt}</h2>
            <img
              src={selectedProject.imageLink}
              alt={selectedProject.alt}
              className="mx-auto rounded-lg mb-4 max-h-[80vh]"
            />
            <p>algun texto lorem....</p>
            <p>{selectedProject?.text}</p>
          </>
        )}
      </Modal>
    </div>
  );
};

export default HomeProjects;
