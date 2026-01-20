import { services } from "../data/services";
import ServiceItem from "./ServiceItem.jsx";
import SectionTitle from "../sectionTitle/SectionTitle.jsx";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation";
import "./Services.css";

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container flex-center">
        <SectionTitle title="Services" subTitle="Services" />
        <div className="services-wrapper">
          <motion.h3
            className="services-description"
            custom={1}
            variants={slideInVariants("top", 0.7, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            What I provide
          </motion.h3>
          <ul className="services-list">
            <ServiceItem services={services} />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
