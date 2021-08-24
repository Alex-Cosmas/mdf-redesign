/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

function Hero() {
  return (
    <>
      <div className='bg-primary'>
        <div className='container  w-full mx-auto h-[500px]  text-wsGrey-200'>
          <div className='grid h-full grid-cols-2'>
            <div className='flex items-center justify-center '>
              <h3 className='font-semibold text-7xl'>
                <span className='text-optional'>Children</span> are a <br></br>
                <span className='text-optional'>heritage</span> from{' '}
                <span className='text-optional'>God</span>
              </h3>
            </div>
            <div className='flex flex-col justify-end h-full mt-14'>
              <div className='relative h-96 min-w-[300px]  border-4 border-white'>
                <Image
                  src='https://static.wixstatic.com/media/543af2_7931931901f24fc989028a0e5a55df01~mv2.jpg/v1/fill/w_369,h_565,al_c,q_80,usm_0.66_1.00_0.01/3kids.webp'
                  alt='HeroBg'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Hero

{
  /* <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-40'></div>
          <div className='absolute top-0 left-0 z-30 flex flex-col items-center justify-center w-full h-full text-center'>
            <div className='text-2xl font-semibold text-gray-100'>
              Transforming Lives
            </div>
            <div className='text-5xl text-gray-100'>
              Your health is your wealth
            </div>

            <button className='px-5 py-1 my-5 text-white bg-gray-900 rounded-sm'>
              Learn More
            </button>
          </div>

          <img
            src='/background.jpg'
            alt=''
            className='object-cover object-left-bottom w-full h-full'
          /> */
}
