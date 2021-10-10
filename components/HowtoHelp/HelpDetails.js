export default function HelpDetails() {
  const data = [
    {
      name: "Priscilla Hafula",
      details: "9 Years",
    },
    {
      name: "Elyes Ondiso",
      details: "6 Years",
    },
    {
      name: "Pamela Nyandiko",
      details: "4 Years",
    },
    {
      name: "Samuel Mutende Kamau",
      details: "8 Years",
    },
    {
      name: "Reuben Ng’ethe Kamau",
      details: "14 Years",
    },
  ];

  return (
    <>
      <div className="p-6">
        <h2 className="mdf-h1">
          Your <span className="text-optional">Impact </span>
        </h2>

        <p className="py-3">
          Below is a list of children under MDF seeking sponsorship managed by
          our Regional Coordinator{" "}
        </p>

        <div className="grid gap-5 my-10 md:grid-cols-3">
          {data.map(function (teamdetails, idx) {
            return (
              <div key={idx} className="bg-gray-100 ">
                <div className="px-10 py-12">
                  <h1> {teamdetails.name}</h1>
                  <p>{teamdetails.details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
