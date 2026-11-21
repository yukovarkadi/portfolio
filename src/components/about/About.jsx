import "./About.css";
import { aboutImg } from "../../assets/images";
import { FaDownload } from "react-icons/fa";
import SectionTitle from "../sectionTitle/SectionTitle.jsx";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation";
import { profList } from "../data/profList.js";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container flex-center">
        <SectionTitle title="About me" subTitle="About me" />
        <div className="about-wrapper">
          <motion.div
            className="about-img"
            variants={slideInVariants("left", 0.5, 100, false)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <img src={aboutImg} alt="about" />
          </motion.div>
          <div className="about-info">
            <div className="description">
              <motion.h3
                custom={0}
                variants={slideInVariants("right", 0.5, 50, true)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              >
                My name is Arkady Yukov.
              </motion.h3>
              <motion.h4
                custom={0}
                variants={slideInVariants("right", 0.5, 50, true)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              >
                A Lead <span>I am a Software Engineer.</span> based in{" "}
                <span>Afula (Israel)</span>
              </motion.h4>
              <motion.p
                custom={0}
                variants={slideInVariants("right", 0.5, 50, true)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              >
                I have been working in the IT field for over 20 years. I possess
                extensive hands-on experience in software application
                development. Check out my Portfolio.
              </motion.p>
            </div>
            <ul className="professional-list">
              {profList.map((item, index) => (
                <motion.li
                  className="list-item"
                  key={item.id}
                  custom={index}
                  variants={slideInVariants("right", 0.6, 40, true)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <span className="number">{item.number}</span>
                  <span className="text">{item.text}</span>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href=""
              className="about-info-link inner-info-link"
              custom={3}
              variants={slideInVariants("right", 0.7, 60, true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              Download
              <FaDownload />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
