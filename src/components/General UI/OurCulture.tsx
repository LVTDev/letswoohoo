"use client";
import React, { useState } from "react";
import Modal from "./Modal";

const OurCulture = () => {
  const [selectedProject, setSelectedProject] = useState<null | {
    imageLink: string;
    text: string;
    title: string;
  }>(null);

  const ourCultureInfo = [
    {
      imageLink:
        "https://cdn.sanity.io/images/5egex671/production/676488691f5b9e05241c859e9e0d2eb483b8c129-476x476.png",
      title: "Event 1",
      text: "Texto Event 1",
    },
    {
      imageLink:
        "https://cdn.sanity.io/images/5egex671/production/09304705fef63876a33255b02832840d1f9a99e7-476x476.png",
      title: "Event 2",
      text: "Texto Event 2",
    },
    {
      imageLink:
        "https://cdn.sanity.io/images/5egex671/production/0fe357b56875813b396a641796ee6f02ac90cdba-476x476.png",
      title: "Event 3",
      text: "Texto Event 3",
    },
  ];

  return (
    <div>
      <div className="flex gap-3 justify-between my-4">
        {ourCultureInfo.map((section, i) => (
          <div className="w-1/3" key={i} onClick={() => setSelectedProject(section)}>
            <img  src={section.imageLink} alt="equipo LVT" />
          </div>
        ))}
      </div>
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="h-[80vh] overflow-auto">
            <img className="max-w-[300px]" src={selectedProject.imageLink} alt="equipo LVT" />

              <p>{selectedProject.title}</p>
              <p>{selectedProject.text}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default OurCulture;
