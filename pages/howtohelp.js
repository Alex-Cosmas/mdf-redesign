import Image from 'next/image'
export default function howtohelp() {
  const data = [
    {
      name: 'test2',
      img: '/mdf assets/543af2_1a683d3e38434b5ab888857e7bc44222_mv2.jpg',
    },
    { name: 'test2' },
  ]

  return (
    <>
      {/* <div>
        {data.map(function (d, idx) {
          return (
            <div key={idx}>
              {d.name}
              <div className='relative w-1/4 bg-gray-50'>
                <div className='w-32 h-32 '>
                  <Image
                    src={d.img}
                    alt='HeroBg'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-full'
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div> */}
      <div className='container py-10 mx-auto'>
        <section className='grid flex-col-reverse gap-8 py-10 pb-10 md:pt-32 md:grid-cols-2'>
          <div className='p-6 space-y-8 '>
            <h2 className='mdf-h1'>
              Every child deserves <span className='text-optional'>hope. </span>
            </h2>
            <div>
              <p>More than half of all people who live in poverty are kids.</p>
              <p>Make a difference by sponsoring a child today</p>
            </div>
          </div>
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
        </section>

        <section>
          <div className='grid grid-cols-5 gap-10 py-12 Sponsered'>
            <div className='flex w-full SponsoredCard'>
              <div className='relative w-1/4 bg-gray-50'>
                {/* <Image
                  src='/mdf assets/Happy_JPG.webp'
                  alt='HeroBg'
                  layout='fill'
                  objectFit='cover'
                  className='w-32 h-32 rounded-full '
                /> */}
              </div>
              <div className='w-3/4 p-4'>
                <h2>Priscilla Hafula</h2>
                <p>Age: 8 </p>
              </div>
            </div>

            <div className='flex w-full SponsoredCard'>
              <div className='relative w-1/4 bg-gray-50'>
                {/* <Image
                  src='/mdf assets/Happy_JPG.webp'
                  alt='HeroBg'
                  layout='fill'
                  objectFit='cover'
                  className='w-32 h-32 rounded-full '
                /> */}
              </div>
              <div className='w-3/4 p-4'>
                <h2>Elyes Ondiso</h2>
                <p>Age: 5 </p>
              </div>
            </div>

            <div className='flex w-full SponsoredCard'>
              <div className='relative w-1/4 bg-gray-50'>
                {/* <Image
                  src='/mdf assets/Happy_JPG.webp'
                  alt='HeroBg'
                  layout='fill'
                  objectFit='cover'
                  className='w-32 h-32 rounded-full '
                /> */}
              </div>
              <div className='w-3/4 p-4'>
                <h2>Priscilla Hafula</h2>
                <p>Age: 8 </p>
              </div>
            </div>

            <div className='flex w-full SponsoredCard'>
              <div className='relative w-1/4 bg-gray-50'>
                {/* <Image
                  src='/mdf assets/Happy_JPG.webp'
                  alt='HeroBg'
                  layout='fill'
                  objectFit='cover'
                  className='w-32 h-32 rounded-full '
                /> */}
              </div>
              <div className='w-3/4 p-4'>
                <h2>Priscilla Hafula</h2>
                <p>Age: 8 </p>
              </div>
            </div>

            <div className='flex w-full SponsoredCard'>
              <div className='relative w-1/4 bg-gray-50'>
                {/* <Image
                  src='/mdf assets/Happy_JPG.webp'
                  alt='HeroBg'
                  layout='fill'
                  objectFit='cover'
                  className='w-32 h-32 rounded-full '
                /> */}
              </div>
              <div className='w-3/4 p-4'>
                <h2>Priscilla Hafula</h2>
                <p>Age: 8 </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

// 1.
// Priscilla Hafula
// Age: 8

// 2.
// Elyes Ondiso
// Age: 5

// 3.
// Pamela Nyandiko
// Age: 3

// 4.
// Samuel Mutende
// Age: 7

// 5.

// Rueben Ngethe
// Age: 13
