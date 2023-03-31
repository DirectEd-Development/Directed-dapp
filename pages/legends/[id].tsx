import React from "react";
import { useRouter } from "next/router";
import { data } from "../../data/assets";
import Image from "next/image";
import { Meta } from "../../components";
import { FaChevronLeft } from 'react-icons/fa'

const Legend = () => {
  const router = useRouter();
  const pageId = Number(router.query.id);

  const singleAsset = data.filter((asset) => asset.id === pageId);

  return (
    <>
      {singleAsset.map((asset) => (
        <>
          <Meta title={asset.name} description={asset.caption} />

          <div className="legend" key={asset.id}>
            <div className="legend__heading">
              <button>
			  	<FaChevronLeft height={22} width={22}
					onClick={() => router.back()}
					className='go-back'
					size={35}
					color={'#374756'}
				/>
              </button>
              <h1 className="">{asset.name}</h1>
            </div>
            <Image src={asset.image} alt={asset.name} height={200} width={95}  unoptimized={true}/>
            <div className="legend__description">
              <p>{asset.description}</p>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Legend;
