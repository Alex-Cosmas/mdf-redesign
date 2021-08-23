import { useState } from 'react'
import Link from 'next/link'
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
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <Link href='#'>
              <h1 className='font-semibold text-white'>MDF Kenya</h1>
            </Link>
          </a>
        </Link>
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
          <div className='flex flex-col items-start w-full font-semibold text-white lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
            <Link href='#'>
              <a className='items-center justify-center w-full px-3 py-2 hover:font-bold lg:inline-flex lg:w-auto hover:border-b-2 hover:text-optional'>
                About
              </a>
            </Link>
            <Link href='#'>
              <a className='items-center justify-center w-full px-3 py-2 hover:font-bold lg:inline-flex lg:w-auto hover:border-b-2 hover:text-optional'>
                Impact
              </a>
            </Link>
            <Link href='#'>
              <a className='items-center justify-center w-full px-3 py-2 hover:font-bold lg:inline-flex lg:w-auto hover:border-b-2 hover:text-optional'>
                Gallery
              </a>
            </Link>
            <Link href='#'>
              <a className='items-center justify-center w-full px-3 py-2 hover:font-bold lg:inline-flex lg:w-auto hover:border-b-2 hover:text-optional'>
                Your Impact
              </a>
            </Link>
            <Link href='#'>
              <a className='items-center justify-center w-full px-5 py-2 bg-optional hover:font-bold lg:inline-flex lg:w-auto hover:text-optional'>
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
