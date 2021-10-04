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
                      src='https://res.cloudinary.com/alexoc/image/upload/v1632808969/Projects/Miracle%20Dave%20Foundation/543af2_5b1362f3cf8c46eba41ad11957b7fcf1_mv2_vudjv3.jpg'
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
                      src='https://res.cloudinary.com/alexoc/image/upload/v1632808969/Projects/Miracle%20Dave%20Foundation/543af2_6b8e73381aae4d97ace1d2b70d973b77_mv2_rjanct.jpg'
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
