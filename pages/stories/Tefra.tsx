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
                <div className="font-bold text-xl mb-2">The Wrath of Tefra</div>
                <p className="text-gray-700 text-base">
                Tefra, born of a royal family but grew in solitude. This came to pass after the death of the king and queen due to human invasion. In the eleventh of the year when the celebrations of Tefra`s  birthday were at their peak, and everyone had lowered their guard, forgetting how valuable they were to the human kind, they were ambushed and a large number of them, including the king and queen were killed. Tefra was left to grow up all alone after the kingdom fell after that. <br />
                Two hundred years later, Tefra is now at the peak of her strength and has two younger cubs. Having trained all her life due to the hardships she faced in the jungle she swore to protect both of her cubs and her kingdom would rise back to its former glory. However there were rumors that humans were quickly encroaching their land and planned to attack them, thus destroying them all and taking their land. Due to the rumors, Tefra became more Virgil and tried urging the others to join forces in order to fight the humans. Tefra was mocked by her friends who felt that she couldn’t let them leave alone to help save their kingdom. <br />
                One as they were on their hunting expeditions, humans made their first strike. Tefra and her pride came back to a rude shock as most of their cubs had been killed and among them her two cubs were dead. Tefra was filled with wrath once she saw the bodies of her lifeless cubs. This drove Tefra to decide to face the humans on her own and stop her from doing any more to her kingdom. Tefra charged to the human village filled with courage and her roar announcing danger. When the pride saw her bravery they too followed her. Tefra organized her pride and through team work and determination, they managed to ward off the humans and save the jungle from the humans evil plan of destroying them. Tefras' story was known through the jungle and was later promoted to queen by the animals. </p>
            </div>
        </div>
      </main>
    </>
  );
};

export default stories;




