import React, { useState } from "react";
import WebDesign from "./WebDesign";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
import Illustration from "./Illustration"; 
import SocialMedia from "./SocialMedia";

function Works() {
  const [work, setWork] = useState("Web Design");

  const data = [
    "Web Design",
    "Development",
    "Illustration",
    "Product Design",
    "Social Media",
  ];

  return (
    <div className="sektsioonworks">
      <div className="workskonteiner">
        <div className="workskonteinerleft">
          <ul className="workslist">
            {data.map((item) => (
              <li
                key={item}
                className="workslistitem"
                data-text={item}
                onClick={() => setWork(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="workskonteinerright">
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : work === "Illustration" ? ( // Add condition for Illustration
            <Illustration />
          ) : work === "Social Media" ? ( // Add condition for Social Media
            <SocialMedia />
          ) : (
            <ProductDesign />
          )}
        </div>
      </div>
    </div>
  );
}

export default Works;
