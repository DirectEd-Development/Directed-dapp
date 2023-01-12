import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Modal from "../Modal";
import { CardanoWallet } from "@meshsdk/react";


type LinksType = {
  title: string;
  link: string;
};

const NavLinks: LinksType[] = [
  { title: "Scholarship Pools", link: "/" },
  { title: "", link: "/progress" },
  { title: "Donors' Portal", link: "/Donors" },
];

const Navbar = () => {
const [open, setOpen] = React.useState<boolean>(false);


  const router = useRouter();

  return (
    <>
      <nav className="bg-primary h-fit py-2 w-full">
        <div className="container flex  items-center justify-between w-full h-full">
          <Link href="https://directed.dev/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <Image
                id="logo"
                src="/static/images/logo.png"
                width={50}
                height={50}
                alt="Direct Ed Logo"
              />
              <div>
                <h1 className="text-white text-l font-semibold" id="title">
                  DirectEd Development
                </h1>
                <p className="text-white" id="subtitle">
                  Realising Potential
                </p>
              </div>
            </div>
          </Link>

          <ul className="hidden md:flex items-center space-x-5">
            {NavLinks.map((link: LinksType, index: number) => (
              <Link href={link.link} passHref>
                
                  <li
                    className={`text-xl text-white ${
                      router.pathname === link.link
                        ? "font-semibold"
                        : "font-light"
                    }`}
                  >
                    {link.title}
                  </li>
                
              </Link>
            ))}
            <div className="dropdown dropdown-hover">
              <label tabIndex={0}>
                <Link href={"/transactions"} style={{pointerEvents: "none"}} passHref>
                  
                    <li
                      className={`text-xl text-white ${
                        router.pathname === "/transactions"
                          ? "font-semibold"
                          : "font-light"
                      }`}
                    >
                      {/* Transactions */}
                    </li>
                  
                </Link>
              </label>
              <div
                tabIndex={0}
                className="dropdown-content card card-compact w-60 p-2 shadow bg-white mt-1"
              >
                <div className="card-body">
                  <h3 className="text-lg font-semibold">
                    The transaction page will be available after a donation has
                    been made
                  </h3>
                </div>
              </div>
            </div>
          </ul>

          <div className="bg-light text-primary hover:bg-light font-semibold hover:border-none">
            <CardanoWallet/>
          </div>
        </div>
      </nav>
      {/* Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className="w-fit space-y-8"
      >
        <h3 className="font-semibold text-2xl text-center w-64 capitalize">
          you have successfully connected a wallet!
        </h3>
        <button
          onClick={() => setOpen(false)}
          className="btn btn-primary btn-block"
        >
          Close
        </button>
      </Modal>
    </>
  );
};

export default Navbar;
