import {  Meta, Layout } from '../../components'
import { data } from '../../data/hero'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Home() {
    const router = useRouter()

    const query = router.asPath.split('?')[1]

    return (
            <Layout>
                <Meta title="NFT's Portal" description="Directed Ed NFT's portal page" />

                <main className='nft-portal'>

                    <div className='nft-portal__assets_header'>
                                <h3>Pick which Hero you'd like</h3>

                    </div>

                        <div className='nft-portal__assets'>
                            {data
                                .filter((item) => item.school === query)
                                .map(
                                    (
                                        image: { title: string; image: string; url: string },
                                        index: number
                                    ) => (
                                        <div key={index} className={image.url ? 'nft-portal__asset' : 'nft-portal__asset disabled'}>
                                            <Link target='_blank' href={image.url}>
                                                <Image
                                                    src={image.image}
                                                    alt={image.title}
                                                    width={200}
                                                    height={200}
                                                />
                                            </Link>
                                            <p className="display-name">{image.title}</p>
                                        </div>
                                    )
                                )}
                        </div>

                </main>
            </Layout>
    );
}