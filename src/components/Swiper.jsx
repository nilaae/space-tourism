import { data } from "../../data";
import "../index.css";
export default function Slider() {
  return (
    <div>
      <swiper-container
        pagination-clickable="true"
        style={{
          "--swiper-pagination-color": "#ffffff",
          "--swiper-pagination-bullet-inactive-color": "#52525b",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        {data.crew.map((slides) => (
          <swiper-slide key={slides.id}>
            <div className="main desktop:flex-row-reverse">
              <img
                src={slides.imgURL}
                className=" w-7/12 desktop:w-10/12 desktop:max-w-[35vw] py-5"
              />
              <div className=" flex flex-col text-center desktop:text-left desktop:pb-10 font-bellefair">
                <h3 className="text-[#7f8188] text-clamp-header ">
                  {slides.job}
                </h3>
                <h2 className="text-clamp-h2 pt-2 text-white ">
                  {slides.fullname}
                </h2>
                <p className="text-clr-light tracking-wide font-Barlow desktop:text-clamp-text">
                  {slides.text}
                </p>
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}
