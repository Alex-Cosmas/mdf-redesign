import Image from "next/legacy/image"
import HelpDetails from '~/components/HowtoHelp/HelpDetails'
export default function howtohelp() {


  return (
    <>


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
                src='https://res.cloudinary.com/alexoc/image/upload/v1632808967/Projects/Miracle%20Dave%20Foundation/Child1_edited_kas3hn.webp'
                alt='HeroBg'
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
        </section>

        <section>
          {/*<div>*/}
          {/*  <HelpDetails />*/}
          {/*</div>*/}

        </section>
      </div>
    </>
  )
}
