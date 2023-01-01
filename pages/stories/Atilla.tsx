import { NextPage } from "next";
import Head from "next/head";
const stories: NextPage = () => {
  return (
    <>
      <Head>
        <title>{"Student Stories"}</title>
      </Head>
      <main className="container grid grid-cols-1 gap-10 py-8  justify-items-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 ">
                <div className="font-bold text-xl mb-2">Atilla of Bakshir</div>
                <p className="text-gray-700 text-base">
                Atilla, a name whose glory lives in the hearts of many beasts of Bakshir was bestowed to the queen of the land bads in the tenth century.
                Twelve years before her ruling began, a young cub of a forgotten royal blooding was born. At the period of her birth, war and chaos had become the norm in the land of bakshir as many lives came to a halt, some of them succumbed as mere casualties at a war they had not indulged in. <br />
                Growing up, fear became a strong part of her life and the lives of their generation so much so that their oppressors began to take them as captives and some even butchered and none of the beast of Bakshir could dare lift a voice. <br />
                Noble beast of the land put their life on the line and decided to fight the noble fight whose fruits would be reaped by their future generation. This kind of courage not only influenced and inspired Atilla but made her break free from her cocoon of fear. Atilla enrolled for the recruitment and trained hard and as time went by, her leadership skills began to blossom and she found favor in the eyes of her superiors and she slowly began to rise up the ranks.
                Atilla changed their perspective of war and headed strategic wars that put them at an advantage despite the inferior nature of their pride. Turns out a good strategy was all the people of Bakshir required to set themselves free from bondage. </p>
            </div>
        </div>
      </main>
    </>
  );
};

export default stories;




