import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Button, Modal, PoolCard, FilterMenu } from "../components";
import { useRouter } from "next/router";
import Link from "next/link";


import { hasCookie, setCookie } from "cookies-next";
import Image from "next/image";


type DataType = {
  title: string;
  image: string;
};

const data: DataType[] = [
  {
    title: "Kagumo-Djed Scholarship Pool",
    image: "/static/images/kagumo.jpg",
  },
  // {
  //   title: "Strathmore High School",
  //   image: "/static/images/person2.png",
  // }
];

const Home: NextPage = () => {
  const [modal, setModal] = React.useState<
    "donate-done" | "how-to-donate" | "video" | ""
  >("");

  const router = useRouter();

  const handleDonationModal = () => {
    setModal("");
    router.push("/progress");
  };
  React.useEffect(() => {
    if (router.query && router.query.from === "donation") {
      setModal("donate-done");
    }
  }, [router.query]);

  React.useEffect(() => {
    if (!hasCookie("direct-ed-user")) {
      setModal("how-to-donate");
      setCookie("direct-ed-user", "not a stranger", { maxAge: 60 * 60 * 24 });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Direct Ed - Scholarship Pools</title>
      </Head>
      <main className="container grid grid-cols-1 gap-y-7 py-8  justify-items-center h-fit">
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

        {data.map((d: DataType) => (
          <PoolCard key={d.title} {...d} />
        ))}
      </main>
      {/* Donate Modal */}
      <Modal
        open={modal === "donate-done"}
        onClose={() => setModal("")}
        className="h-fit rounded-md bg-light w-fit p-5 md:w-2/5 space-y-6 flex flex-col justify-center items-center"
      >
        <h1 className="text-3xl font-bold text-dark2 text-center">
          Thank you for your donation to DirectEd
        </h1>
        <p className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
          debitis eligendi necessitatibus? Nam officiis repudiandae eveniet
          doloremque, a esse inventore odit similique illo at quod enim labore
          atque. Ipsa, tempore.
        </p>

        <Button
          onCick={handleDonationModal}
          className="btn-ghost bg-light2 text-primary font-bold text-lg w-fit"
        >
          {"View Scholar’s Progress"}
        </Button>
      </Modal>
      {/* How To Modal */}
      <Modal
        open={modal === "how-to-donate"}
        onClose={() => setModal("")}
        className="h-fit rounded-md bg-light w-fit p-5 md:w-1/4 space-y-5 flex flex-col justify-center items-center"
      >
        <h1 className="text-3xl font-bold text-dark2 text-center">
          How To Donate
        </h1>
        <p className="text-sm text-center">
          To donate, navigate to the scholarship pool of your choice and press donate. 
          There’s no need to connect your wallet for now! After this step, you’ll see two 
          options: Warrior tier (40 ADA) and Hero tier (1000 ADA).
        </p>
        <p className="text-sm text-center">
          After selecting an option and pressing continue, you’ll be directed to the dedicated 
          NMKR pay gateway for you to complete your donation!
        </p>
        <h5 className="text-3xl font-bold text-dark2 text-center">
          I don’t know about crypto. Can I still donate?
        </h5>
        <p className="text-sm text-center">
         If you are not a crypto user and want to donate using credit card, here's a video guide that'll walk you through the process
        </p>

        <div className="w-full h-40 relative">
          <Image
            onClick={() => setModal("video")}
            src="/static/images/video.png" width="300"
            height="200"
            alt="image"
          />
        </div>
        <Button
          onCick={handleDonationModal}
          className="btn-ghost bg-light2 text-primary font-bold text-lg w-fit"
        >
          <Link href={"https://www.notion.so/directed/About-DirectEd-Lions-Collection-0e6003940695493b81c3c1f16841d208"} passHref
            onClick={() => setModal("video")}
            // height={200}
            // alt="image"
            >
            Learn more
          </Link>

        </Button>
      </Modal>
      {/* Video modal */}
      <Modal
        open={modal === "video"}
        onClose={() => setModal("how-to-donate")}
        className="h-64 relative rounded-3xl overflow-hidden  w-full p-5 md:w-2/5 flex flex-col justify-center items-center"
      >
        <a target="_blank" rel="noopener noreferrer" href="https://www.loom.com/share/ad317540b22b4722b71410f15fb84a14">
        <video autoPlay style={{ width: '300px', height: '200px' }}>
          <source src="/static/videos/how-to-donate.mp4" />
        </video>
        </a>
      </Modal>
    </>
  );
};

export default Home;
