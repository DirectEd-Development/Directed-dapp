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
                <div className="font-bold text-xl mb-2">The Great Kasandra</div>
                <p className="text-gray-700 text-base">
                There once was the great invincible kingdom of Amara. Amara means the three distinct islands that made up the kingdom. Being a great kingdom, its ruler was outstanding and powerful; his name was Yunak. But in the midst of the normal way of life of the people of Amara there came an unexpected invasion from a long time despotic villain, Scarface. Scarface was not only Yunok's enemy but also Amara kingdom's greatest fear. <br />
                Scarface and his warriors had tactfully planned out their invasion. Yunak, through his unmovable boldness, had been able to take on toe to toe with his cruel foe. As time went by Yunak had grown older and most definitely weaker, scarface knew this and he attacked. Yunak and his warriors sorrowfully perished in the war. Scarface took over the rule of the amara kingdom and the genesis of his despotic yule began. <br />
                Kasandra was Yunak’s only daughter. Scarface had killed yunaks whole family but Kasandra despite being young and helpless escaped Scaface’s advance. Kasandra sought solace at her grandmother’s home in Morag, a distant island further from the Amara island. Day in day out reports of scarface enslavery of the Amara people were heard all over. <br />
                Kasandra had sworn to deliver the Amara kingdom from despotic rule of scarface. In Morag she trained herself following her father’s past teaching and of what she would see him do with his warriors. Kasandra’s grandmother Moana gave her a magic gem that belonged to her grandfather king Vigan and with time Kasandra grew strong and as bold as her father. She attacked scarface and his warriors at noon with the use of a magic gem that only worked if the bearer's willpower was strong enough, Kasandra destroyed scarface and his warriors and freed the people of Amara from scarface rule. </p>
            </div>
        </div>
      </main>
    </>
  );
};

export default stories;




