const people = [
    {
      name: 'Rev. Dr. Robert L Jeffrey',
      role: 'Producer, Executive Director of Black Dollar Days Task Force',
      imageUrl:
        'https://i0.wp.com/nhmbcseattle.org/wp-content/uploads/2022/04/1-6.jpg',
      xUrl: '#',
      linkedinUrl: '#',
      bio: 'Over 30 years of activism and leadership as the Pastor of New Hope Baptist Church in Seattle, Executive Director of Black Dollar Days Task Force nonprofit and Clean Greens Farm & Market Program, and Board Member of the New Hope Development Institute with an extensive history of leading the African American Faith community and partnering with Japanese, Jewish and other faith communities. As can be cited, Dr. Jeffreys many awards for his work in Civil Rights since the 1990s, including the NAACP Community Leadership Award for our region in 2008, Dr. Jeffrey has the necessary leadership longevity and skills needed to execute, plan and manage long term projects.  Dr. Jeffrey will guide and advise to execute the vision of the project. ',

    },
    {
        name: 'Angela Moorer',
        role: 'Film Documentary Director & Narrator',
        imageUrl:
          'https://images.squarespace-cdn.com/content/v1/641915c2c0206324a478ab39/2b7ddf34-8b6b-4b1b-9116-045fdfb24a97/angela-moorer.jpg?format=2500w',
        xUrl: '#',
        linkedinUrl: '#',
        bio: 'Angela Moorer is a communications consultant and multimedia storyteller based out of Seattle, Washington. With the intention to inspire systemic change, her work strives to center voices of institutionally underserved and historically marginalized communities.  ',
        bio2: 'Angela Moorer is a digital media storyteller. She produces content and experiences with a trauma-informed, culturally-sensitive lens. Using an empathetic, creative and authentic approach, Angela can easily find and extract the most compelling angle of a story and strategically create content and execute marketing tactics that amplify it.'
      },


    // More people...
  ]
  
  export default function Team() {
    return (
      <div className="bg-none py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2  id="lexend" className="text-3xl font-bold tracking-tight  text-white sm:text-4xl">Meet our leadership</h2>
          
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
          >
            {people.map((person) => (
              <div>
                <img class='h-32 rounded-full mb-8 justify-center m-auto' src={person.imageUrl}  />
              <li key={person.name} className="flex flex-col gap-6  px-4 xl:flex-row">
              
                <div className="flex-auto">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">{person.name}</h3>
                  <p className="text-base leading-7 text-green-600">{person.role}</p>
                  <p className="mt-6 text-base leading-7 text-white">{person.bio}</p>
                </div>
              </li>
              </div>
            ))}
          </ul>
        </div>


 
      </div>
    )
  }