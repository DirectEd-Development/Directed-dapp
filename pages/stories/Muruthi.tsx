import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const stories: NextPage = () => {
  return (
    <>
      <Head>
        <title>{"Student Stories"}</title>
      </Head>
      <main className="container grid grid-cols-1 gap-10 py-8  justify-items-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 justify-items-center">
                <div className="font-bold text-xl mb-2">Muruthi was his name</div>
                <p className="text-gray-700 text-base">
                From his childhood he suffered untold misery. Growing up after losing his father 
                and being thrown away by the pack. This made him gain the urge of proving a point 
                to the others. That he was strong and not a weakling. He developed a fearless, 
                merciless character. He had the ardent ambition to always take the extra step where 
                no one else in their right mind was willing to. He was not only physically fit and 
                fearless but also had no weakness as his heart clouded his judgment. His ardent 
                ambition to seek recognition made him put everything behind him for the sake of 
                the community. His ruthless and merciless character never withstanding atrocities 
                committed against him and his kinsmen made him the most revered heroes of the 
                community. His past of abandonment was always brought up making him feel inferior, 
                weak and vulnerable. However strong he was, mentally he was frail. He took this as 
                an opportunity to become better, get more accomplishments. His eyes glowed with 
                the passion, the desire to not only be the most feared, but the best warrior to 
                ever walk the earth. His sheer determination made him a sole sojourner but he 
                always carried his community on his back not caring about anyone’s wishes. </p>
            </div>
        </div>
      </main>
    </>
  );
};

export default stories;




