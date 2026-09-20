import React from "react";
import { Link } from "react-router-dom";
import { IMG } from "../data/siteData";
export default function PageHero({ eyebrow, title, text, image = "hero.jpg" }) {
  return (
    <section
      className="pageHero"
      style={{
        backgroundImage: `linear-gradient(90deg,rgba(25,35,68,.96),rgba(25,35,68,.7),rgba(25,35,68,.3)),url(${IMG + image})`,
      }}
    >
      <div className="container pageHeroInner">
        <span className="eyebrow light">{eyebrow}</span>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
        <div className="crumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{title}</span>
        </div>
      </div>
    </section>
  );
}
