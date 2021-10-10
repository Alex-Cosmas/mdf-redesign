import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <section className="grid flex-col-reverse gap-8 py-10 pb-10 md:pt-32 md:grid-cols-2">
        <div className="p-6 space-y-8 ">
          <h2 className="mdf-h1">
            We are <span className="text-optional">MDF Kenya </span>
          </h2>
          <div>
            <p>We endeavor to help children in need, one at a time.</p>
            <p>
              We strongly believe children are the future and a heritage for
              tomorrow.
            </p>
            <p>Our impact grows everyday from the contributions and support.</p>
          </div>
        </div>
        <div className="flex flex-col justify-end h-full md:-mt-14">
          <div className="relative h-96 min-w-[300px]  border-4 border-secondary shadow-md">
            <Image
              src="https://res.cloudinary.com/alexoc/image/upload/v1632808970/Projects/Miracle%20Dave%20Foundation/543af2_7f465cd7836d4b41b12bfc2a4d432213_mv2_i8srqu.jpg"
              alt="HeroBg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-3">
        <div className="p-5 bg-gray-100">
          <h2> Our Motto</h2>
          <p>Creating happiness by helping others .</p>
        </div>
        <div className="p-5 bg-gray-100">
          <h2> Our Vision</h2>
          <p>change lives, encourage others and empower generations</p>
        </div>
        <div className="p-5 bg-gray-100">
          <h2> Our Objectives</h2>
          <p>A world where service and leadership becomes part of life.</p>
        </div>
      </section>

      <section className="py-10 ">
        <h2 className="mdf-h1">
          The <span className="text-optional">Team </span>
        </h2>
        <p>
          We're passionate about what we do. Find out more about the people
          behind our work.
        </p>
      </section>
    </>
  );
}
