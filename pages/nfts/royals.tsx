import { useState, useEffect } from "react";
import { useWallet, useAssets } from "@meshsdk/react";
import { AssetCard, Meta } from "../../components";
import { data } from "../../data/royal";
import Image from "next/image";

const POLICY_ID = "07f40263969617defb3d50aaf54c822e95f814af8ea75ae89aa133b5";

export default function Home() {
  const [hasPolicyIdAssetsChecked, setHasPolicyIdAssetsChecked] =
    useState<boolean>(false);

  const { connected, wallet } = useWallet();
  const assets: any = useAssets();

  const checkPolicyIdAssets = async () => {
    if (connected && wallet) {
      const assets = await wallet.getPolicyIdAssets(POLICY_ID);

      if (assets.length <= 0) {
        setHasPolicyIdAssetsChecked(false); // No assets found with the given policy ID
      } else {
        setHasPolicyIdAssetsChecked(true); // Assets found with the given policy ID
      }
    }
  };

  useEffect(() => {
    checkPolicyIdAssets();
  }, [connected, assets]);

  return (
    <>
      <Meta
        title="Royal NFTS"
        description="DirectEd Royal NFTs"
      />
      <main className="nft-assets">
        <div className="nft-assets"></div>
        {hasPolicyIdAssetsChecked ? (
          <>
            <div className="nft-assets__singlenfts">
              {data.map((item, index) => {
                return (
                  <a key={index} href={item.url}>
                    <img src={item.image} alt={item.title} width={150}
			              height={150} />
                  </a>
                );
              })}
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
