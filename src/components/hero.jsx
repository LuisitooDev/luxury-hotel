import Navbar from "./Navbar";

function Hero({ backgroundUrl }) {
  return (
    <>
   
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >
         <Navbar />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h5 className="mb-5 text-5xl font-bold text-white">WELCOME TO</h5>
            <h1 className="mb-5 text-5xl font-bold text-white">LUXURY HOTEL</h1>
            <p className="mb-5 text-white">
            Book your stay and enjoy Luxury redefined at the most affordable rates.
            </p>
            <a className="btn bg-customGold" href="/rooms">BOOK NOW</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
