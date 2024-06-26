import React from "react";
import { useDarkMode } from "../../darkmode/DarkmodeContext";
import "./featuresSection.scss";

const FeaturesSection: React.FC<any> = ({ content }) => {
  const img = content?.image?.fields?.file?.url || "";
  const p1 = content?.description?.content[0]?.content[0]?.value || "";
  const p2 = content?.secondParagraph?.content[0]?.content[0]?.value || "";
  const p3 = content?.thirdParagraph?.content[0]?.content[0]?.value || "";
  const { mode } = useDarkMode();

  return (
    <div className={`feature-cont ${mode}`}>
      {img && <img className="feature-img" src={img} alt="features" />}
      <div className={`feature-text-cont ${mode}`}>
        {p1 && <p>{p1}</p>}
        {p2 && <p>{p2}</p>}
        {p3 && <p>{p3}</p>}
      </div>
    </div>
  );
};

export default FeaturesSection;
