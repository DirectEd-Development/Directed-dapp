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
                <div className="font-bold text-xl mb-2">The Story of Mojang</div>
                <p className="text-gray-700 text-base">
                This is the story of Mojang from Tigeritis. He was born of a lion mother and had a tiger for a father. Being a half breed, his father noticed his difference and decided to kick him out. He wandered through the plains, surviving off scraps, which he shared with vultures; he was able to survive until he became an adolescent. Through these hardships mojang developed a resentment towards his pride father who kicked him
                out for being different. In wonders, he was fortunate to be being different assimilated into a tribe of
                rival lions due to his extraordinary strength, speed, agility and intelligence which surprised the
                average lion. It did not take long until he was a fully-fledged member to the extent of being the prides leader right hand lion.
                Due to his status he was able to overhear plans to overthrow his pride fathers pride. His resolve was
                tested and he was torn between what he had built up or his family who had turned theirs back to
                him. He battled with himself till he realized that was blood was thicker than water.
                He decided to fight for his family, whatever it have cost him. He approached the pride leader and
                tried to convince him to change his mind but he refused and called him traitor. They had a fierce
                battle to decide who the leader of the pride where Mojang won.
                Mojang called off the attack and declined to make amends with his father. He was finally accepted as
                a leader by both prides. </p>
            </div>
        </div>
      </main>
    </>
  );
};

export default stories;




