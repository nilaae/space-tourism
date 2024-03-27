import { useState } from "react";
import Header from "../components/Header";
import Technology from "../components/Technology";
import { data } from "../../data";
function TechnologyPage() {
  const [selectedTech, setSelectedTech] = useState(0);

  const tech = data.teches.map((t) => (t.id === selectedTech ? t : null));

  return (
    <div
      className="contain 
    bg-[url('./src/assets/Technology/tablet.jpg')] 
    desktop:bg-[url('./src/assets/Technology/desktop.jpg')]"
    >
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
