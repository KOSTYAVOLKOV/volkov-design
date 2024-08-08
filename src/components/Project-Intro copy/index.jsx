import React from "react";
import Link from "next/link";

const ProjectIntro = () => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>introduction</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            <div className="text">
              <p>
              The renovation of an 80 m² apartment in Amsterdam Zuid included:<p/>
	•	Heating: Installed a new energy-efficient system. <p/>
	•	Electricity: Completely replaced wiring and outlets. <p/>
	•	Doors: Installed luxurious, sound-insulating doors. <p/>
	•	Flooring: Laid natural parquet flooring. <p/>
	•	Windows: Installed modern double-glazed windows. <p/>

The result is a comfortable and stylish apartment with updated systems and elegant interiors.
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                Bob Ganiev
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>May 2023 - October 2023</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
                <Link href="#">Renovation </Link>,
                <Link href="#">Residential</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                <Link href="#">Modernism</Link> , <Link href="#">Appartment</Link> ,
                <Link href="#">Design</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;
