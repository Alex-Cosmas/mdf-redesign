import Image from "next/legacy/image";

export default function TeamDetails() {
  const data = [
    {
      name: "REV. DAVID W. KIAMA",
      title: "FOUNDER",
      details:
        "Rev. David Kiama is the CEO and founder of MDF and Power of Praise Ministries. Praise Ministries also runs a charity program which Rev. Kiama has been involved in ministry work for over 20 years",
      src: {
        original:
          "https://res.cloudinary.com/alexoc/image/upload/v1633856626/Projects/Miracle%20Dave%20Foundation/Profile/David_z5yaf3.webp",
      },
    },
    {
      name: "RICHARD K. WANJAU",
      title: "MANAGING DIRECTOR",
      details:
        "Richard has been managing several printing and design companies in Nairobi for more than 25 years",
      src: {
        original:
          "https://res.cloudinary.com/alexoc/image/upload/v1633856626/Projects/Miracle%20Dave%20Foundation/Profile/Richard_k5ms1i.webp",
      },
    },
    {
      name: "JANE W. ITEGI",
      title: "GENERAL SECRETARY",
      details:
        "Jane has a lot of experience working as a secretary for various institutions in Kenya",
      src: {
        original:
          "https://res.cloudinary.com/alexoc/image/upload/v1633856626/Projects/Miracle%20Dave%20Foundation/Profile/Jane_rhhe5w.webp",
      },
    },
    {
      name: "HANNAH N. NGETHE",
      title: "ACCOUNTANT",
      details:
        "Hannah is a social worker - she has been involved in doing charity work, especially in the Nairobi slums.",
      src: {
        original:
          "https://res.cloudinary.com/alexoc/image/upload/v1633856626/Projects/Miracle%20Dave%20Foundation/Profile/Hannah_vvrp3f.webp",
      },
    },
  ];
  return (
    <>
      <div className="grid gap-10 md:grid-cols-2 ">
        {data.map(function (teamdetails, idx) {
          return (
            <div key={idx} className="bg-gray-100">
              <div className="px-10 py-12">
                <div className="inline-flex py-5 space-x-5 border-b-2">
                  <div className="relative w-24 h-24 ">
                    <Image
                      src={teamdetails.src?.original}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                      className="rounded-full"
                    />
                  </div>

                  <div className="py-3 ">
                    <div>
                      <h1 className="font-semibold text-secondary">
                        {" "}
                        {teamdetails.name}
                      </h1>
                      <h3 className="text-sm font-bold text-primary">
                        {" "}
                        {teamdetails.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <p>{teamdetails.details}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
