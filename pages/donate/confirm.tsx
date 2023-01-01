import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Button } from "../../components";
import { sleep } from "../../utils";

const data: any = {
  "Owner’s address": "addr93d9wek0wewjewas34asd3er4refsdfdsf",
  "Script hash": "drewrfe4323423432432434sdasdds",
  "ADA donated": "500",
  "Token received": "asset4303asd",
  "Total fees": "0.1634",
};

const Confirm: NextPage = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const handleConfirm = async () => {
    setLoading(true);
    await sleep(2000).then(() => {
      setLoading(false);
      router.push("/?from=donation");
    });
  };

  return (
    <>
      <Head>
        <title>Donation Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container w-full py-4">
        <div className="space-y-8 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-dark2 text-center font-bold">
            Donation Details
          </h1>

          <ul className="mx-auto w-full md:w-1/2 h-fit p-5 bg-light2 rounded-md space-y-6">
            {Object.keys(data).map((dt: string) => (
              <li className="w-full flex items-center space-x-3 md:space-x-10">
                <span className="w-1/4">{dt}</span>
                <span className="truncate">{data[dt]}</span>
              </li>
            ))}
            <li className="w-full flex items-center space-x-3 md:space-x-10">
              <span className="w-1/4 flex items-center space-x-2">
                <span>Deadline</span> <AiOutlineQuestionCircle />
              </span>
              <span>11/23/24</span>
            </li>
          </ul>
          <Button
            onCick={handleConfirm}
            loading={loading}
            loadingIndicator="processing..."
            className="capitalize btn btn-primary w-36"
          >
            Done
          </Button>
        </div>
      </main>
    </>
  );
};

export default Confirm;
