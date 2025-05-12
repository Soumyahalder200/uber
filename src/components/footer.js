import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white h-[120vh] flex justify-center items-center">
        <div className=" w-8/10 h-9/10 grid grid-rows-12 gap-8">
          <div className=" row-span-3 ">
            <div className="text-2xl  w-full h-1/2  flex items-center">
              Uber
            </div>
            <div className="text-lg w-full h-1/2  flex items-center">
              Visit Help Center
            </div>
          </div>
          <div className=" row-span-5 grid grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-semibold">Company</h2>
              <ul className="text-sm">
                <li className="my-4">About us</li>
                <li className="my-4">Our offerings</li>
                <li className="my-4">Newsroom</li>
                <li className="my-4">Investors</li>
                <li className="my-4">Blog</li>
                <li className="my-4">Careers</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Products</h2>
              <ul className="text-sm">
                <li className="my-4">Ride</li>
                <li className="my-4">Drive</li>
                <li className="my-4">Deliver</li>
                <li className="my-4">Eat</li>
                <li className="my-4">Uber for Business</li>
                <li className="my-4">Uber Freight</li>
                <li className="my-4">Gift cards</li>
                <li className="my-4">Uber Health</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Global citizenship</h2>
              <ul className="text-sm">
                <li className="my-4">Safety</li>
                <li className="my-4">Sustainability</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Travel</h2>
              <ul className="text-sm">
                <li className="my-4">Reserve</li>
                <li className="my-4">Airports</li>
                <li className="my-4">Cities</li>
              </ul>
            </div>
          </div>
          <div className=" row-span-3">
            <div className="bg-gray-600 h-1/2 w-full grid grid-cols-2 gap-8 items-center">
            <div className="bg-green-200 h-1/2 grid grid-cols-5 ">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="bg-green-200 h-1/2 "></div>
            </div>
            <div className=" h-1/2 w-full py-6 flex items-center">
              <div className="h-8/10 w-1/8   relative">
                <Image src="/app-store-google-4d63c31a3e.svg" alt="" fill />
              </div>
              <div className="h-full w-1/8  relative">
                <Image src="/app-store-apple-f1f919205b.svg" alt="" fill />
              </div>
            </div>
          </div>
          <div className=" row-span-1 text-xs flex justify-between">
            <div>© 2025 Uber Technologies Inc.</div>
            <div className="w-1/6">
              <ul className="flex justify-between">
                <li >Privacy</li>
                <li>Accessibility</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
