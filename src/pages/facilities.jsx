import Hero from "../components/hero";

function Facilities({ backgroundUrl }) {
  return (
    <>
<div class="bg-white-200">
    <div>
        <Hero backgroundUrl="facilities-bg.png" />
    </div>
    <div className="text-center m-12 lg:m-24">
    <h2 class="mb-3 text-xl md:text-3xl ml-4 lg:text-5xl text-blue-950" style={{ fontFamily: 'zen-antique' }}>WE ARE HERE FOR YOU</h2>
            <h2 class="mb-2 text-lg md:text-xl ml-4 lg:text-2xl text-blue-950">
                At Luxury Hotels we take our clients seriously. Do you have any questions, complaints, or requests?
                Please forward it to our support service, and we will get back to you as soon as possible.
            </h2>
    </div>
    <div className="m-2">
    <img src="gym.png" className="w-full" />
    <img src="laundry.png" className="w-full" />
    <img src="poolside-bar.png" className="w-full" />
    <img src="restaurant.png" className="w-full" />
    <img src="spa.png" className="w-full" />
    <img src="swimming-pool.png" className="w-full" />
    </div>
</div>
    </>
  );
}

export default Facilities;
