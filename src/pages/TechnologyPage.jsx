import { useState } from "react";
import { data } from "../../data";
import Header from "../components/Header";
import Technology from "../components/Technology";
import tablet from "../assets/Technology/tablet.jpg";
import desktop from "../assets/Technology/desktop.jpg";

function TechnologyPage() {
  const [selectedTech, setSelectedTech] = useState(0);

  const tech = data.teches.map((t) => (t.id === selectedTech ? t : null));

  return (
    <div
      className={`
    contain 
    bg-[url('.${tablet}')] 
    desktop:bg-[url('.${desktop}')]
    `}
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
