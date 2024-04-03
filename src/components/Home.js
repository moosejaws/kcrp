import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import logo from '../logo.webp'
import square from '../square.png'




export default function Home() {

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





  return (
    <div className="relative overflow-hidden  bg-gradient-to-br from-zinc-950 to-stone-950">

      
      <div className="hidden lg:absolute lg:inset-0 lg:block" >
        <svg
          className="absolute left-1/2 top-0 -translate-y-8 translate-x-64 transform"
          width={640}
          height={784}
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
           
         
          </defs>
          <rect x={118} width={404} height={784} fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
        </svg>
      </div>

      <div className="relative pb-16 pt-0 sm:pb-24 lg:pb-20">
  

        <main className="mx-auto mt-16 max-w-7xl px-4 px-6 sm:mt-16 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-28">
            <div className="sm:text-center  md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left pt-0 grid ">
               
                <div className=" text-center sm:m-auto font-bold tracking-tight lg:text-5xl text-4xl lg:mb-0 mb-4   grid lg:grid-cols-2 sm:grid-cols-0 gap-x-4 ">
                 <img class='mr-12 w-auto content-start lg:align-left sm:align-center sm:m-auto  m-auto justify-center align-center  ' src={logo} />
                 <div id="title" className=" text-white tracking-wider lg:grid-cols-2 grid-cols-2 sm:grid-cols-0 ">

                  <h1 class='mt-6 lg:text-left leading-tight'>KING COUNTY REPARATIONS PROJECT</h1>
                  </div>
                  </div> 
                 
                 
              <p className="mt-0 ml-2 text-base text-white sm:mt-4 sm:text-xl lg:text-lg xl:text-xl">
              Telling the story of the displacement of African Americans in King County, WA for the purpose of documenting their pain and their suffering in order to establish a case for reparations. </p>
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              <div className="grid grid-cols-0 lg:grid-cols-3 mt-10 flex items-center lg:justify-left  gap-x-6 gap-y-6 justify-center">
            <a
              href="https://forms.gle/DpUVMJh9qgK9pLBr9"
              target='_blank'
              className="rounded-sm hover:bg-[#FCDD09]  px-3.5 py-3.5 lg:py-4  border-2 border-inside border-[#FCDD09]  text-center lg:text-xs text-xs font-semibold text-white shadow-sm   hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             INTEREST FORM
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd1TQP1Yant_6o30MoEjhuKnXtkGWflcgOqwpd3So7h1-aMgw/viewform"
              target='_blank'
              className=" text-center rounded-sm bg-zinc-950 px-3.5 py-3 lg:py-2 border-2 border-inside border-red-600 lg:text-xs text-xs font-semibold text-white shadow-sm hover:bg-red-600 transition duration-150 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             PARTICIPATION FORM
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd1TQP1Yant_6o30MoEjhuKnXtkGWflcgOqwpd3So7h1-aMgw/viewform"
              target='_blank'
              className=" text-center rounded-sm bg-zinc-950 px-3.5 py-3.5 lg:py-4 lg:py-2 border-2 border-inside border-green-600 lg:text-xs text-xs font-semibold text-white shadow-sm hover:bg-green-600 transition duration-150 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             MAKE A DONATION
            </a>


          </div>                
              </div>
            </div>
            <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
              <svg
                className="absolute left-1/2 top-0 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden"
                width={640}
                height={784}
                fill="none"
                viewBox="0 0 640 784"
                aria-hidden="true"
              >
               
                <rect x={118} width={404} height={784} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
              </svg>
              <div className="relative mx-auto w-full rounded-lg   shadow-lg lg:max-w-md ">
               
                  <span className="sr-only">Watch our video to learn more</span>
                  <iframe id="vid" class='lg:mb-24  mb-0 mt-20 m-auto  object-fit' src="https://www.youtube.com/embed/2e5BQZ5ChQw?si=U3rKLc6yuEx7-_V-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
              <div className="bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center">
          <p className="mt-2 text-3xl  text-white sm:text-4xl">
              About the project          </p>
          <p  className="mt-8 mb-8 text-lg leading-8 text-white bg-red">The King County Reparations Project takes viewers on an emotional journey through the Central District and South End, once the pulsating core of African American life in the Pacific Northwest, now a testament to the scars of urban upheaval. Produced at Cascade PBS, this documentary is the first chapter in a series dedicated to capturing the stories of Black individuals who have seen their homes, businesses, and cultural landmarks vanish.</p>
       
      
        </div>
        <div class='justify-center text-center '>
        <img class=' mt-12 h-20 animation-spin justify-center m-auto' src={square}/>

        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-22 lg:max-w-4xl">
        <p className=" mb-4 text-lg font-bold leading-8 text-[#FCDD09] ">
          Scope of Project</p>
        <p className=" mb-12 text-lg font-bold leading-8 text-white">
          The project will focus on five main categories resulting in removal during an approximate timeline starting in the 1960’s until present day.</p>
          <dl className="grid max-w-xl grid-cols-1  m-auto gap-x-8 gap-y-10 lg:max-w-none sm: justify-centerzm-auto lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt className="text-base font-semibold leading-7 text-white border border-red-500 py-3 px-2">
                 
                  {feature.name}
                </dt>
              </div>
            ))}
          </dl>
          <p  className="mt-20 text-lg max-w-lg text-center m-auto leading-8 text-md bg-red-600 text-white bold">Important Notes:</p>
              <ul className='text-white '>
              <li className="white p-10">*This project is dealing with only a segment of the legacy & struggle of various movements and claims to reparations; this one centers on housing inequality in King County from around the 1950s to present day.</li>
              <li>*We recognize the need for local and national dialogue and intend that this project will serve larger plans of action to cover what’s owed in totality of the effects of slavery, black codes, jim crow, mass incarceration.</li>

              </ul>
        </div>

      </div>
   
  
    </div>
    <div class='w-full    align-center justify-center vertical lg:grid lg:grid-cols-2 lg:gap-2'>
      <div className='grid grid-cols-0 mt-0' >      <p class='text-white text-center font-bold max-w-lg lg:text-left text-center m-auto'>If you or your family were affected by home or business loss in the Central District, Seattle or other areas of King County, we would like to document your story.</p>
</div>
<div className="grid grid-cols-0 lg:grid-cols-3 mt-10 flex items-center lg:justify-left  gap-x-6 gap-y-6 justify-center">
            <a
              href="https://forms.gle/DpUVMJh9qgK9pLBr9"
              target='_blank'
              className="rounded-sm hover:bg-[#FCDD09]  px-3.5 py-3.5 lg:py-4  border-2 border-inside border-[#FCDD09]  text-center lg:text-xs text-xs font-semibold text-white shadow-sm   hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             INTEREST FORM
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd1TQP1Yant_6o30MoEjhuKnXtkGWflcgOqwpd3So7h1-aMgw/viewform"
              target='_blank'
              className=" text-center rounded-sm bg-zinc-950 px-3.5 py-3 lg:py-4 border-2 border-inside border-red-600 lg:text-xs text-xs font-semibold text-white shadow-sm hover:bg-red-600 transition duration-150 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             PARTICIPATION FORM
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd1TQP1Yant_6o30MoEjhuKnXtkGWflcgOqwpd3So7h1-aMgw/viewform"
              target='_blank'
              className=" text-center rounded-sm bg-zinc-950 px-3.5 py-3.5 lg:py-4 lg:py-2 border-2 border-inside border-green-600 lg:text-xs text-xs font-semibold text-white shadow-sm hover:bg-green-600 transition duration-150 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             MAKE A DONATION
            </a>


          </div>  
          </div>

        </main>
      </div>

  
    </div>



  )
}


/* 

    <a href="/about" className="text-sm  font-bold leading-6 text-red-600 hover:text-green-600 ">
              Read more <span aria-hidden="true">→</span>
            </a>

                <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>


            */