import { useState } from "react";
import { useWallet, useAssets } from "@meshsdk/react";
import { AssetCard, Meta } from "../../components";
import { data } from "../../data/assets";
import Image from "next/image";

export default function Home() {
  const [hasPolicyIdAssetsChecked, setHasPolicyIdAssetsChecked] =
    useState<boolean>(false);

  const [filterInput, setFilterInput] = useState<string>(""); // state to hold the user's filter input
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

  const filteredAssets = data.filter((asset) => {
    return asset.name.toLowerCase().includes(filterInput.toLowerCase()); // filter the assets based on the user's input
  });

  if (connected) {
    checkPolicyIdAssets(policyId);
  }

  const handleFilterInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterInput(event.target.value); // update the state with the user's input
  };

  return (
    <>
      <Meta
        title="Donor's Portal"
        description="Direced Ed donors portal page"
      />
      <main className="donors-portal">
        <div className="donors-portal__filter"></div>
        {hasPolicyIdAssetsChecked ? (
          <>
            <div className="donors-portal__assets">
              <div className="donors-portal__assets_header">
                <h1>Gallery</h1>
                <input
                  type="text"
                  placeholder="Filter assets"
                  value={filterInput}
                  onChange={handleFilterInput}
                />
              </div>
              <AssetCard assets={filteredAssets} />
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
