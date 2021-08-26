export default function CTA() {
  return (
    <>
      <section>
        <div className='relative w-full h-screen/3'>
          <div className='absolute top-0 left-0 w-full h-full opacity-75 bg-primary'></div>
          <div className='absolute top-0 left-0 z-30 flex flex-col items-center justify-center w-full h-full text-center md:gap-2'>
            <div className='px-10 mb-5 text-2xl text-gray-100 md:mb-0'>
              If you would like to engage with us, we would love to hear from
              you.
            </div>

            <button className='z-30 px-5 py-1 text-lg font-semibold text-white rounded-sm md:my-5 bg-optional hover:font-semibold hover:text-gray-900 hover:border-white hover:bg-gray-300'>
              Drop us an email
            </button>
          </div>

          <img
            src='/mdf assets/Cta-Bg.jpg'
            alt=''
            className='object-cover object-center w-full h-full'
          />
        </div>
      </section>
    </>
  )
}
