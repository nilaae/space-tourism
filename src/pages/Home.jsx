import Header from "../components/Header";
import Link from "../components/Link";

function Home() {
  return (
    <div
      className="contain
     bg-[url('./src/assets/Home/tablet.jpg')] 
     desktop:bg-[url('./src/assets/Home/desktop.jpg')] "
    >
      <Header />

      <div className="flex flex-col p-8 text-center font-Barlow desktop:flex-row desktop:justify-around desktop:mt-24 pb-32">
        <div className="tracking-widest text-clr-light desktop:text-left">
          <h3 className="tracking-[0.3em] desktop:text-2xl">
            SO, YOU WANT TO TRAVEL TO
            <span className="block pt-2 pb-4 text-white text-7xl font-bellefair text-clamp-home desktop:max-w-72">
              SPACE
            </span>
          </h3>
          <p className="desktop:leading-8 desktop:text-xl desktop:max-w-lg">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link to="/destination">
          <button className="mt-16 text-3xl bg-white rounded-full w-52 h-52 text-clr-dark font-bellefair desktop:w-64 desktop:h-64">
            EXPLORE
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
