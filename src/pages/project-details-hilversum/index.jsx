/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import MainSkin from "src/layouts/main-skin";
import PageHeader from "../../components/Page-header";
import ProjectIntro from "../../components/Project-Intro";
import NextProject from "../../components/Next-Project";
import ProjectVideo from "../../components/Project-Video";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const ProjectDetails = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    "/assets/img/portfolio/project1/1.jpg",
    "/assets/img/portfolio/project1/2.jpg",
    "/assets/img/portfolio/project1/4.jpg",
    "/assets/img/portfolio/project1/6.jpg",
    "/assets/img/portfolio/project1/3.jpg",
    "/assets/img/portfolio/project1/8.jpg",
    "/assets/img/portfolio/project1/9.jpg",
  ];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainSkin>
      <PageHeader
        title="Hilversum"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "portfolio", url: "/work1" },
          { id: 3, name: "project details", url: "/project-details-hilversum" },
        ]}
        image="/assets/img/portfolio/project1/bg.jpg"
      />
      <ProjectIntro/>

      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            {images.map((src, index) => (
              <a
                href="#"
                className="col-lg-4 col-xl-3 col-md-6"
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  openLightbox(index);
                }}
              >
                <img alt="" src={src} />
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <ProjectVideo />

      <NextProject />

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}

      <style jsx global>{`
        /* Убедитесь, что Lightbox занимает весь экран */
        .ril__inner {
          height: 100vh !important;
          display: flex !important;
          justify-content: center;
          align-items: center;
        }
        .ril__image {
          max-height: 100vh !important;
          max-width: 100vw !important;
          object-fit: contain !important;
        }
      `}</style>
    </MainSkin>
  );
};

export default ProjectDetails;