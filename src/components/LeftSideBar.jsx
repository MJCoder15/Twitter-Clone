import Link from 'next/link'
import { useSession } from "next-auth/react";

import { RiHome7Line } from 'react-icons/ri'
import { BsSearch, BsBookmark, BsPerson, BsTwitter, BsThreeDots } from 'react-icons/bs'
import { GoBell } from 'react-icons/go'
import { LuMail } from 'react-icons/lu'

const NAVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: BsTwitter
  },
  {
    title: 'Home',
    icon: RiHome7Line
  },
  {
    title: 'Explore',
    icon: BsSearch
  },
  {
    title: 'Notifications',
    icon: GoBell
  },
  {
    title: 'Messages',
    icon: LuMail
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark
  },
  {
    title: 'Profile',
    icon: BsPerson
  }
]

const LeftSideBar = () => {

  const { data: session } = useSession();

  

  return (
    <>
       <section className="w-72 sticky top-0 lg:flex flex-col items-stretch h-screen px-6 hidden">
          <div className='flex flex-col items-stretch h-full space-y-4 w-full mt-4'>
            {
              NAVIGATION_ITEMS.map((item) => (

                <Link
                  className='hover:bg-white/10 transition duration-100 flex items-center justify-start w-fit text-xl text-white font-poppins font-extrabold space-x-4  rounded-3xl p-4'
                  href={`/${item.title.toLowerCase()}`}
                  key={item.title}
                >
                  <div >
                    <item.icon />
                  </div>

                  <div>
                    {item.title !== "Twitter" && <div>{item.title}</div>}
                  </div>
                </Link>
              ))
            }

            <button className='w-[90%] rounded-full bg-cyan-500 p-4  text-2xl text-white  text-center font-semibold hover:bg-opacity-70 transition duration-100'>
              Tweet
            </button>

          </div>
          {/* Profile page button below Big "Tweet" Button*/}
          <button className='rounded-full flex justify-between items-center m-2 bg-transparent p-4 text-center hover:bg-opacity-70 transition duration-200 w-full hover:bg-white/10'>

            <div className='flex items-center space-x-3'>
              <div className='rounded-full p-2 bg-slate-400 w-10 h-10'></div>

              <div className='text-left text-sm'>
                <div className='font-semibold text-gray-200'>Name of User</div>
                <div className='font-semibold text-gray-500 '>@nameofuser</div>
              </div>
            </div>
            <div className=''>
              <BsThreeDots />
            </div>
          </button>
        </section>
    </>
  )
}

export default LeftSideBar

