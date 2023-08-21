import { Lato, Montserrat } from "next/font/google";
import Image from "next/image";
import Login from "./Login";

const lato = Lato({ weight: ['400'], subsets: ['latin'] });
const mont = Montserrat({ weight: ['700'], subsets: ['latin'] })

export const SignIn = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="bg-black col-span-1 items-center justify-center">
                <div className="flex justify-center items-center min-h-screen">
                    <h1 className={`${mont.className} text-5xl`}>Board.</h1>
                </div>

            </div>
            <div className="col-span-2  bg-[#F5F5F5] min-h-screen pl-20 flex  justify-center items-center">
                 
                <div className="text-black flex flex-col">
                    <div className=" flex flex-col ">
                        <h1 className={`${mont.className} text-3xl`}>Sign In</h1>
                        <p className={`${lato.className} font-light mt-1`}>Sign in to your account</p>
                    </div>

                    <div className="flex flex-row mt-4 gap-3 font-extralight text-sm text-gray-400">
                        <button className="flex gap-2 px-5 bg-white py-2 rounded-[12px]">
                            <Image src="/google_icon.png" alt="google icon" width={20} height={2} />
                            <h3 className="text-sm">sign in with google</h3>
                        </button>
                         <button className="flex gap-2 px-5 bg-white py-2 rounded-[12px]">
                            <Image src="/apple_icon.png" alt="google icon" width={20} height={4} />
                            <h3 className="text-sm">sign in with apple</h3>
                        </button>
                    </div>
                    
                    <Login />
                </div>
             
                
            </div>
              
      
        </div>
  )
};