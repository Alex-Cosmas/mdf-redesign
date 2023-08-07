// import Image from 'next/image'
import Head from "next/head";

import HeroComponent from "~/components/HomePage/Hero";
import About from "~/components/HomePage/About";
import OurMission from "~/components/HomePage/OurMission";
import OurImpact from "~/components/HomePage/OurImpact";
import CTA from "~/components/HomePage/CTA";

function Home() {
  return (
    <>
      <Head>
        <title>Miracle Dave Foundation</title>
        <meta
          name="description"
          content="We are MDF Kenya. We endeavor to help children in need, one at a time. We strongly believe children are the future and a heritage for tomorrow. Our impact grows everyday from the contributions and support."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroComponent />
        <div className="container mx-auto">
          <About />
          <OurMission />
          <OurImpact />
        </div>
      </main>
      <CTA />
    </>
  );
}

export default Home;
