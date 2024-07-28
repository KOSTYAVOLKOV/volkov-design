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
              Renovating a two-level house involves a comprehensive transformation that begins with a detailed assessment and planning phase. This renovation includes the complete replacement of all doors and windows to enhance both functionality and aesthetic appeal. The process involves demolition of outdated fixtures, structural modifications, and upgrades to electrical and plumbing systems. Installing new, energy-efficient doors and windows significantly improves the house’s insulation and security. Finally, the renovation is completed with updated interior and exterior finishes, resulting in a modern, refreshed home.
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                Ksenya Kharlamova
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>October 2023 - March 2024</p>
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
                <Link href="#">Cottage</Link> , <Link href="#">House</Link> ,
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
