import Image from 'next/image'
export default function GridGallery() {
  return (
    <>

      <div className=''>

        grid md:grid-cols-3 gap-5 my-10
        <div className='grid w-full grid-cols-3 gap-4'>
          <div className='relative h-96'>
            <div className='absolute inset-0 z-50 text-white bg-black opacity-50 hover:opacity-0'>
              <div className=''></div>
            </div>
            <Image
              src='https://static.wixstatic.com/media/543af2_7931931901f24fc989028a0e5a55df01~mv2.jpg/v1/fill/w_369,h_565,al_c,q_80,usm_0.66_1.00_0.01/3kids.webp'
              alt='HeroBg'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='relative h-96'>
            <div className='absolute inset-0 z-50 text-white bg-black opacity-50 hover:opacity-0'>
              <div className=''></div>
            </div>
            <Image
              src='https://static.wixstatic.com/media/543af2_7931931901f24fc989028a0e5a55df01~mv2.jpg/v1/fill/w_369,h_565,al_c,q_80,usm_0.66_1.00_0.01/3kids.webp'
              alt='HeroBg'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='relative h-96'>
            <div className='absolute inset-0 z-50 text-white bg-black opacity-50 hover:opacity-0'>
              <div className=''></div>
            </div>
            <Image
              src='https://static.wixstatic.com/media/543af2_7931931901f24fc989028a0e5a55df01~mv2.jpg/v1/fill/w_369,h_565,al_c,q_80,usm_0.66_1.00_0.01/3kids.webp'
              alt='HeroBg'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </div>

    </>
  )
}
