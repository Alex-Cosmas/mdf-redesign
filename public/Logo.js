import Image from 'next/image'
import logo from '/public/AG_Logo_4_360x.jpeg'

function Logo() {
  return (
    <div>
      <div>
        <Image src={logo} alt='Ag Cera Logo' width='250' height='50' />
      </div>
    </div>
  )
}
export default Logo
