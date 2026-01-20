import { useState } from "react";
import PortfolioModal from "./PortfolioModal";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation.js";

const PortfolioItem = ({ item, index }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <motion.div
      className="portfolio-img-card"
      custom={index}
      variants={slideInVariants("top", 0.7, 50, true)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className="img-card" onClick={openModal}>
        <div className="overlay"></div>
        <div className="info">
          <h3>{item.title}</h3>
          <span>{item.category}</span>
        </div>
        <img src={item.imgSrc} alt={item.title} />
      </div>
      {isOpenModal && (
        <PortfolioModal
          item={item}
          isOpenModal={isOpenModal}
          closeModal={closeModal}
        />
      )}
    </motion.div>
  );
};

export default PortfolioItem;
