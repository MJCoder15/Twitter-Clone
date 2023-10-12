import { BsThreeDots, BsDot } from "react-icons/bs";
import { RiChat1Line } from "react-icons/ri";
import { LiaRetweetSolid } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { RxShare2 } from "react-icons/rx";


import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)


const MainComponent = () => {

    return (
        <main
            className="w-full  h-full min-h-screen flex flex-col border-l-[0.3px] border-r-[0.3px] border-gray-400"
        >
            <h1 className="text-xl text-white  font-extrabold mx-1 p-2 font-poppins backdrop-blur bg-black/10 sticky top-0">Home</h1>

            <div className="border-t-[0.3px] border-b-[0.3px] flex items-stretch px-2 py-4 space-x-2 border-gray-400 relative">

                <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>

                <div className="flex flex-col w-full h-full ">
                    <input
                        type="text"
                        className="w-full h-full placeholder:text-xl placeholder:text-gray-500 p-3 bg-transparent outline-none border-none"
                        placeholder="What is happening?!"
                        name=""
                        id=""
                    />

                    <div className="w-full flex justify-between items-center">
                        <div></div>

                        <div className="max-w-[100px]">
                            <button className='w-full rounded-full bg-cyan-500 px-4 py-2  text-lg text-white  text-center font-bold hover:bg-opacity-70 transition duration-200'>
                                Tweet
                            </button>
                        </div>
                    </div>
                </div>

            </div>


            <div className="flex flex-col">

                <div className="border-b-[0.1px] flex p-4  space-x-2">
                    <div className="">

                        <div className="w-10 h-10 bg-slate-200  rounded-full" />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <div className="flex items-center w-full justify-between">
                            <div className="flex items-center w-full space-x-1">

                                <div className="font-extrabold text-white ">Username</div>
                                <div className="text-gray-500">@username</div>
                                <div className="text-gray-500"><BsDot /></div>
                                <div className="text-gray-500">21 Sep</div>

                            </div>
                            <div className="text-gray-500">
                                <BsThreeDots />
                            </div>

                        </div>
                        <div className="text-white text-xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo saepe expedita perspiciatis voluptates, adipisci perferendis, in velit alias animi dolorem doloribus. Error aut laboriosam laborum praesentium voluptate, exercitationem doloribus adipisci?
                        </div>
                        <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl"></div>

                        <div className="flex justify-around items-center text-white  space-x-2 space-y-2 w-full">
                            {/* Like,Reply,ReTweet and Stats icons */}

                            <div className="rounded-full cursor-pointer transition duration-100 hover:text-cyan-400 backdrop:blur-3xl  p-3"><RiChat1Line /></div>

                            <div className="rounded-full cursor-pointer transition duration-100 hover:text-green-400/70 backdrop:blur-3xl  p-3"><LiaRetweetSolid /></div>

                            <div className="rounded-full cursor-pointer transition duration-100 hover:text-red-600 backdrop:blur-3xl  p-3"><AiOutlineHeart /></div>

                            <div className="rounded-full cursor-pointer transition duration-100 hover:text-cyan-400 backdrop:blur-3xl  p-3"><IoStatsChartSharp /></div>

                            <div className="rounded-full cursor-pointer transition duration-100 hover:text-cyan-400 backdrop:blur-3xl p-3"><RxShare2 /></div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainComponent
