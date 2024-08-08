import React from "react";
import React from "react";
import WorkHeader from "../../components/Work-header";
import { WorkTwoColumn } from "../../components/Work-Two-Column";
import MainSkin from "src/layouts/main-skin";

const WorksVolkov = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainSkin>
      <WorkHeader
        title={{
          first: "Work Volkov",
          second: "Let us help you create a space you’ll love to live in.",
        }}
        // title = "Volkov",
        content="Our team of expert interior designers is dedicated to transforming your space into a masterpiece that reflects your unique style and personality. Whether you’re looking to revamp your home, office, or commercial space, we provide personalized design solutions that cater to your needs. "
      />
      <WorkTwoColumn />
    </MainSkin>
  );

};

export default WorksVolkov;
