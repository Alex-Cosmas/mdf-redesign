import Image from "next/legacy/image"

export default function OurMission() {
  return (
    <>
      <section className='grid flex-col-reverse gap-8 pb-10 md:pt-32 md:grid-cols-2'>
        <div className='flex flex-col justify-end h-full md:-mt-14'>
          <div className='relative h-96 min-w-[300px]  border-4 border-secondary shadow-md'>
            <Image
              src='/mdf assets/Happy_JPG.webp'
              alt='HeroBg'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
        <div className='p-6 space-y-8 '>
          <h2 className='mdf-h1'>
            Our <span className='text-optional'>Mission</span>
          </h2>
          <div>
            <p>We endeavor to help children in need, one at a time.</p>
            <p>
              We strongly believe children are the future and a heritage for
              tomorrow.
            </p>
            <p>Our impact grows everyday from the contributions and support.</p>
          </div>
        </div>
      </section>
    </>
  )
}
