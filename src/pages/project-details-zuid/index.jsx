/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import ProjectIntro from "../../components/Project-Intro";
import NextProject from "../../components/Next-Project";
import ProjectVideo from "../../components/Project-Video";
import MainSkin from "src/layouts/main-skin";
import AfterBefore from "src/components/After-Before";

import Portfolio1 from "src/components/Portfolio1";
import Testimonials1 from "src/components/Testimonials1";
import ModalVideo from "react-modal-video";
import Slider from "react-slick";
import Testimonials2 from "src/components/Testimonials2";
import VolkovSlider from "src/components/VolkovSlider/VolkovSlider";
import data from '../../data/volkov-works-slide.json'
import data2 from '../../data/volkov/volkov-works-slide2.json'

const ProjectDetails = () => {

  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  const [isSliderShow, setIsSliderShow] = useState(false)


  return (
    <MainSkin>
      <PageHeader
        title="Zuid"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "portfolio", url: "/work1" },
          { id: 3, name: "project details", url: "/project-details-zuid" },
        ]}
        image="/assets/img/portfolio/project2/bg.jpg"
      />
      <AfterBefore></AfterBefore>

      <ProjectIntro />

      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            <a href="#" className="col-lg-4 col-xl-3 col-md-12">
              <img alt="" src="/assets/img/portfolio/project2/1.jpg" />
            </a>
            <a href="/work1" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/img/portfolio/project2/2.jpg" />
            </a>
            <a href="/work1" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/img/portfolio/project2/6.jpg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-12">
              <img alt="" src="/assets/img/portfolio/project2/3.jpg" />
            </a>
          </div>


        </div>
      </section>
  

      <ProjectVideo />
    

      <NextProject />
    </MainSkin>
  );
};

export default ProjectDetails;
