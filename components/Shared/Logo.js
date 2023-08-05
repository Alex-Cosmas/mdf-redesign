import Image from "next/legacy/image"
import Link from 'next/link'

export default function Logo() {
  return <>
    <div>
      <Link href='/'>

        {/* Logo */}
        <Image
          src='/MDF Kenya Logo-01.svg'
          alt='HeroBg'
          layout='fill'
          objectFit='contain'
        />

      </Link>
    </div>
  </>;
}
