import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import square from '../square.png'
import Team from './Team'

const features = [
    
    
    
  {
    name: '1930s - 1960 Redlining, bank redlining',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: ' 1990’s - 2000’s Subprime Lending late',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: '1980s - early 2000s Imminent Domain “Urban Renewal-Teen Dance Ordinance”',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Weed & Seed - Abatement Laws',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Regressive Tax Policy in State of WA  ',
    description:
      'Results in an unfair burden on the poor & people of moderate income who can’t keep their property due to rising property taxes    ',
    icon: FingerPrintIcon,
  },
]




export default function About() {
  return (
    <div>
         <div className="bg-zinc-950 px-5 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                  <h2 className="text-4xl  text-white sm:text-6xl">About KCRP</h2>
                  <p  className="mt-24 text-lg leading-8 text-white">The King County Reparations Project takes viewers on an emotional journey through the Central District and South End, once the pulsating core of African American life in the Pacific Northwest, now a testament to the scars of urban upheaval. Produced at Cascade PBS, this documentary is the first chapter in a series dedicated to capturing the stories of Black individuals who have seen their homes, businesses, and cultural landmarks vanish.</p>


                  <p className="mt-8 text-lg leading-8 text-white">Spanning from the 1950s to the present day, the King County Reparations Project delves into the harrowing impacts of redlining, subprime lending, eminent domain, and other systemic barriers that facilitated the exodus of Black residents. Through heartfelt interviews and historical retrospectives, the film sheds light on the economic, social, and political forces that reshaped and gentrified  culturally vibrant neighborhoods into fragmented echoes of their past.

                  As Seattle grapples with its dwindling African-American population, the film calls for a local and national dialogue on reparations, aiming to address the cumulative effects of slavery, black codes, Jim Crow laws, housing inequality and mass incarceration.
                  </p>
                  <img class=' mt-12 h-20 animation-spin justify-center m-auto' src={square}/>


                </div>
                  <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-22 lg:max-w-4xl">
                    
                        <p className=" mb-4 text-3xl text-[#FCDD09]  font-semibold leading-8 ">
                          Scope of Project</p>
                        <p className=" mb-12 text-lg leading-8 text-white ">
                          The project will focus on five main categories resulting in removal during an approximate timeline starting in the 1960’s until present day.</p>
                          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none sm: justify-centerzm-auto lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                              <div key={feature.name} className="relative">
                                <dt className="text-base font-semibold leading-7 text-white border border-red-500 py-3 px-2">
                                
                                  {feature.name}
                                </dt>
                              </div>
                            ))}
                          </dl>
                          <div class='justify-center text-center '>

                           </div>
                          <p  className="mt-20 text-lg max-w-4xl text-center m-auto leading-8 text-md bg-red-600 text-white bold">Important Notes:</p>
                              <ul className='text-white '>
                              <li className="white p-2 mt-6 max-w-4xl">*This project is dealing with only a segment of the legacy & struggle of various movements and claims to reparations; this one centers on housing inequality in King County from around the 1950s to present day.</li>
                              <li className="white p-2 max-w-4xl">*We recognize the need for local and national dialogue and intend that this project will serve larger plans of action to cover what’s owed in totality of the effects of slavery, black codes, jim crow, mass incarceration.</li>

                              </ul>
                        </div>

                <div>
               



                </div>


              </div>
    </div>
  )
}
