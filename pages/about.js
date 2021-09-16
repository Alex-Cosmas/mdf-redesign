import AboutSection from '~/components/About/AboutSection'
import TeamDetails from '~/components/About/TeamDetails'
import CTA from '~/components/HomePage/CTA'

export default function about() {
  return (
    <>
      <div className='container py-10 mx-auto'>
        <AboutSection />
        <TeamDetails />
      </div>
      <div>
        <CTA />
      </div>
    </>
  )
}
