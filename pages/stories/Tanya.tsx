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
                <div className="font-bold text-xl mb-2">The Rise of a Heroine</div>
                <p className="text-gray-700 text-base">
                Long ago, there existed a kingdom named Majaliwa, which was ruled by a family of hyenas at the time. The hyenas were oppressive in nature and ruthlessly handled their subjects, especially the lions who were mythically believed to be the predominant and rightful rulers of the Majaliwa Kingdom. Tales were told and passed down from parents to offsprings of how the lion ancestors brought the kingdom to dominance and gave it independence. They also ruled the kingdom in peace and prosperity, that is, until the ancestors of the hyenas forcefully took over the rule of the kingdom by taking advantage of the lion king's trust and poisoned him. Their reason for doing so was unknown, but was believed to be caused by their unstable greed for power. Due to this, they were greatly feared and no one had enough courage to face them. <br />
                Little did the hyenas know that a hero would rise and challenge their rule, from the smallest pack of the lions, a female cub named Tanya was born. Tanya grew up believing in the tales passed down to her from her grandmother and ended up despising the hyenas for their cruel and inhumane use of power. She was a firm believer of justice and peace but because of her assertive way of thinking, she ended up being treated as an outcast by other members of the community. This is because they feared she would bring trouble to them. Time passed by and Tanya grew up to be a courageous and fearless lioness. She strategized, since her young days, on how the power would be handled by the right animal. She planned to do so by scheming on how to overthrow the hyena king. <br />
                It took her three years to convince the lions and other animals to fight back through her heroic and heartfelt speeches. Finally, the day they had been longing for was here, the king's birthday, using the lion and lioness soldiers as her troops, and the hares as her informants, she made an ambush when the hyenas were drunk and dazed. Tanya ruthlessly ordered that all adult hyenas be slayed and she battled with the king head on. After a long tustle, she finally slayed Manon to death, bringing to an end his merciless rule. Due to public demand, she was crowned the rightful and first female ruler of Majaliwa kingdom. Up to date, the animals remember her for her successful and heroic leadership. </p>
              </div>
        </div>
      </main>
    </>
  );
};

export default stories;




