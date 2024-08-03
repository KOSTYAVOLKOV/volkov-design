import React from "react";
import PageHeader from "../../components/Page-header";
import ContactInfo from "../../components/Contact-info";
import ContactWithMap from "../../components/Contact-with-map";
import MainLayout from "../../layouts/main";
import MainSkin from "src/layouts/main-skin";
import PricingTable from "src/components/Pricing-Table";
import Process from "src/components/Process";
import ScrollToTop from "src/components/scrollToTop";
import Brands from "src/components/Brands";
import Footer from "src/components/Footer";
import Portfolio1 from "src/components/Portfolio1";

const Contact = () => {
   React.useEffect(() => {
     document.querySelector("body").classList.add("index3");
   }, []);
  return (
    <MainSkin>
      <PageHeader
        title="Contact Us"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "contact us", url: "/contact" },
        ]}
        image="/assets/img/pg2.jpg"
      />
      <section className="contact">
        <ContactInfo />
        <PricingTable></PricingTable>
       

        <ContactWithMap />
      

      </section>
    </MainSkin>
  );
};

export default Contact;
