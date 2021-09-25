import GridGallery from '~/components/GridGallery'

import Link from 'next/link'
import Image from 'next/image'

export default function Gallery() {
  return (
    <>
      <div className='container mx-auto'>

        <div className='py-10'>

          <div className="grid gap-10">
            <Link href='/posts/post1'>
              <a>
                <div className="grid gap-8 featured md:grid-cols-2 PostWrapper">
                  <div className="p-4 text md:p-8">
                    <h1 className="text-6xl">Saying it in pictures...</h1>
                    <div className="my-6">
                      <p>MDF joined another team led by Ms Gladys to participate in a feeding program at the Korogocho slums. on Feb 21 2020,</p>
                    </div>
                  </div>
                  <div className="image relative h-96 min-w-[300px] border-4 border-primary">
                    <Image
                      src='https://static.wixstatic.com/media/543af2_7931931901f24fc989028a0e5a55df01~mv2.jpg/v1/fill/w_369,h_565,al_c,q_80,usm_0.66_1.00_0.01/3kids.webp'
                      alt='HeroBg'
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </div>
              </a>
            </Link>

            <Link href='/posts/post2'>
              <a>
                <div className="grid md:grid-cols-2 PostWrapper">
                  <div className="image relative h-96 min-w-[300px] border-4 border-primary">
                    <Image
                      src='https://static.wixstatic.com/media/543af2_7931931901f24fc989028a0e5a55df01~mv2.jpg/v1/fill/w_369,h_565,al_c,q_80,usm_0.66_1.00_0.01/3kids.webp'
                      alt='HeroBg'
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                  <div className="p-4 text md:p-8">
                    <h1 className="text-6xl">Bring hope to the slums...</h1>
                    <div className="my-6">
                      <p>MDF joined another team led by Ms Gladys to participate in a feeding program at the Korogocho slums. on Feb 21 2020.</p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>

          </div>
        </div>
        {/* <GridGallery /> */}
      </div>
    </>
  )
}
