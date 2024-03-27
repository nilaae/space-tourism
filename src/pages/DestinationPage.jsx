import { useState } from "react";
import { data } from "../../data";
import Header from "../components/Header";
import Destination from "../components/Destination";
import desktop from "../assets/Destination/desktop.jpg";
import tablet from "../assets/Destination/tablet.jpg";

function DestinationPage() {
  const [selectedMoon, setSelectedMoon] = useState(0);

  const moon = data.destinations.map((moon) =>
    moon.id === selectedMoon ? moon : null
  );

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
        <div className="main p-8 text-center font-Barlow desktop:flex desktop:flex-row desktop:justify-around desktop:mt-10 ">
          <div className="main desktop:self-start desktop:pb-10">
            <h1 className="header desktop:text-left">
              <span className="headernum">01</span>
              PICK YOUR DESTINATION
            </h1>

            <img
              src={moon[selectedMoon].imgURL}
              className="w-10/12 desktop:w-full pt-2"
            />
          </div>

          <div>
            <Destination
              selectedMoon={selectedMoon}
              handleSelectedMoon={setSelectedMoon}
              moon={moon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationPage;
