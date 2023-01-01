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
                <div className="font-bold text-xl mb-2">The Legend of Arch-Nemea</div>
                <p className="text-gray-700 text-base">
                Long ago in ancient Archaia lived a young lion cub named Arch-Nemea, Nemea for short. In Achaia, the land was mostly prosperous but due to an ancient war that fo the land, the Archaians trained all their members is combat and other ways of war just in case another war of wars broke out. Young Nemea of about the age of 600, (yes, they aged quite slowly for a feline species about 50 years for every increase in age equivalent to 1 earth year), began her training in her most favorite of skills; weapon mastery. She dreamed to be one of the most best weapon masters that ever lived so that one day, she may serve and protect her kind from all evils. As Nemea trained other lion’s masters, they noticed she had great attributes that made her more than exceptional. Courageous she was; strong, intelligent and boy was she good with a sword not to mention her pin point accuracy with a bow and arrow. In time her skills made her rise up the ranks of their first battalion and she wound up one of the lead generals and later, an Archaian hero. A hero? Yes a hero. Arch-Nemea undertook a task unlike any other almost lost her dear life. She took about 30 soldiers on a quest to the Grim wood peaks, the scariest mountains of them all, to hunt and slay a monster none had seen before and acquire a treasure said to grant its possessor unimaginable god-like power. Upon arrival, they were shocked to find a snake dragon hybrid with seven heads, six tails and ten legs guarding a giant treasure that glowed like the sun. As they waged war with the beast some of the soldiers fell in the battle. The fear of greed corrupted Nemea’s pure heart and she took the treasure and destroyed it and herself to prevent both those pure of heart and evil at heart from obtaining the treasure but her deeds of courage and valour still landed her spot in the war hall of heroes. </p>
            </div>
        </div>
      </main>
    </>
  );
};

export default stories;




