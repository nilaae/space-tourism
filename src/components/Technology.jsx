import { data } from "../../data";

function Technology({ tech, selectedTech, handleSelectedTech }) {
  const { header, imgURL, text } = tech[selectedTech];

  return (
    <div className="main desktop:flex-row-reverse desktop:items-start desktop:pl-9 ">
      <img
        className="w-full h-[35vh] object-cover object-bottom desktop:h-[65vh] desktop:max-w-xl"
        src={imgURL}
      />
      <div className="desktop:flex desktop:pt-24 text-white">
        <div className="flex justify-center my-3 desktop:flex-col">
          {data.teches.map((tech) => (
            <button
              key={tech.id}
              onClick={() => handleSelectedTech(tech.id)}
              className={`w-10 h-10 rounded-full border-zinc-600 border-[1px]  font-bellefair m-2 desktop:w-20 desktop:h-20 ${tech.id === selectedTech ? "text-black bg-white " : null} `}
            >
              <p className=" desktop:text-3xl ">{tech.id + 1}</p>
            </button>
          ))}
        </div>
        <div className=" flex flex-col text-center desktop:text-left pb-20 px-8 ">
          <h3 className="text-clr-light tracking-wide desktop:text-clamp-text">
            THE TERMINOLOGY...
          </h3>
          <h2 className="text-clamp-h2 mb-4 font-bellefair">{header}</h2>
          <p className="text-clr-light tracking-wide desktop:max-w-xl desktop:text-clamp-text">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Technology;
