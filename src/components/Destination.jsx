import { data } from "../../data";

function Destination({ selectedMoon, handleSelectedMoon, moon }) {
  const { title, text, distance, traveltime } = moon[selectedMoon];

  return (
    <div className="main desktop:items-start desktop:pl-9 desktop:text-left desktop:mb-16">
      <nav>
        <ul className="flex text-lg my-3">
          {data.destinations.map((m) => (
            <li
              key={m.id}
              onClick={() => handleSelectedMoon(m.id)}
              className={`text-clr-light mr-8 cursor-pointer ${m.id === selectedMoon ? "border-b-2  text-white" : null}`}
            >
              {m.title}
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <div>
          <div>
            <h3 className="text-clamp-destination pt-2 text-white font-bellefair">
              {title}
            </h3>
            <p className="mb-10 text-clr-light tracking-wide desktop:text-clamp-text desktop:max-w-[40vw]">
              {text}
            </p>
            <div className="mt-6 bg-zinc-600 h-[0.5px] desktop:w-[35vw]"></div>
          </div>
          <div className="flex my-5 flex-col desktop:flex-row">
            <p className="text-clr-light desktop:mr-14">
              AVG. DISTANCE
              <span className="text-white block text-clamp-header font-bellefair">
                {distance}
              </span>
            </p>

            <p className="text-clr-light desktop:ml-14">
              EST. TRAVEL TIME
              <span className="text-white block text-clamp-header font-bellefair">
                {traveltime}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
