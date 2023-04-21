import { useState, useEffect } from "react";
import { useWallet, useAssets } from "@meshsdk/react";
import { AssetCard, Meta } from "../../components";
import { data } from "../../data/royal";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";


export default function Home() {
  const [nfts, setNfts] = useState<{[key: string]: any}>({});
  const [hasPolicyIdAssetsChecked, setHasPolicyIdAssetsChecked] =
    useState<boolean>(false);

    const { connected, wallet } = useWallet();
    const assets: any = useAssets();
    const router = useRouter();
    const params = router.pathname.split("/")[2];

  // const checkPolicyIdAssets = async () => {
  //   if (connected && wallet) {
  //     const assets = await wallet.getPolicyIdAssets(POLICY_ID);

  //     if (assets.length <= 0) {
  //       setHasPolicyIdAssetsChecked(false); // No assets found with the given policy ID
  //     } else {
  //       setHasPolicyIdAssetsChecked(true); // Assets found with the given policy ID
  //     }
  //   }
  // };

  // useEffect(() => {
  //   checkPolicyIdAssets();
  // }, [connected, assets]);

  useEffect(() => {
    const getNfts = async() => {
      try{
        const res = await axios.post("https://app.directed.dev/api/transactions", {params: params});
        const mergeRes = [].concat(...res.data);
        setNfts(mergeRes);
      }catch(err) {
        console.log(err);
      }
    }
    getNfts();
  },[]);

  return (
    <>
      <Meta
        title="Royal NFTS"
        description="DirectEd Royal NFTs"
      />

      <main className="nft-assets">
        <div className="nft-assets"></div>
        {/* {hasPolicyIdAssetsChecked ? ( */}
          <>
            <h3>Pick which Royal you’d like</h3>
            <div className="nft-assets__singlenfts">
              {nfts.length > 0 && nfts.map((item:any) => {
                return (
                  <a target="_blank" key={item.id} href={item.paymentGatewayLinkForSpecificSale}>
                    <img src={`https://ipfs.io/ipfs/${item.ipfsLink.split("/")[2]}`} alt={item.title} width={200}
			              height={200} />
                  </a>
                );
              })}
            </div>

          </>
        {/* ) : (
          <h3 className="donors-portal__no-donation">
            You need to make a donation to access this page
          </h3>
        )} */}
      </main>
    </>
  );
}
