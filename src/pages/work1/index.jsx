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
          first: "Architecture is a visual art,",
          second: "and the building speak for themeselves",
        }}
        // title = "text",
        content="Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum mi."
      />
      <WorkTwoColumn />
    </MainSkin>
  );
};

export default Work1;
