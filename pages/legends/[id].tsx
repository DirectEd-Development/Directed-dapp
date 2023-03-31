import React, { useState } from "react";
import { useWallet, useAssets } from "@meshsdk/react";
import { useRouter } from "next/router";
import { data } from "../../data/assets";
import Image from "next/image";
import { Meta } from "../../components";
import { FaChevronLeft } from "react-icons/fa";

const Legend = () => {
  const [hasPolicyIdAssetsChecked, setHasPolicyIdAssetsChecked] =
    useState<boolean>(false);

  const { connected, wallet } = useWallet();
  const assets = useAssets();
  const policyId = assets?.map((asset: any) => asset.policyId);

  const checkPolicyIdAssets = async (policyId: any) => {
    const assets = await wallet.getPolicyIdAssets(`${policyId}`);

    if (assets.length <= 0) {
      console.log("zero values");
    } else {
      setHasPolicyIdAssetsChecked(true);
    }
  };

  const router = useRouter();
  const pageId = Number(router.query.id);

  const singleAsset = data.filter((asset) => asset.id === pageId);

  if (connected && !hasPolicyIdAssetsChecked) {
    checkPolicyIdAssets(policyId);
  }

  return hasPolicyIdAssetsChecked ? (
    <>
      {singleAsset.map((asset) => (
        <div className="legend" key={asset.id}>
          <Meta title={asset.name} description={asset.caption} />

          <div className="legend__heading">
            <button>
              <FaChevronLeft
                height={22}
                width={22}
                onClick={() => router.back()}
                className="go-back"
                size={35}
                color={"#374756"}
              />
            </button>
            <h1 className="">{asset.name}</h1>
          </div>
          <Image
            src={asset.image}
            alt={asset.name}
            height={200}
            width={95}
            unoptimized={true}
          />
          <div className="legend__description">
            <p>{asset.description}</p>
          </div>
        </div>
      ))}
    </>
  ) : (
    <h3 className="donors-portal__no-donation">
      You need to make a donation to access this page
    </h3>
  );
};

export default Legend;
