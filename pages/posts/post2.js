import Image from "next/legacy/image"
import GridGallery from '~/components/GridGallery'

export default function Post2() {
    const data = [

        {

            img: 'https://res.cloudinary.com/alexoc/image/upload/v1632808967/Projects/Miracle%20Dave%20Foundation/543af2_0940d673f07441c597b32b2e4dc868fc_mv2_d1un9s.jpg'
        },
        {

            img: 'https://res.cloudinary.com/alexoc/image/upload/v1632808968/Projects/Miracle%20Dave%20Foundation/Happy_JPG_y3vpab.webp'
        },
        {

            img: 'https://res.cloudinary.com/alexoc/image/upload/v1632808921/Projects/Miracle%20Dave%20Foundation/3kids_b3ugjb.webp'
        },

    ];
    return (
        <>
            <div className='container mx-auto'>
                <div className='py-10'>
                    <div className="space-y-12">
                        <div className="grid gap-8 featured md:grid-cols-2">
                            <div className="p-4 text md:p-8">
                                <h1 className="text-6xl">Saying it in pictures...</h1>
                                <div className="my-6">
                                    <p>MDF joined another team led by Ms Gladys to participate in a feeding program at the Korogocho slums. on Feb 21 2020,</p>
                                </div>
                            </div>
                            <div className="image relative h-96 min-w-[300px] border-4 border-primary">
                                <Image
                                    src='https://res.cloudinary.com/alexoc/image/upload/v1632808969/Projects/Miracle%20Dave%20Foundation/543af2_7d802a55b8bf4194ab6e99cc0ad17b4c_mv2_wurzzt.jpg'
                                    alt='HeroBg'
                                    layout='fill'
                                    objectFit='cover'
                                />
                            </div>
                        </div>
                        <div className="grid ">

                            <div className="grid grid-cols-3 gap-10 ">
                                {data.map(function (post, idx) {
                                    return (


                                        <div key={idx} className='relative h-96'>
                                            <div className='absolute inset-0 z-50 text-white bg-black opacity-50 hover:opacity-0'>
                                                <div className=''>
                                                    {/* <h1> {post.name}</h1>
                                                    <p>{post.details}</p> */}
                                                </div>
                                            </div>
                                            <Image
                                                src={post.img}
                                                alt='HeroBg'
                                                layout='fill'
                                                objectFit='cover'
                                            />
                                        </div>


                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </>
    )
}
