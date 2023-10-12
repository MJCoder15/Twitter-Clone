import { useSession, signIn, signOut } from "next-auth/react";

import {  BsTwitter } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'

import { useRouter } from "next/router";

const Home = () => {

  const router = useRouter();

  const { data: session } = useSession();

  console.log(session);

  if (session) {

    router.push('/home')
    
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <div className="w-full h-full flex justify-center items-center text-white bg-black">
        <div className="max-w-screen-xl w-full h-full flex justify-center items-center ">
          <div className="bg-cyan-700 flex flex-col justify-center items-center rounded-lg shadow-xl shadow-emerald-500 mt-8 p-3 w-[40%] h-[40vh]">

            <h2 className="text-center mb-8"> <BsTwitter size={25}/> </h2>

            <div className="flex flex-col  items-center ">
          
              <button
                onClick={() => signIn('google')}
                className="bg-white flex text-black font-semibold px-4 py-2 rounded-full"
              >

                <FcGoogle 
                  className="mx-1 px-[0.5px]"
                  size={25}
                />
                SignIn with Google
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Home;
