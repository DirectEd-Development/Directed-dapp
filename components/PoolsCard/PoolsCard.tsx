import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineAccessTime } from "react-icons/md";

const PoolsCard = ({ title, image }: { title?: string; image?: string }) => {
  return (
    <div className="md:col-span-2 w-full h-fit bg-light2 overflow-hidden shadow-md">
      <div className="w-full h-38 relative">
      <div className="flex md:flex-row flex-col">
        <div className="flex-auto">
          <img className="w-220 h-220" src={`${image}`} alt="school img" width="300" height="300" />
          {/* <Image className="" src={`${image}`}   alt="Pool Image" width="220" height="220" /> */}
        </div>

        <div className="flex-auto">
          <div className="flex">
          <div className="flex-auto md:pt-5 md:-ml-5 ml-0 p-5">
            <h1 className="font-bold text-[18px] md:text-start text-center">{title}</h1>
            <Link href={"https://www.notion.so/directed/Kagumo-High-School-bf13e9c623be4480a5a5c0aac3ebed18"} passHref>
                <p className="md:text-start text-[12px] pb-2 underline hover:no-underline text-gray-600 text-center">Learn more about this school</p>
            </Link>
            <ul className="text-[12px] text-gray-600 md:ml-0 ml-10">
              <li className="pb-2"><Image className="inline" src="/static/images/clock.png"   alt="Pool Image" width="10" height="10" /> 7 days left</li>
              <li className="pb-2"><Image className="inline" src="/static/images/Vector.png"   alt="Pool Image" width="10" height="10" /> 5 person(s) have donated</li>
              <li className="pb-2"><Image className="inline" src="/static/images/dollar.png"   alt="Pool Image" width="10" height="10" /> Each scholarship costs ₳1000</li>
              <li className="pb-2"><Image className="inline" src="/static/images/nft.png"   alt="Pool Image" width="10" height="10" /> Remaining Heroes: 20</li>
            </ul>
          </div>
          
          <div className="md:hidden block flex-auto">
            <div className="flex flex-col mt-8 text-end pr-2 text-sm justify-between">
              <div className="flex-auto mb-20">₳3108</div>
              <div className="flex-auto">Goal: ₳40,000</div>
            </div>
          </div>
          <div className="md:hidden block flex-auto ">
            <div className="flex flex-col flex-nowrap justify-end w-5 h-32 mt-8 overflow-hidden bg-[#385140]">
              <progress className="bg-black overflow-hidden" style={{height: '13%'}} ></progress>
            </div>
          </div>
          </div>
        </div>

        <div className="flex-auto">
          <div className="pt-5 text-gray-600 md:-ml-20 ml-10">
            <div className="flex md:flex-col flex-row items-center w-full">
              <div className="py-2 flex-auto">
                <h1 className="font-semibold text-xl text-center">3/40</h1>
                <p className="text-center text-sm">Scholarships <br/> funded</p>
              </div>
              <div className="md:border-2 md:border-transparent md:border-t-white md:w-14 md:h-2 border-2 border-transparent border-l-white w-2 h-14"></div>
              {/* <div className="py-2 flex-auto">
                <h1 className="font-semibold text-xl text-center">1</h1>
                <p className="text-center text-sm">Remaining Scholarship <br/> Naming Right</p>
              </div> */}
            </div>
          </div>
        </div> 

        <div className="flex-auto">
            <div className="font-semibold mt-10 md:mr-10 mr-0">
            <div className="hidden text-primary text-base md:flex items-start justify-between">
              <span className="flex items-center space-x-2">
                {/* <MdOutlineAccessTime /> <span>6 days left</span> */}
                <span className="text-sm">₳3,108</span>
              </span>
              <span className="text-sm">Goal: $40,000</span>
            </div>
            <progress
              className="hidden md:block rounded-none progress-primary w-full bg-slate-300"
              value="13"
              max="100"
            ></progress>
            <h1 className="hidden md:block italic text-xs text-end text-gray-600">
              ₳1000 to fund the next scholarship{" "}
            </h1>
          </div>
          <div className="flex items-center justify-center p-5">
        <Link href={"/donate"}>
          <button className="btn btn-primary">donate now</button>
        </Link>
      </div>
        </div>
      </div>
      </div>




    </div>
  );
};

export default PoolsCard;
