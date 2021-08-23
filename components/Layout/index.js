import Footer from '../Footer'
import Header from '../Header'

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
