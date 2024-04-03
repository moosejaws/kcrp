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
      }

    // More people...
  ]
  
  export default function Team() {
    return (
      <div className=" bg-zinc-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Meet our team</h2>

          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {people.map((person) => (
              <li key={person.name} className="rounded-2xl text-xl border-2 border-green-600 px-8 py-10">
                <img className="mx-auto h-48 w-48  rounded-full md:h-56 md:w-56" src={person.imageUrl} alt="" />
                <h1 className="mt-6 text-base font-semibold leading-7 tracking-normal text-white">{person.name}</h1>
                <p className="text-sm leading-6 text-green-600">{person.role}</p>
                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                  <li>
                    <a href={person.xUrl} className="text-[#FCDD09] hover:text-gray-300">
                      <span className="sr-only">X</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={person.linkedinUrl} className="text-[#FCDD09] hover:text-gray-300">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
                <p className="text-sm leading-6 mt-6 text-white">{person.bio}</p>
                <p className="text-sm leading-6 mt-4 text-white">{person.bio2}</p>


              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  