import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Donors' Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* container */}
      <main className="container">
        <div className="bg-gray-100 flex h-screen items-center justify-center gap-2 flex-wrap">
          {/* product card */}
          <div className="bg-white duration-300 flex flex-col max-w-xs shadow-lg space-y-2 transform hover:-translate-y-2">
            {/* image */}
            <div className="flex justify-center pt-0">
              <img className="w-75" src="/static/images/1.png" alt="Image"
              width="130"
              height="130"
              />
            </div>

            {/* title, options and quantity */}
            <div className="flex flex-col px-4 space-y-1">
              <div className="flex flex-col -space-y-0.5">
              <h5 className="text-center">Muruthi</h5>
                <Link href={"./stories/Muruthi"}>
                  <p className="text-orange-500 text-xs text-center">View Story</p>
                </Link>
              </div>
            </div>
          </div>

          {/* product card */}
          <div className="bg-white duration-300 flex flex-col max-w-xs shadow-lg space-y-2 transform hover:-translate-y-2">
            {/* image */}
            <div className="flex justify-center pt-0">
              <img className="w-75" src="/static/images/2.png" alt="Image"
              width="130"
              height="130"
              />
            </div>

            {/* title, options and quantity */}
            <div className="flex flex-col px-4 space-y-1">
              <div className="flex flex-col -space-y-0.5">
                <h5 className="text-center">Ngwenyama</h5>
                <Link href={"./stories/Ngwenyama"}>
                  <p className="text-orange-500 text-xs text-center">View Story</p>
                </Link>
              </div>
            </div>
          </div>
          
          {/* NFTS*/}
          <div className="bg-white duration-300 flex flex-col max-w-xs shadow-lg space-y-2 transform hover:-translate-y-2">
            {/* image */}
            <div className="flex justify-center pt-0">
              <img className="w-75" src="/static/images/3.png" alt="Image"
              width="130"
              height="130"
              />
            </div>

            {/* title, options */}
            <div className="flex flex-col px-4 space-y-1">
              <div className="flex flex-col -space-y-0.5">
                <h5 className="text-center">Sahara</h5>
                <Link href={"./stories/Sahara"}>
                  <p className="text-orange-500 text-xs text-center">View Story</p>
                </Link>
              </div>
            </div>
          </div>

          {/* NFTS*/}
          <div className="bg-white duration-300 flex flex-col max-w-xs shadow-lg space-y-2 transform hover:-translate-y-2">
            {/* image */}
            <div className="flex justify-center pt-0">
              <img className="w-75" src="/static/images/4.png" alt="Image"
              width="130"
              height="130"
              />
            </div>

            {/* title, options */}
            <div className="flex flex-col px-4 space-y-1">
              <div className="flex flex-col -space-y-0.5">
                <h5 className="text-center">Saritavak</h5>
                <Link href={"./stories/Saritavak"}>
                  <p className="text-orange-500 text-xs text-center">View Story</p>
                </Link>
              </div>
            </div>
          </div>

          {/* NFTS*/}
          <div className="bg-white duration-300 flex flex-col max-w-xs shadow-lg space-y-2 transform hover:-translate-y-2">
            {/* image */}
            <div className="flex justify-center pt-0">
              <img className="w-75" src="/static/images/5.png" alt="Image"
              width="130"
              height="130"
              />
            </div>

            {/* title, options */}
            <div className="flex flex-col px-4 space-y-1">
              <div className="flex flex-col -space-y-0.5">
                <h5 className="text-center">Ligaro</h5>
                <Link href={"./stories/Ligaro"}>
                  <p className="text-orange-500 text-xs text-center">View Story</p>
                </Link>
              </div>
            </div>
          </div>

          {/* NFTS*/}
          <div className="bg-white duration-300 flex flex-col max-w-xs shadow-lg space-y-2 transform hover:-translate-y-2">
            {/* image */}
            <div className="flex justify-center pt-0">
              <img className="w-75" src="/static/images/6.png" alt="Image"
              width="130"
              height="130"
              />
            </div>

            {/* title, options */}
            <div className="flex flex-col px-4 space-y-1">
              <div className="flex flex-col -space-y-0.5">
                <h5 className="text-center">Locan</h5>
                <Link href={"./stories/Locan"}>
                  <p className="text-orange-500 text-xs text-center">View Story</p>
                </Link>
              </div>
            </div>
          </div>

          {/* NFTS*/}
          <div className="bg-white duration-300 flex flex-col max-w-xs shadow-lg space-y-2 transform hover:-translate-y-2">
            {/* image */}
            <div className="flex justify-center pt-0">
              <img className="w-75" src="/static/images/7.png" alt="Image"
              width="130"
              height="130"
              />
            </div>

            {/* title, options */}
            <div className="flex flex-col px-4 space-y-1">
              <div className="flex flex-col -space-y-0.5">
                <h5 className="text-center">Jumbo</h5>
                <Link href={"./stories/Jumbo"}>
                  <p className="text-orange-500 text-xs text-center">View Story</p>
                </Link>
              </div>
            </div>
          </div>

          {/* NFTS*/}
          <div className="bg-white duration-300 flex flex-col max-w-xs shadow-lg space-y-2 transform hover:-translate-y-2">
            {/* image */}
            <div className="flex justify-center pt-0">
              <img className="w-75" src="/static/images/8.png" alt="Image"
              width="130"
              height="130"
              />
            </div>

            {/* title, options */}
            <div className="flex flex-col px-4 space-y-1">
              <div className="flex flex-col -space-y-0.5">
                <h5 className="text-center">Theolas</h5>
                <Link href={"./stories/Theolas"} >
                  <p className="text-orange-500 text-xs text-center">View Story</p>
                </Link>
              </div>
            </div>
          </div>

          {/* NFTS*/}
          <div className="bg-white duration-300 flex flex-col max-w-xs shadow-lg space-y-2 transform hover:-translate-y-2">
            {/* image */}
            <div className="flex justify-center pt-0">
              <img className="w-75" src="/static/images/9.png" alt="Image"
              width="130"
              height="130"
              />
            </div>

            {/* title, options */}
            <div className="flex flex-col px-4 space-y-1">
              <div className="flex flex-col -space-y-0.5">
                <h5 className="text-center">Shishu</h5>
                <Link href={"./stories/Shishu"}>
                  <p className="text-orange-500 text-xs text-center">View Story</p>
                </Link>
              </div>
            </div>
          </div>

          {/* NFTS*/}
          <div className="bg-white duration-300 flex flex-col max-w-xs shadow-lg space-y-2 transform hover:-translate-y-2">
            {/* image */}
            <div className="flex justify-center pt-0">
              <img className="w-75" src="/static/images/10.png" alt="Image"
              width="130"
              height="130"
              />
            </div>

            {/* title, options */}
            <div className="flex flex-col px-4 space-y-1">
              <div className="flex flex-col -space-y-0.5">
                <h5 className="text-center">Mojang</h5>
                <Link href={"./stories/Mojang"} >
                  <p className="text-orange-500 text-xs text-center">View Story</p>
                </Link>
              </div>
            </div>
          </div>

          {/* NFTS*/}
          <div className="bg-white duration-300 flex flex-col max-w-xs shadow-lg space-y-2 transform hover:-translate-y-2">
            {/* image */}
            <div className="flex justify-center pt-0">
              <img className="w-75" src="/static/images/11.png" alt="Image"
              width="130"
              height="130"
              />
            </div>

            {/* title, options */}
            <div className="flex flex-col px-4 space-y-1">
              <div className="flex flex-col -space-y-0.5">
                <h5 className="text-center">Zimba</h5>
                <Link href={"./stories/Zimba"}>
                  <p className="text-orange-500 text-xs text-center">View Story</p>
                </Link>
              </div>
            </div>
          </div>

          {/* NFTS*/}
          <div className="bg-white duration-300 flex flex-col max-w-xs shadow-lg space-y-2 transform hover:-translate-y-2">
            {/* image */}
            <div className="flex justify-center pt-0">
              <img className="w-75" src="/static/images/12.png" alt="Image"
              width="130"
              height="130"
              />
            </div>

            {/* title, options */}
            <div className="flex flex-col px-4 space-y-1">
              <div className="flex flex-col -space-y-0.5">
                <h5 className="text-center">Tanya</h5>
                <Link href={"./stories/Tanya"}>
                  <p className="text-orange-500 text-xs text-center">View Story</p>
                </Link>
              </div>
            </div>
          </div>

          {/* NFTS*/}
          <div className="bg-white duration-300 flex flex-col max-w-xs shadow-lg space-y-2 transform hover:-translate-y-2">
            {/* image */}
            <div className="flex justify-center pt-0">
              <img className="w-75" src="/static/images/13.png" alt="Image"
              width="130"
              height="130"
              />
            </div>

            {/* title, options */}
            <div className="flex flex-col px-4 space-y-1">
              <div className="flex flex-col -space-y-0.5">
                <h5 className="text-center">Ciara</h5>
                <Link href={"./stories/Ciara"}>
                  <p className="text-orange-500 text-xs text-center">View Story</p>
                </Link>
              </div>
            </div>
          </div>

          {/* NFTS*/}
          <div className="bg-white duration-300 flex flex-col max-w-xs shadow-lg space-y-2 transform hover:-translate-y-2">
            {/* image */}
            <div className="flex justify-center pt-0">
              <img className="w-75" src="/static/images/14.jpg" alt="Image"
              width="130"
              height="130"
              />
            </div>

            {/* title, options */}
            <div className="flex flex-col px-4 space-y-1">
              <div className="flex flex-col -space-y-0.5">
                <h5 className="text-center">Atilla</h5>
                <Link href={"./stories/Atilla"}>
                  <p className="text-orange-500 text-xs text-center">View Story</p>
                </Link>
              </div>
            </div>
          </div>

          {/* NFTS*/}
          <div className="bg-white duration-300 flex flex-col max-w-xs shadow-lg space-y-2 transform hover:-translate-y-2">
            {/* image */}
            <div className="flex justify-center pt-0">
              <img className="w-75" src="/static/images/15.png" alt="Image"
              width="130"
              height="130"
              />
            </div>

            {/* title, options */}
            <div className="flex flex-col px-4 space-y-1">
              <div className="flex flex-col -space-y-0.5">
                <h5 className="text-center">Nemea</h5>
                <Link href={"./stories/Nemea"}>
                  <p className="text-orange-500 text-xs text-center">View Story</p>
                </Link>
              </div>
            </div>
          </div>

          {/* NFTS*/}
          <div className="bg-white duration-300 flex flex-col max-w-xs shadow-lg space-y-2 transform hover:-translate-y-2">
            {/* image */}
            <div className="flex justify-center pt-0">
              <img className="w-75" src="/static/images/16.png" alt="Image"
              width="130"
              height="130"
              />
            </div>

            {/* title, options */}
            <div className="flex flex-col px-4 space-y-1">
              <div className="flex flex-col -space-y-0.5">
                <h5 className="text-center">Kasandra</h5>
                <Link href={"./stories/Kasandra"}>
                  <p className="text-orange-500 text-xs text-center">View Story</p>
                </Link>
              </div>
            </div>
          </div>

          {/* NFTS*/}
          <div className="bg-white duration-300 flex flex-col max-w-xs shadow-lg space-y-2 transform hover:-translate-y-2">
            {/* image */}
            <div className="flex justify-center pt-0">
              <img className="w-75" src="/static/images/17.png" alt="Image"
              width="130"
              height="130"
              />
            </div>

            {/* title, options */}
            <div className="flex flex-col px-4 space-y-1">
              <div className="flex flex-col -space-y-0.5">
                <h5 className="text-center">Tefra</h5>
                <Link href={"./stories/Tefra"}>
                  <p className="text-orange-500 text-xs text-center">View Story</p>
                </Link>
              </div>
            </div>
          </div>

          {/* NFTS*/}
          <div className="bg-white duration-300 flex flex-col max-w-xs shadow-lg space-y-2 transform hover:-translate-y-2">
            {/* image */}
            <div className="flex justify-center pt-0">
              <img className="w-75" src="/static/images/18.jpg" alt="Image"
              width="130"
              height="130"
              />
            </div>

            {/* title, options */}
            <div className="flex flex-col px-4 space-y-1">
              <div className="flex flex-col -space-y-0.5">
                <h5 className="text-center">Kaleen</h5>
                <Link href={"./stories/Kaleen"}>
                  <p className="text-orange-500 text-xs text-center">View Story</p>
                </Link>
              </div>
            </div>
          </div>

          {/* NFTS*/}
          <div className="bg-white duration-300 flex flex-col max-w-xs shadow-lg space-y-2 transform hover:-translate-y-2">
            {/* image */}
            <div className="flex justify-center pt-0">
              <img className="w-75" src="/static/images/19.jpg" alt="Image"
              width="130"
              height="130"
              />
            </div>

            {/* title, options */}
            <div className="flex flex-col px-4 space-y-1">
              <div className="flex flex-col -space-y-0.5">
                <h5 className="text-center">Kola</h5>
                <Link href={"./stories/Kola"}>
                  <p className="text-orange-500 text-xs text-center">View Story</p>
                </Link>
              </div>
            </div>
          </div>

          {/* NFTS*/}
          <div className="bg-white duration-300 flex flex-col max-w-xs shadow-lg space-y-2 transform hover:-translate-y-2">
            {/* image */}
            <div className="flex justify-center pt-0">
              <img className="w-75" src="/static/images/20.png" alt="Image"
              width="130"
              height="130"
              />
            </div>

            {/* title, options */}
            <div className="flex flex-col px-4 space-y-1">
              <div className="flex flex-col -space-y-0.5">
                <h5 className="text-center">Kazu</h5>
                <Link href={"./stories/Kazu"}>
                  <p className="text-orange-500 text-xs text-center">View Story</p>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
