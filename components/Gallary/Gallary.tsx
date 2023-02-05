import React from "react";
import { NextPage } from "next";
import tw from "tailwind.macro";

interface Props {
  imageSrc: string;
  imageAlt: string;
  text: string;
}

const Card: NextPage<Props> = ({ imageSrc, imageAlt, text }) => {
  return (
    <div css={tw`max-w-sm rounded overflow-hidden shadow-lg`}>
      <img src={imageSrc} alt={imageAlt} css={tw`w-full`} />
      <div css={tw`px-6 py-4`}>
        <div css={tw`font-bold text-xl mb-2`}>{text}</div>
      </div>
    </div>
  );
};

export default Card;
