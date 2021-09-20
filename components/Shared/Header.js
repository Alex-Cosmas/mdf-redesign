import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TopBar from './TopBar'

function Header() {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }
  return (
    <>
      <TopBar />
      <nav className='container flex flex-wrap items-center py-3 mx-auto '>
        <div className='relative items-center w-24 h-24 p-2 mr-4 even:inline-flex '>
          <Link href='/'>
            <a>
              <Image
                src='/MDF Kenya Logo-01.svg'
                alt='HeroBg'
                layout='fill'
                objectFit='contain'
              />
            </a>
          </Link>
        </div>

        <button
          className='inline-flex p-3 ml-auto rounded outline-none bg-gray-50 hover:bg-gray-600 lg:hidden hover:text-white'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto items-center`}
        >
          <div className='flex flex-col items-start w-full font-semibold text-white md:space-x-4 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
            <Link href='/about'>
              <a className='items-center justify-center w-full px-3 py-2 hover:font-bold lg:inline-flex lg:w-auto hover:border-b-2 hover:text-optional'>
                About MDF
              </a>
            </Link>

            {/* <Link href='#'>
              <a className='items-center justify-center w-full px-3 py-2 hover:font-bold lg:inline-flex lg:w-auto hover:border-b-2 hover:text-optional'>
                Our Impact
              </a>
            </Link> */}
            <Link href='/howtohelp'>
              <a className='items-center justify-center w-full px-3 py-2 hover:font-bold lg:inline-flex lg:w-auto hover:border-b-2 hover:text-optional'>
                How can you help
              </a>
            </Link>
            <Link href='/gallery'>
              <a className='items-center justify-center w-full px-3 py-2 hover:font-bold lg:inline-flex lg:w-auto hover:border-b-2 hover:text-optional'>
                Gallery
              </a>
            </Link>
            <Link href='/donations'>
              <a className='items-center justify-center w-full px-5 py-2 bg-optional hover:font-bold lg:inline-flex lg:w-auto hover:text-primary'>
                Donate
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
