import Header from "../components/Header";
import Slider from "../components/Swiper";
import tablet from "../assets/Crew/tablet.jpg";
import desktop from "../assets/Crew/desktop.jpg";

function CrewPage() {
  return (
    <div
      className={`
    contain 
    bg-[url('.${tablet}')] 
    desktop:bg-[url('.${desktop}')]
    `}
    >
      <div className="relative z-10">
        <Header />
      </div>
      <div>
        <div className="main font-Barlow desktop:py-10 desktop:ml-28 desktop:items-start">
          <h1 className="header">
            <span className="headernum">02</span>
            MEET YOUR CREW
          </h1>
          <div>
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrewPage;
