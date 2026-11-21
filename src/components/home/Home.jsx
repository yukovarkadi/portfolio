import { motion } from "motion/react";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaCircleArrowRight, FaArrowDownLong } from "react-icons/fa6";
import { mainImg } from "../../assets/images";
import { about } from "../../assets/images";
import { iconVariants, slideInVariants } from "../../utils/animation";
import "./Home.css";

const icons = [
  { id: 1, href: "Https://facebook.com", icon: <FaFacebookF /> },
  { id: 2, href: "Https://instagram.com", icon: <FaInstagram /> },
  { id: 3, href: "Https://github.com", icon: <FaGithub /> },
];

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container home-wrapper">
        <div className="media-icons">
          {icons.map((item, index) => (
            <motion.a
              href={item.href}
              key={item.id}
              custom={index}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
        <div className="home-info">
          <motion.h1
            custom={0}
            variants={slideInVariants("left", 0.5, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            Arkady Yukov.
          </motion.h1>
          <motion.h3
            custom={1}
            variants={slideInVariants("left", 0.7, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            Software Engineer.
          </motion.h3>
          <motion.p
            custom={2}
            variants={slideInVariants("left", 0.9, 60, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            Programming, IT.
          </motion.p>
          <motion.a
            href="#contact"
            className="home-info-link inner-info-link"
            custom={4}
            variants={slideInVariants("left", 0.9, 100, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            Contact me
            <FaCircleArrowRight />
          </motion.a>
        </div>
        <motion.div
          className="home-img"
          variants={slideInVariants("right", 0.5, 150, false)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <img src={about} alt="about" />
        </motion.div>
      </div>
      <a href="#about" className="scroll-down">
        Scroll down
        <FaArrowDownLong />
      </a>
    </section>
  );
};

export default Home;
