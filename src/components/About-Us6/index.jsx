/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const AboutUs6 = () => {
  return (
    <section className="about-us section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign md-mb50">
            <div className="mb-50">
              <h6 className="fw-100 text-u ls10 main-color mb-10">About Us</h6>
              <h3 className="fw-600 text-u ls1 mb-30">From Idea to Reality</h3>
              <p>
              Your vision is brought to life by our in-house team of professionals. We manage the full construction/renovation process from concept, budgeting and purchasing of materials to lighting, heating and furniture installation. Our pool of suppliers, vendors and manufacturers provide us with discounts which allow significant budget cuts. 
              </p>
              <Link href="/about">
                <a className="btn-curve btn-bord btn-lit mt-30">
                  <span>Read More</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 img">
            <img src="/assets/img/bedroom1.jpg" alt="" />
            <div className="stauts">
              <div className="item">
                <h4>
                  40<span></span> +
                </h4>
                <h6>Happy Clients</h6>
              </div>
              <div className="item">
                <h4>
                  50<span></span> +
                </h4>
                <h6>Success Projects</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs6;
