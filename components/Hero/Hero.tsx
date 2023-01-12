import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image"
import FilterMenu from "../FilterMenu"

const Hero: NextPage = () => {
return (
    <> 
        <div className="container grid grid-cols-1 gap-y-7 py-8  justify-items-center h-fit">
            <div className="md:col-span-2">
                <h1 className="text-2xl md:text-5xl text-black font-semibold text-center">
                Scholarship Pools
                </h1>

            </div>
            <div className="md:col-span-2 box-border h-auto w-full p-4 border-2 border-[#999999] bg-white">
                <div className="flex md:flex-row flex-col">
                <div className="flex-auto md:w-3/5 h-fit">
                    <span className="w-full flex justify-center items-center font-semibold mb-5 text-xl">What Can I Receive as a Donor?</span>
                        <div className="flex">
                        <div className="flex-auto h-auto w-full ...">
                            <div className="flex justify-center items-start">
                            <Image className="px-0 ml-5 " src="/static/images/acess.png" alt="image" width="90" height="90"/>
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={1}>
                                <Image className="px-0 -ml-4 -mt-4 cursor-pointer" src="/static/images/Hover.png" alt="image" width="50" height="50"/>
                                </label>
                                <div
                                tabIndex={1}
                                className="dropdown-content card card-compact w-60 p-2 shadow bg-white mt-1"
                                >
                                <div className="card-body">
                                <Image className="px-0 -ml-4 -mt-4 cursor-pointer" src="/static/images/Hover.png" alt="image" width="30" height="30"/>
                                    <h3 className="text-lg">
                                    All donors receive a token which unlocks access to the Scholars Progress and Donor's Portal page!
                                    </h3>
                                </div>
                                </div>
                            </div>
                            </div>
                            <span className="flex justify-center items-center font-semibold text-sm">Access Token</span>
                        </div>
                        <div className="flex-auto h-auto w-full ...">
                            <div className="flex justify-center items-start">
                            <Image className="px-0 ml-5 " src="/static/images/digital.png" alt="image" width="90" height="90"/>
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={1}>
                                <Image className="px-0 -ml-4 -mt-4 cursor-pointer" src="/static/images/Hover.png" alt="image" width="50" height="50"/>
                                </label>
                                <div
                                tabIndex={1}
                                className="dropdown-content card card-compact w-60 p-2 shadow bg-white mt-1"
                                >
                                <div className="card-body">
                                <Image className="px-0 -ml-4 -mt-4 cursor-pointer" src="/static/images/Hover.png" alt="image" width="30" height="30"/>
                                    <h3 className="text-lg">
                                    All donors receive digital art pieces from four tiers, each with different utilities and unique names.</h3>
                                </div>
                                </div>
                            </div>
                            </div>
                            <span className="flex justify-center items-center font-semibold text-sm">Digital Art</span>
                        </div>
                        <div className="flex-auto h-auto w-full ...">
                            <div className="flex justify-center items-start">
                            <Image className="px-0 ml-5 " src="/static/images/donor.png" alt="image" width="90" height="90"/>
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={1}>
                                <Image className="px-0 -ml-4 -mt-4 cursor-pointer" src="/static/images/Hover.png" alt="image" width="50" height="50"/>
                                </label>
                                <div
                                tabIndex={1}
                                className="dropdown-content card card-compact w-60 p-2 shadow bg-white mt-1"
                                >
                                <div className="card-body">
                                <Image className="px-0 -ml-4 -mt-4 cursor-pointer" src="/static/images/Hover.png" alt="image" width="30" height="30"/>
                                    <h3 className="text-lg">
                                    Hero, Royal and God tier donors are invited to an exclusive DirectEd Donor's Dinner taking place once a year at the University of Oxford.
                                    </h3>
                                </div>
                                </div>
                            </div>
                            </div>
                            <span className="flex justify-center items-center font-semibold text-sm">Donors' Dinner</span>
                        </div>
                        </div>
                </div>
                <div className="flex-auto md:w-2/5 h-full">
                    <div className="flex justify-center items-center mt-2">
                        <div className="relative box-border border border-[#999999] bg-white w-4/5 h-fit rounded-lg shadow">
                            <p className="text-center font-semibold m-3 text-lg">Naming Rights</p>
                            <div className="flex">
                                <div className="flex-auto w-2/6 h-full">
                                <Image className="px-0 ml-5 " src="/static/images/rights.png" alt="image" width="90" height="90"/>
                                </div>
                                <div className="flex-auto w-3/6 h-full">
                                    <p className="text-[13px] text-center">
                                    The donor naming rights for a given scholarship pool can be purchased for $3,000
                                    </p>
                                </div>
                                <div className="flex-auto w-1/6">

                                    <div className="dropdown dropdown-hover">
                                        <label tabIndex={1}>
                                        <Image className="cursor-pointer" src="/static/images/Hover.png" alt="image" width="20" height="20"/>
                                        </label>
                                        <div
                                            tabIndex={1}
                                            className="dropdown-content card card-compact w-60 p-2 shadow bg-white mt-1"
                                            >
                                            <div className="card-body">
                                                <Image className="px-0 -ml-4 -mt-4 cursor-pointer inline" src="/static/images/Hover.png" alt="image" width="30" height="30"/>
                                                <p className="font-semibold">What is A Naming Right?</p>
                                                <h3 className="text-sm">
                                                    Scholarship naming rights can be purchased. However, to protect the reputation and integrity of the scholarship, we reserve the right to reject and return donations from donors we deem, in our sole discretion, to be inappropriate to accept funds from. You can read the full terms 
                                                    <Link className="text-blue-400 pl-2" href="https://www.notion.so/directed/Gift-Acceptance-Policy-8e12a9c8581447ad8d89daabafbc7e44" passHref>
                                                        here.
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
            <div>

            </div>
            {/* <BsFilter className="p-0 text-[40px] cursor-pointer" /> */}
            <FilterMenu />
        </div>
    </>
    );
};

export default Hero;