import { useState } from "react";
import { useWallet, useAssets } from "@meshsdk/react";
import { AssetCard, Meta } from "../../components";
// import { GetStaticProps } from 'next'
// import { Assets } from '../../types/assets'
import { data } from "../../data/assets";
import Image from "next/image";

// import galleryIcon2 from "../../icons/Vector (3).png";
// import galleryIcon1 from "../../icons/Vector-1.png";

// const server = 'http://localhost:3000'

// type Asset = {
// 	unit: string
// 	policyId: string
// 	assetName: string
// 	fingerprint: string
// 	quantity: string
// }

// { assetsData }: { assetsData: Assets[] }

export default function Home() {
  const [hasPolicyIdAssetsChecked, setHasPolicyIdAssetsChecked] =
    useState<boolean>(false);

  const { connected, wallet } = useWallet();

  const assets: any = useAssets();
  const policyId = assets?.map((asset: any) => asset.policyId);

  const checkPolicyIdAssets = async (policyId: any) => {
    const assets = await wallet.getPolicyIdAssets(`${policyId}`);

    if (assets.length <= 0) {
      console.log("zero values");
    } else {
      setHasPolicyIdAssetsChecked(true);
    }
  };

  if (connected) {
    checkPolicyIdAssets(policyId);
  }

  return (
    <>
      <Meta
        title="Donor's Portal"
        description="Direced Ed donors portal page"
      />
      <main className="donors-portal">
        {hasPolicyIdAssetsChecked ? (
          <>
            <div className="donors-portal__assets">
              <div className="donors-portal__assets_header">
                <h1>Gallery</h1>
                {/* <div className="icons">
                  <button>
                    <Image src={galleryIcon1} alt="galleryIcon" />
                  </button>
                  <button>
                    <Image src={galleryIcon2} alt="galleryIcon" />
                  </button>
                </div> */}
              </div>
              <AssetCard assets={data} />
            </div>
          </>
        ) : (
          <h3 className="donors-portal__no-donation">
            You need to make a donation to access this page
          </h3>
        )}
      </main>
    </>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
// 	const res = await fetch(`/api/getAssets`)
// 	const assetsData = await res.json()

// 	return {
// 		props: {
// 			assetsData,
// 		},
// 	}
// }


