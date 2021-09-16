import Footer from '../Shared/Footer'
import Header from '../Shared/Header'

function Layout({ children }) {
  return (
    <>
      <div className=' bg-primary'>
        <Header />
      </div>
      <main className=''>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
