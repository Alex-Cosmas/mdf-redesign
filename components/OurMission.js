import Image from 'next/image'

export default function OurMission() {
  return (
    <>
      <section className='grid flex-col-reverse grid-cols-2 gap-8 pt-32 pb-10'>
        <div className='flex flex-col justify-end h-full -mt-14'>
          <div className='relative h-96 min-w-[300px]  border-4 border-secondary shadow-md'>
            <Image
              src='https://static.wixstatic.com/media/543af2_7931931901f24fc989028a0e5a55df01~mv2.jpg/v1/fill/w_369,h_565,al_c,q_80,usm_0.66_1.00_0.01/3kids.webp'
              alt='HeroBg'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
        <div>
          <h2 className='mdf-h1'>Our Mission</h2>
          <p>We endeavor to help children in need, one at a time.</p>
          <p>
            We strongly believe children are the future and a heritage for
            tomorrow.
          </p>
          <p>Our impact grows everyday from the contributions and support.</p>
        </div>
      </section>
    </>
  )
}
