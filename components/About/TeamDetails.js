import Image from 'next/image'

export default function TeamDetails() {

  const data = [

    {
      name: "Rev. David",
      details: "David is also the founder and overseer of Power of Praise Ministries in Kenya . This Ministry also runs a charity program. Rev. Kiama has been involved in ministry work for over 20 years",
    },
    {
      name: "Hannah",
      details: "Lorem is also the founder and overseer of Power of Praise Ministries in Kenya . This Ministry also runs a charity program. Rev. Kiama has been involved in ministry work for over 20 years",
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
                <p>{teamdetails.details}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );

}


