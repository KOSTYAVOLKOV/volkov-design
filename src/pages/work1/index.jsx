/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";
import MainSkin from "src/layouts/main-skin";

const Work1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainSkin>
      <WorkHeader
        title={{
          first: "Discover the art of interior design with us today.",
          second: "Let us help you create a space you’ll love to live in.",
        }}
        // title = "text",
        content="Our team of expert interior designers is dedicated to transforming your space into a masterpiece that reflects your unique style and personality. Whether you’re looking to revamp your home, office, or commercial space, we provide personalized design solutions that cater to your needs. "
      />
      <WorkTwoColumn />
    </MainSkin>
  );
};

export default Work1;
