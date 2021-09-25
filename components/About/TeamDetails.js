import Image from 'next/image'

export default function TeamDetails() {

  const data = [
    {
      name: "REV. DAVID W. KIAMA",
      title: "FOUNDER",
      details: "David is also the founder and overseer of Power of Praise Ministries in Kenya . This Ministry also runs a charity program. Rev. Kiama has been involved in ministry work for over 20 years",
    },
    {
      name: "RICHARD K. WANJAU",
      title: "MANAGING DIRECTOR",
      details: "Richard has been managing several printing and design companies in Nairobi for more than 25 years",
    },
    {
      name: "JANE W. ITEGI",
      title: "GENERAL SECRETARY",
      details: "Jane has a lot of experience working as a secretary for various institutions in Kenya",
    },
    {
      name: "GLADYS W. NJERI",
      title: "PROJECT DIRECTOR",
      details: "Gladys is a social worker - she has been involved in doing charity work, especially in the Nairobi slums."
    },
    {
      name: "HANNAH N. NGETHE",
      title: "ACCOUNTANT",
      details: "Hannah has a great deal of experience in the accounting industry and video development. She currently works with the Kenyan county government."
    }

  ];
  return (
    <>
      <div className="grid grid-cols-2 gap-10 ">
        {data.map(function (teamdetails, idx) {
          return (
            <div key={idx} className='bg-gray-100 '>
              <div className='px-10 py-12'>
                <h1> {teamdetails.name}</h1>
                <h3> {teamdetails.title}</h3>
                <p>{teamdetails.details}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );

}



