import Map from "@/components/ui/map";
import Image from "next/image";
export default function home() {
  return (
    <>
      <nav className=" bg-white">
        <div className="h-[7vh]  flex justify-between ">
        <div className=" w-3/8 flex ">
          <div className=" px-18 text-3xl font-[510] flex items-center justify-center">
            Uber
          </div>
          <div className=" flex  w-3/5">
            <div className=" text-sm font-[510] px-5 flex pt-6">
              <div className="pr-2  _css-hdjfHk">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <title>Car front</title>
                  <path
                    d="m20.9 9-1.5-4.6c-.3-.8-1-1.4-1.9-1.4H6.4c-.9 0-1.6.5-1.9 1.4L3 9H1v3h1v9h4v-2h12v2h4v-9h1V9h-2.1ZM5 14h4v2H5v-2Zm10 2v-2h4v2h-4ZM7.1 6h9.7l1.3 4H5.8l1.3-4Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              Ride
            </div>
            <div className=" text-sm font-[510] px-5 flex pt-6">
              <div className="pr-2  _css-hdjfHk">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <title>Box isometric package</title>
                  <g fill="currentColor">
                    <path d="M21.9 6.4 12 1.5 8.1 3.4l9.9 5 3.9-2ZM2.1 6.4l3.8-1.9 9.9 5-3.8 1.9-9.9-5ZM11 23 1 18V8.1l10 5V23ZM19 13.8v-3.7l4-2V18l-10 5v-9.9l4-2v3.7l2-1Z"></path>
                  </g>
                </svg>
              </div>
              Courier
            </div>
            <div className=" text-sm font-[510] px-5 flex pt-6">
              <div className="pr-2  _css-hdjfHk">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <title>Car clock</title>
                  <path
                    d="M18 0c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6Zm3 7h-4V2h2v3h2v2Z"
                    fill="currentColor"
                  ></path>
                  ,
                  <path
                    d="M18.2 14H18c-3.7 0-6.9-2.6-7.8-6H6.4c-.9 0-1.6.5-1.9 1.3L2.8 14H1v3h1v6h4v-1h9v1h4v-6h1v-3h-1.8ZM8 19H4v-2h4v2Zm9 0h-4v-2h4v2Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              Rentals
            </div>
          </div>
        </div>
        <div className=" w-1/6 flex items-center">
          <button className=" flex bg-gray-100 px-3 py-2 rounded-full">
            <div className="mt-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <title>Receipt</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 23V1h18v22l-5.5-3-3.5 3-3.5-3L3 23ZM7 9h10V6H7v3Zm10 3H7v3h10v-3Z"
                fill="currentColor"
              ></path>
            </svg>
            </div>
            <div className="text-sm pl-2 font-[510]">Activity</div>
          </button>
          <div className="ml-3 flex items-center">
            <Image
              src="/profilelogo.jpeg"
              alt=""
              height={40}
              width={40}
              className="rounded-full mr-3"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        </div>
      </nav>
      <main className="h-[92vh] bg-white">
        <div className="bg-gray-200 h-1"></div>
        <div className="h-full  flex   justify-center items-center">
                <div className="w-9/10 h-9/10  flex">
                        <div className=" h-full w-1/4">
                            <div className="bg-white h-11/20 border-2 rounded-xl border-gray-200">
                                <div className="text-xl font-semibold p-4" >Find a trip</div>
                                <form action="" method="post">
                                    <div className="mx-4 mb-3">
                                        <input type="text" placeholder="Pick-up location" className="bg-gray-100  px-4 py-3 w-full rounded-lg"/>
                                    </div>
                                    <div className="mx-4 mb-3">
                                        <input type="text" placeholder="Drop-off location" className="bg-gray-100  px-4 py-3 w-full rounded-lg"/>
                                    </div>
                                    <div></div>
                                </form>
                            </div>
                        </div>
                        <div className=" h-full w-3/4 pl-9">
                            <div className="bg-gray-200 h-full w-full ">
                                <Map/>
                            </div>
                        </div>
                </div>
        </div>
      </main>
    </>
  );
}
