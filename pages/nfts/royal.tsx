import { useState, useEffect } from "react";
import { useWallet, useAssets } from "@meshsdk/react";
import { AssetCard, Meta } from "../../components";
import Button from '../../components/Button/Button'
import { data } from "../../data/royal"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const [selectedSchool, setSelectedSchool] = useState(null);
  const router = useRouter();

  const query = router.asPath.split("?")[1];


  return (
    <>
      <Meta
        title="NFT's Portal"
        description="Directed Ed NFT's portal page"
      />
      <main className="nft-portal">
        <div className="nft-portal__filter"></div>
        <>
          <div className="nft-portal__assets">
            <div className="nft-portal__assets_header">
              <h3>Pick which Royal you’d like</h3>
              <Link href="/nfts/nft">
                <Button disabled variant='primary'>Edit Metadata</Button>
              </Link>
            </div>
            {data.filter(item => item.school === query).map((image: { title: string, image: string, url: string, }, index: number) => (
              <div key={index} className={image.url ? 'nft-portal__asset' : 'nft-portal__asset disabled'}>
                <a target="_blank" href={image.url}>
                  <Image src={image.image} alt={image.title} width={200} height={200} />
                </a>
              </div>
            ))}
          </div>
        </>
      </main>
    </>
  );
}
