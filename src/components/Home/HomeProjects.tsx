"use client";
import { useState } from "react";
import { listOfClients } from "../Clients/ClientList";
import HomeProjectImage from "./HomeProjectImage";
import { homeProjectsDesktop } from "@/utils/clientsHomeDesktop";
import Modal from "../General UI/Modal";
import Image from "next/image";

const HomeProjects = () => {
  const [selectedProject, setSelectedProject] = useState<
    | ((typeof homeProjectsDesktop)[number] & {
        popupContent?: React.JSX.Element;
      })
    | null
  >(null);

  const getClientPopupContent = (clientName?: string) =>
    listOfClients.find((c) => c.name === clientName)?.popupContent;
  console.log(homeProjectsDesktop);

  return (
    <div className="gap-5 grid grid-cols-3 mt-8 w-[85vw] mx-auto">
      {homeProjectsDesktop.map((proj) => {
        const popupContent = getClientPopupContent(proj.clientName);
        return (
          <HomeProjectImage
            imageLink={proj.imageLink}
            alt={proj.alt}
            premio={proj.premio as "amco" | "muse" | "wina"}
            key={proj.id}
            onClick={() =>
              popupContent &&
              setSelectedProject({
                ...proj,
                popupContent,
              })
            }
            videoLink={proj.videoLink}
            isImage={proj.isImage}
            isVideo={proj.isVideo}
            full={proj.full}
            hasLink={proj.hasLink}
            campana={proj.campana!}
            tags={proj.tags!}
            sizes={proj.sizes!}
            popupContent={popupContent!}
          />
        );
      })}

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="h-[80vh] overflow-auto">
            {selectedProject.imageLink && (
              <div className="relative w-full max-w-md h-[30vh] mx-auto mb-4">
                <Image
                  src={selectedProject.imageLink}
                  alt={selectedProject.alt}
                  fill
                  className="rounded-lg object-contain"
                  sizes="(max-width: 768px) 90vw, 400px"
                />
              </div>
            )}
            {selectedProject.videoLink && (
              <div className="mx-auto w-max">
                <video width="320" height="240" controls>
                  <source src={selectedProject.videoLink} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            {selectedProject.popupContent ? (
              <div className="font-albert my-6">
                {selectedProject.popupContent}
              </div>
            ) : (
              <p className="font-albert my-6 text-gray-500">
                No description available for this client yet.
              </p>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default HomeProjects;
