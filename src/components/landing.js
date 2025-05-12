import Image from "next/image";
export default function Landing() {
  return (
    <>
      <main>
        <section className="h-16 bg-white">ride</section>
        <section className=" h-[80vh] bg-white flex justify-center items-center ">
          <div className="h-9/10 w-8/10 bg-white flex">
            <div className=" w-1/2   flex items-center">
              <div className=" h-7/10 w-8/10">
                <h1 className="text-5xl font-semibold">
                  Request a ride for now or later
                </h1>
                <p className="text-md mt-10 py-1">
                  Add your trip details, hop in, and go.
                </p>
                <form action="" method="post" className="font-medium">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter location"
                      className="w-9/10 p-3 my-2 rounded-md bg-gray-200"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter destination"
                      className="w-9/10 p-3 my-2 rounded-md bg-gray-200"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-black text-white px-5 py-3 my-4 rounded-lg font-semibold"
                    >
                      See prices
                    </button>
                    <button
                      type=""
                      className="bg-gray-200 text-black px-5 py-3 my-4 mx-6 rounded-lg font-semibold"
                    >
                      Schedule for later
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className=" w-1/2  relative ">
              <Image src="/travel-ilustra.webp" alt="" fill />
            </div>
          </div>
        </section>
        <section className="h-[65vh] bg-white flex justify-center items-center">
          <div className="h-9/10 w-8/10 bg-white">
            <h1 className="text-4xl font-semibold p-5">Suggestions</h1>
            <div className=" h-8/10 flex flex-wrap">
              <div className="  px-2 py-2 w-1/3 h-1/2">
                <div className="bg-gray-100 w-full p-4 flex rounded-lg h-full">
                  <div className=" w-3/5 ">
                    <h2 className="font-semibold my-1">Grocery</h2>
                    <p className="text-xs my-2">
                      Get groceries delivered to your door with Uber Eats.
                    </p>
                    <button className="bg-white my-1 px-4 py-2 text-sm font-semibold rounded-full">
                      Details
                    </button>
                  </div>
                  <div className=" w-2/5 relative">
                    <Image src="/grocery.png" alt="" fill />
                  </div>
                </div>
              </div>
              <div className="  px-2 py-2 w-1/3 h-1/2">
                <div className="bg-gray-100 w-full p-4 flex rounded-lg h-full">
                  <div className=" w-3/5 ">
                    <h2 className="font-semibold my-1">Courier</h2>
                    <p className="text-xs my-2">
                      Uber makes same-day item delivery easier than ever.
                    </p>
                    <button className="bg-white my-1 px-4 py-2 text-sm font-semibold rounded-full">
                      Details
                    </button>
                  </div>
                  <div className=" w-2/5 relative">
                    <Image src="/Courier.png" alt="" fill />
                  </div>
                </div>
              </div>
              <div className="  px-2 py-2 w-1/3 h-1/2">
                <div className="bg-gray-100 w-full p-4 flex rounded-lg h-full">
                  <div className=" w-3/5 ">
                    <h2 className="font-semibold my-1">Rentals</h2>
                    <p className="text-xs my-2">
                      Request a trip for a block of time and make multiple
                      stops. 
                    </p>
                    <button className="bg-white px-4 my-1 py-2 text-sm font-semibold rounded-full">
                      Details
                    </button>
                  </div>
                  <div className=" w-2/5 relative">
                    <Image src="/Hourly2021.png" alt="" fill />
                  </div>
                </div>
              </div>
              <div className="  px-2 py-2 w-1/3 h-1/2">
                <div className="bg-gray-100 w-full p-4 flex rounded-lg h-full">
                  <div className=" w-3/5 ">
                    <h2 className="font-semibold my-1">Reserve</h2>
                    <p className="text-xs my-2">
                      Reserve your ride in advance so you can relax on the day
                      of your trip.
                    </p>
                    
                    <button className="bg-white px-4 py-2 my-1 text-sm font-semibold rounded-full">
                      Details
                    </button>
                  </div>
                  <div className=" w-2/5 relative">
                    <Image src="/reserve_clock.png" alt="" fill />
                  </div>
                </div>
              </div>
              <div className="  px-2 py-2 w-1/3 h-1/2">
                <div className="bg-gray-100 w-full p-4 flex rounded-lg h-full">
                  <div className=" w-3/5 ">
                    <h2 className="font-semibold my-1">Ride</h2>
                    <p className="text-xs my-2">
                      Go anywhere with Uber. Request a ride, hop in, and go.
                    </p>
                    <button className="bg-white my-1 px-4 py-2 text-sm font-semibold rounded-full">
                      Details
                    </button>
                  </div>
                  <div className=" w-2/5 relative">
                    <Image src="/ride.png" alt="" fill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-[65vh] bg-white flex justify-center items-center">
          <div className=" h-7/10 w-8/10 flex">
            <div className=" h-full w-1/2 flex items-center">
            <div className=" w-8/10 h-8/10">
                <div className="text-4xl font-semibold ">
                Log in to see your recent activity
                </div>
                <div className="text-base font-medium my-6">
                View past trips, tailored suggestions, support resources, and more.
                </div>
                <button className="bg-black text-white my-3 rounded-lg py-3 px-6">Log in to your account</button>
                <div className="my-2 text-md"><u>Don’t have an Uber account? Sign up</u>
                </div>
                
              </div>
              </div>
            <div className=" h-full w-1/2 relative">
            <Image src="/Airport-Fall.webp" alt="" fill/>
              </div>
          </div>
        </section>
        <section className="h-[95vh] bg-white flex items-center justify-center">
          <div className=" w-8/10 h-9/10">
            <div className="text-4xl p-5 font-semibold">
              <h1>Use the Uber app to help you travel your way</h1>
            </div>
            <div className=" h-9/10  justify-between flex ">
              <div className=" w-1/3 h-full p-4">
                <Image
                  src="/U_CoastalCalifornia_White_Final-(1) (1).webp"
                  alt=""
                  width={350}
                  height={360}
                />
                <h2 className="text-lg font-semibold my-4">Ride Options</h2>
                <p className="text-md">
                  There’s more than one way to move with Uber, no matter where
                  you are or where you’re headed next.
                </p>
                <button className="bg-black text-white font-semibold mt-7 py-3 px-6 rounded-lg">
                  Search ride options
                </button>
              </div>
              <div className=" w-1/3 h-full p-4">
                <Image
                  src="/Airport-rides.webp"
                  alt=""
                  width={350}
                  height={300}
                />
                <h2 className="text-lg font-semibold my-4">700+ airports</h2>
                <p className="text-md">
                  You can request a ride to and from most major airports.{" "}
                  <u>Schedule</u> a ride to the airport for one less thing to
                  worry about.
                </p>
                <button className="bg-black text-white font-semibold mt-7 py-3 px-6 rounded-lg">
                  Search airports
                </button>
              </div>
              <div className=" w-1/3 h-full p-4">
                <Image
                  src="/SS_Commuter.webp"
                  alt=""
                  width={350}
                  height={300}
                />
                <h2 className="text-lg font-semibold my-4">10,000+ cities</h2>
                <p className="text-md">
                  The app is available in thousands of cities worldwide, so you
                  can request a ride even when you’re far from home.
                </p>
                <button className="bg-black text-white font-semibold mt-7 py-3 px-6 rounded-lg">
                  Search cities
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black h-[57vh] text-white flex justify-center items-center">
          <div className="w-8/10 h-7/10   flex justify-between">
            <div className="w-1/2 h-full  pr-35">
              <div className=" w-full h-full">
                <h1 className="text-4xl font-semibold">
                  Looking for business solutions?
                </h1>
                <p className="text-lg mt-4">
                  Get information about how companies leverage{" "}
                  <u>Uber for Business:</u>
                </p>
                <ul className="list-disc pl-10 text-md">
                  <li>
                    <u>Business travel</u>
                  </li>
                  <li>
                    <u>Courtesy rides</u>
                  </li>
                  <li>
                    <u>Meal programs</u>
                  </li>
                  <li>
                    <u>Item delivery</u>
                  </li>
                </ul>
                <button className="text-black bg-white mt-6 px-7 py-3 rounded-lg font-semibold">
                  Get started
                </button>
                <button className=" mt-4 px-7 py-3 rounded-lg text-lg font-normal">
                  <u>Check out our solutions</u>
                </button>
              </div>
            </div>
            <div className="w-1/2 h-full  pl-4 ">
              <div className=" w-full h-full relative">
                <Image src="/U4B_Spot_U4BWebsite.webp" alt="" fill />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white h-[60vh]"></section>
      </main>
    </>
  );
}
