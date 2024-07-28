import React from "react";
import Split from "../Split";
import Link from 'next/link'

const Intro5 = () => {
  return (
    <header
      className="header bg-img valign"
      style={{ backgroundImage: "url(/assets/img/slid/x1.jpg)" }}
      data-overlay-dark="7"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="caption hmone">
              <Split>
                <h1 data-splitting className="words chars splitting">
                  <Link href="#">Efficient &amp; Ergonomic Design</Link>
                  <div className="bord"></div>
                </h1>
              </Split>
              <p className="mt-10">
              Our core philosophy is creating stylish designs  <br /> 
              which suit your family’s everyday needs and last in time.     
          
              </p>
              <Link href="/project-details-hilversum">
                <a className="btn-curve btn-bord btn-lit mt-30">
                  <span>Read More</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Intro5;
