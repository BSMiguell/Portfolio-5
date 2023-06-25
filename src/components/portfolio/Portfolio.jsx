import React, { useState } from "react";
import List from "./List";
import Items from "./Items";
import { projects } from "../../Data";
import { AnimatePresence } from "framer-motion";

import "./portfolio.css";

const allNavList = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];
console.log(allNavList);

const Portfolio = () => {
  const [projectsItems, setProjectsItems] = useState(projects);
  const [navlist, setCategories] = useState(allNavList);

  const filterItems = (category) => {
    if (category === "all") {
      setProjectsItems(projects);
      return;
    }

    const newProjectItems = projects.filter(
      (item) => item.category === category
    );

    setProjectsItems(newProjectItems);
  };

  return (
    <section className="portfolio section" id="work">
      <h2 className="section__title text-cs">Portfolio</h2>

      <p className="section__subtitle">
        My <span>Cases</span>
      </p>

      <List list={navlist} filterItems={filterItems} />

      <div className="portfolio__container container grid">
        <AnimatePresence initial={false}>
          <Items projectsItems={projectsItems} />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
