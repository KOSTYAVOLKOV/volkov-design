import { useEffect } from "react";

import MainSkin from "src/layouts/main-skin";
import Intro5 from "src/components/Intro5";
import AboutUs8 from "src/components/About-Us8";
import Portfolio3 from "src/components/Portfolio3";
import Process2 from "src/components/Process2";
import Services6 from "src/components/Services6";
import Blogs5 from "src/components/Blogs5";
import Home6 from "./home";


export default function Home({ id }) {
  useEffect(() => {
    document.querySelector("body").classList.add("index2");
  }, []);

  return (
    
    <Home6/>
  );
}
