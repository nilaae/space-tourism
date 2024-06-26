import { useState } from "react";
import { data } from "../../data";
import Header from "../components/Header";
import Technology from "../components/Technology";

function TechnologyPage() {
  const [selectedTech, setSelectedTech] = useState(0);

  const tech = data.teches.map((t) => (t.id === selectedTech ? t : null));

  return (
    <div className="contain bg-tabletT desktop:bg-desktopT">
      <Header />
      <div>
        <div className="main font-Barlow desktop:py-10 desktop:ml-28 desktop:items-start">
          <h1 className="header">
            <span className="headernum">03</span>
            SPACE LAUNCH 101
          </h1>
          <div>
            <Technology
              selectedTech={selectedTech}
              handleSelectedTech={setSelectedTech}
              tech={tech}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyPage;
