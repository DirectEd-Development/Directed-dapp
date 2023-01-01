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
                <div className="font-bold text-xl mb-2">The Rightful Heir</div>
                <p className="text-gray-700 text-base">
                His name is Locan. At five hundred years ruling the zonama forest he is the longest serving king known to the world. Born to the king Samba and queen Nala, he was rejected at birth. Samba wanted a daughter, to bethrol to the neighbouring prince Uzbers. <br /><br />
                Locan’s birth came as a shock to Samba, which made him abandon Locan at a nearby enchanted
                waterfall. Locan’s cries reached out to the gods and Asmodues; the god of thunder and prosperity, went to his aid. Locan was bestowed with ethereal powers, seeing the future through his radiant blue eyes, sensing fear in enemies through his all-feeling mane and the ability to stop time. <br /><br />
                Using his new powers, Locan commanded respect in all of the Zonama forest. At only twenty five years Locan was a mighty soldier in the kings army – his father’s army. However Locan knew of his father’s
                deed. Samba called all of his army to fight against Locan. Using one swift dash across the sound barrier, Locan penetrated the army and got to the top of the cliff where Samba was. <br /><br />
                One swift blow and Samba was dead at the bottom of the cliff, being the rightful heir to the throne, the forest of Zonama bestowed him the crown on his name giving him power over all the seasons, elements and powers of the earth. </p>
            </div>
        </div>
      </main>
    </>
  );
};

export default stories;




