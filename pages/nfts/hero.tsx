import { useState, useEffect } from "react";
import { useWallet, useAssets } from "@meshsdk/react";
import { AssetCard, Meta } from "../../components";
import { data } from "../../data/royal";
import Image from "next/image";

const POLICY_ID = "0041a2fd8c4cbe28323a874baf3683c500f8bd173f6192ded1ef1804";

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
        title="Hero NFTS"
        description="DirectEd Hero NFTs"
      />
      <main className="nft-assets">
        <div className="nft-assets"></div>
        {hasPolicyIdAssetsChecked ? (
          <>
            <h3>Pick which Hero you’d like</h3>
            <div className="nft-assets__singlenfts">
              {data.map((item, index) => {
                return (
                  <a target="_blank" key={index} href={item.url}>
                    <img src={item.image} alt={item.title} width={200}
			              height={200} />
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
