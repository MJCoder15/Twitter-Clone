import { BsSearch } from 'react-icons/bs'

const RightSection = () => {
  return (
    <section className="w-[50%] mt-2 lg:flex flex-col items-stretch h-screen px-6 hidden">
          <div className="  ">
            <div className="relative w-full h-full group ">

              <input
                id="searchBox"
                type="search"
                placeholder="Search Twitter"
                className="outline-none focus:border-2 focus:border-primary peer bg-transparent  w-full h-full rounded-xl py-4 px-10"
              />

              <label
                htmlFor="searchBox"
                className="absolute top-0 left-0 h-full p-3 flex items-center justify-center"
              >
                <BsSearch className="w-5 h-5 text-white " />
              </label>

            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
            <h3 className="font-bold text-white  text-2xl my-4 p-2">What's happening?</h3>
            <div>
              {
                Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="hover:bg-white/10 px-3 py-2 last:rounded-b-xl transition duration-100">
                    <div className="font-semibold text-lg text-white ">#Trending Item {i + 1}</div>
                    <div className="text-xs text-gray-500">69.69k</div>
                  </div>
                ))
              }
            </div>
            <div>

            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
            <h3 className="font-bold text-2xl text-white  my-4 ml-3 p-2">Who to follow</h3>
            <div>
              {
                Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="hover:bg-white/10 flex justify-between items-center px-3 space-x-2 py-2 last:rounded-b-xl transition duration-100">

                    <div className="flex items-center space-x-2 ">
                      <div className="w-10 h-10 bg-neutral-600 rounded-full">

                      </div>
                      <div className="flex flex-col">
                        <div className="font-bold text-white">Other User</div>
                        <div className="text-gray-500 text-xs">@OtherUsername</div>
                      </div>
                    </div>

                    <div className="">
                      <button className="rounded-full px-4 py-2 bg-white text-neutral-950">follow</button>
                    </div>
                  </div>
                ))
              }
            </div>
            <div>

            </div>
          </div>
        </section>
  )
}

export default RightSection
