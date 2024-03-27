import Header from "../components/Header";
import Slider from "../components/Swiper";

function CrewPage() {
  return (
    <div className="contain bg-tabletC desktop:bg-C">
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
