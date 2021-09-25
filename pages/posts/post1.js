import Image from 'next/image'
import GridGallery from '~/components/GridGallery'

export default function Post1() {

    const data = [
        {
            name: "Rev. David",
            details: "David is also the founder and overseer of Power of Praise Ministries in Kenya . This Ministry also runs a charity program. Rev. Kiama has been involved in ministry work for over 20 years",
            img: 'https://res.cloudinary.com/alexoc/image/upload/v1630879501/SFL/assets/Red-Velvet-Cake-8_h3p6mr.jpg'
        },
        {
            name: "Hannah",
            details: "Lorem is also the founder and overseer of Power of Praise Ministries in Kenya . This Ministry also runs a charity program. Rev. Kiama has been involved in ministry work for over 20 years",
            img: 'https://res.cloudinary.com/alexoc/image/upload/v1630879501/SFL/assets/Red-Velvet-Cake-8_h3p6mr.jpg'
        }
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
                                    src='https://static.wixstatic.com/media/543af2_7931931901f24fc989028a0e5a55df01~mv2.jpg/v1/fill/w_369,h_565,al_c,q_80,usm_0.66_1.00_0.01/3kids.webp'
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
