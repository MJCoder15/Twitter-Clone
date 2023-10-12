import { useSession } from "next-auth/react";

import LeftSideBar from "@/components/LeftSideBar";
import RightSection from "@/components/RightSection";
import MainComponent from "@/components/MainComponent";

const TwitterHomePage = () => {

  const { data: session } = useSession();

  console.log(session);

  return (
    <div className="w-full h-full flex justify-center items-center text-white bg-black relative">
        <div className="xl: max-w-screen-xl w-full h-full flex relative">

          <LeftSideBar />
          <MainComponent />
          <RightSection />
    
        </div>
      </div>
  )
}

export default TwitterHomePage
