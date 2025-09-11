import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <div className="grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-5 min-h-screen">



        <div className=" bg-[rgba(148,162,164,0.10)] rounded-lg text-center col-span-1 m-2"> 
          <div className="p-1 text-center text-4xl h-10  bg-green-700 rounded-xl">Clients</div>
          <div className="w-full h-30  bg-[rgba(118,154,159,0.2)] border-1 rounded-xl p-2 mt-2 mb-2 text-lg">Client 1</div>
           <div className="w-full h-30  bg-[rgba(118,154,159,0.2)] border-1 rounded-xl p-2  mt-2 mb-2 text-lg">Client 2</div>
        </div>

                <div className=" bg-[rgba(148,162,164,0.10)] rounded-lg relative col-span-3">
          <div className="p-1 text-center text-4xl h-10 bg-blue-900 rounded-xl">chat</div>
          <div className="w-80 h-30 absolute bottom-[50px] bg-blue-900 rounded-xl p-7 text-center mb-5 text-justify">Sure!, how may I help?</div>
          <div className="w-80 h-30  bottom-[200px] right-0 bg-gray-900 rounded-xl p-2 text-center absolute">Hello, I need assistance</div>
          <div className="w-full h-[40px] text-center   bottom-0  absolute mb-2 ml-1">
          <input className="w-3/4 h-full bg-[rgba(148,162,164,0.10)] focus:outline-none" placeholder="Type a message..."/>
          <button className="w-1/4 h-full bg-blue-900 rounded-r-xl hover:bg-blue-700">Send</button>
          </div>
        </div>

        
    </div>
    </>
  );
}
