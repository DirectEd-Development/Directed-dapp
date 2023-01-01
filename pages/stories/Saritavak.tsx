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
                <div className="font-bold text-xl mb-2">The Dreaded Saritavak</div>
                <p className="text-gray-700 text-base">
                I was once told a story about a dreaded creature whose reign would be etched in very many communities. The creature named, Sarivatak, was so scary that many believed it could appear in people's dreams and turn them into nightmares. Sarivatak had the head of a lion and a muscular, well-built body of a human. <br />
                Sarivatak had a pride of lions consisting of nine other lions who always had his back. Sarivatak had for years oppressed humans and enforced his tyrannical rule with the help of other lions. Albeit there were few humans who wanted to resist, there was really nothing they could do. However, one day, one of the lions in Sarivatak's pride, Kavirota felt pity for she witnessed how many succumbed to Sarivatak`s despotic rule and his infamous guillotine. She liaised with some of the humans in order to help save them. <br />                                                     	
                They hatched a well-laid out plan which although very risky, would help remove them from sarivatak's rule and power which he had gripped so tenaciously. On the night they had planned the coup, they cautiously approached Sarivatak's tent after he had gone into deep slumber. The tent was usually guarded by lions armed to the teeth but on this night the humans were not so hapless. As they tiptoed towards his bed they were each gripped by so much fear, the air was nearly tangible. One human who was too eager, hurriedly reached for his dagger but dropped it. On hearing this, Sarivatak seized the human and held him so tightly in one arm that life was slowly snuffed out of him. Before Sarivatak could harm anyone else, Kavirota slit his throat and this was the end of his rule. </p>
            </div>
        </div>
      </main>
    </>
  );
};

export default stories;




