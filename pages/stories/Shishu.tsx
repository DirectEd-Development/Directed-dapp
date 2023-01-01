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
                <div className="font-bold text-xl mb-2">The Legend of the Mighty Shishu</div>
                <p className="text-gray-700 text-base">
                “Aghrrrr!” he roared in the extensive plains of Eswatini. Every beast heard this and all they could do was stick their tails between their hind legs. Shishu ruled the land with at most dexterity and was feared by all the other lions of his pride.
                Mighty Shishu was well known for his fearless character that accentuated the valorousness in him. As he was one day sauntering in his territory he heard cries of a helpless young one. He quickly swung into action. Alas! The young one had been captured by Shishu's closest rivals, the Swazi lions. This was to serve as revenge for the unfathomable damage Shishu had done on them and their territories. <br />                       	
                Shishu gnashed his teeth with great ire and anger in his heart. He charged mercilessly on the group of about fifteen lions. He pounced on his enemies one by one tearing them down to almost a thousand pieces each. He swept them all within the blink of an eye. He had successfully delivered an heir to his throne from the narrow jaws of death.
                Upon returning to his den, all the other members of his pride admired him with awe and wonder. The fact that he was covered with blood on his fur made him a bold fighter for his reason he was awarded a golden crown by his god. </p>
            </div>
        </div>
      </main>
    </>
  );
};

export default stories;




