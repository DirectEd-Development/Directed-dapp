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
                <div className="font-bold text-xl mb-2">The Story of Kola</div>
                <p className="text-gray-700 text-base">
                There was once a young lion called Kola. She was a stray after her parents died. She was lucky to have chanced upon being taken up by a peasant who lived by the river Amba. Awky was the poor fellow who even struggled to put food on the table for him and Kola to eat. Kola grew up to be an energetic youth and was always emerging in the village fights.
                One day the king of Kumki land announced the recruitment of warriors into his army. Kola did not hesitate and due to her outline of body with bulging muscles and her speed and valorous ness, she was taken in by the commander Yola where she was trained. Since she was young, she became a skilled warrior. She was very skillful and was ranked to be the royal bodyguard of the king’s daughter. Her age mates envied her and planned for her downfall. <br />
                They abducted the princess in the wee hours when Kola was deep asleep. Kola awoke to find the princess, Mimi, gone. She was even more stunned when the King said that if she did not find her, she would be hung on the gallows. Being skilled, she left out trailing her scent. Her master, Awky, had taught her the art as they sought for food in the days. It took her two weeks to reach the princess who had been left stranded in the forest. She had traversed many forests, went hungry for days and faced dangerous animals. She however returned with the Princess safe and sound. At home she was accorded victory and the princess gave away Kola’s friend who had blackmailed her. The act of saving the princess promoted her to be commander. Her life became better after that. </p>
            </div>
        </div>
      </main>
    </>
  );
};

export default stories;




