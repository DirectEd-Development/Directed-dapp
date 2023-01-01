import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { FaChevronLeft } from "react-icons/fa";
import { Modal } from "../../components";

const amounts: string[] = ["₳1000", "₳40" ];

const Donate: NextPage = () => {
  const [amount, setAmount] = React.useState<string>("");
  const [image, setImage] = React.useState<number | null>(null);
  const [modal, setModal] = React.useState<boolean>(false);
  const router = useRouter();

  const handleDonate = () => {
    if (amount === "₳1000") {
      router.push("https://pay.nmkr.io/?p=fbd4da6ef7b14acda66dff5515877a46&c=1");
    } else {
        if (amount === "₳40")
        router.push("https://pay.nmkr.io/?p=296d3a8e72444590856ccc902b67f9b3&c=1");
    }
  };

  return (
    <>
      <Head>
        <title>Donate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-full h-32 md:h-48">
        <Image src="/static/images/banner.png" alt="banner" 
        height={500} 
        width={1500} />
      </div>
      <main className="container w-full py-4 space-y-8">
        <div className="flex items-center">
          <button
            onClick={() => router.back()}
            className="btn btn-ghost text-primary text-xl md:text-3xl"
          >
            <FaChevronLeft />
          </button>
          <div className="flex-grow">
            <h1 className="text-xl md:text-4xl text-dark2 text-center font-bold">
              Donate to Kagumo High School
            </h1>
          </div>
        </div>
        <div className="space-y-8 flex flex-col items-center justify-center">
          <h1 className="text-center text-2xl text-black">
            Select Donation Amount
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-10 justify-items-center justify-center">
            {amounts.map((amt: string, index: number) => (
              <button
                onClick={() => {
                  setAmount(amt);
                  setImage(index + 111);
                }}
                className={`btn w-36 ${
                  amount === amt ? "btn-primary" : "bg-gray-200 btn-ghost"
                }`}
              >
                {amt}
              </button>
            ))}
          </div>
          {amount && (
            <div className="space-y-2 flex flex-col items-center ">
              <Image
                onClick={() => setModal(true)}
                src={`/static/images/${image ? image : 111}.png`}
                alt="NFT"
                width={100}
                height={100}
                className="rounded-md cursor-pointer"
              />
              <p>
              Click to see a sample NFT
              </p>
            </div>
          )}
          <button
            onClick={handleDonate}
            className="capitalize btn btn-primary w-36"
          >
            Donate Now
          </button>
        </div>
      </main>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        className="w-full md:w-100 h-100 shadow-2xl"
      >
        <Image
          src={`/static/images/${image ? image : 111}.png`}
          alt="NFT"
          height={150}
          width={1560}
          className="cursor-pointer"
        />
      </Modal>
    </>
  );
};


export default Donate;
