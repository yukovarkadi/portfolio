import { portfolioData } from "../data/portfolioData";
import SectionTitle from "../sectionTitle/SectionTitle";
import PortfolioItem from "./PortfolioItem";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container flex-center">
        <SectionTitle title="Portfolio" subTitle="Portfolio" />
        <div className="portfolio-wrapper">
          {portfolioData.map((item, index) => {
            return <PortfolioItem key={item.id} item={item} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
