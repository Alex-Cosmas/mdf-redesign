import Image from "next/legacy/image"
import GridGallery from '~/components/GridGallery'

export default function Post1() {

    const data = [
        {
            img: 'https://res.cloudinary.com/alexoc/image/upload/v1632808969/Projects/Miracle%20Dave%20Foundation/543af2_4faa5f58c37c410280c8133320a87d02_mv2_mp9svb.jpg'
        },
        {
            img: 'https://res.cloudinary.com/alexoc/image/upload/v1632808970/Projects/Miracle%20Dave%20Foundation/543af2_77a8bd1273b84689bcf9c985924fa3aa_mv2_jkodut.jpg'
        },
        {
            img: 'https://res.cloudinary.com/alexoc/image/upload/v1632808970/Projects/Miracle%20Dave%20Foundation/543af2_63ec3cf04a624434b3127683c18e71fa_mv2_w7vtkm.jpg'
        },
        {
            img: 'https://res.cloudinary.com/alexoc/image/upload/v1632808969/Projects/Miracle%20Dave%20Foundation/543af2_3e614b39c21b49faa8dd9d9135e24e51_mv2_o4wsmg.jpg'
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
                                    src='https://res.cloudinary.com/alexoc/image/upload/v1632808969/Projects/Miracle%20Dave%20Foundation/543af2_5b1362f3cf8c46eba41ad11957b7fcf1_mv2_vudjv3.jpg'
                                    alt='HeroBg'
                                    layout='fill'
                                    className='object-top '

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
