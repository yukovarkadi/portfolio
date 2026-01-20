import SectionTitle from "../sectionTitle/SectionTitle";
import Aducation from "./Aducation.jsx";
import Awords from "./Awords.jsx";
import Skills from "./Skills.jsx";
import WorkExperience from "./WorkExperience.jsx";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation.js";
import "./Skills.css";

const SkillsInfo = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container flex-center">
        <SectionTitle title="Skills" subTitle="Skills" />
        <div className="inner-content">
          <motion.div
            className="skills-description"
            custom={2}
            variants={slideInVariants("top", 0.6, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <h3>Education & Skills</h3>
            <p>
              For more than 5 years our experts have been accomplishing enough
              with modern Web Development, new generation web and app
              programming language.
            </p>
          </motion.div>
          <div className="skills-info education-all">
            <motion.div
              custom={1}
              variants={slideInVariants("top", 0.7, 50, true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              <Aducation />
            </motion.div>
            <motion.div
              custom={2}
              variants={slideInVariants("top", 0.7, 50, true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              <Skills />
            </motion.div>
            <motion.div
              custom={3}
              variants={slideInVariants("top", 0.7, 50, true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              <Awords />
            </motion.div>
          </div>
          <WorkExperience />
        </div>
      </div>
    </section>
  );
};

export default SkillsInfo;
