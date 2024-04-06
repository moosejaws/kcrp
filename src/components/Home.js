import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import logo from '../logo.webp'
import square from '../square.png'
import About from './About'


const features = [
    
    
    
  {
    name: '1930s - 1960 Redlining, bank redlining',
    link:
      'https://youtu.be/7z7UyAyMveY?si=blieydWeWgypQB-M',
    icon: CloudArrowUpIcon,
  },
  {
    name: ' 1990’s - 2000’s Subprime Lending late',
    link:
      'https://youtu.be/9vU5bpM-IA0?si=Mz4YLYrtMdMM7A_d',
    icon: LockClosedIcon,
  },
  {
    name: '1980s - early 2000s Imminent Domain “Urban Renewal-Teen Dance Ordinance”',
    link:
      'https://youtu.be/OdZNKr_KSmI?si=2oDfmD3wUeaS11XH.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Weed & Seed - Abatement Laws',
    link:
      'https://youtu.be/gHIXFvC4A8A?si=MO3o-Zp2C70GnY_D',
    icon: FingerPrintIcon,
  },
  {
    name: 'Regressive Tax Policy in State of WA  ',
    link:
      'https://youtu.be/x-x7E4aLr4w?si=a_FsHBNM7qcey5Y5',
    icon: FingerPrintIcon,
  },
]





export default function Home() {

  


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
  

        <main className="mx-auto mt-16 max-w-7xl px-2 sm:mt-16 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-28 lg:ml-4">
            <div className="sm:text-center  md:mx-auto md:max-w-2xl lg:col-span-5 lg:text-left pt-0 grid ">
               
                <div className=" text-center sm:m-auto m-autofont-bold tracking-tight lg:text-4xl text-4xl lg:mb-0 mb-4  w-auto grid lg:grid-cols-2 sm:grid-cols-0 gap-x- ">
                 <img id="logoimage" class=' lg:mt-3 lg:align-left md:align-center justify-center text-center m-auto' src={logo} />
                 <div id="title" className=" text-white tracking-wider lg:grid-cols-2 grid-cols-2 sm:grid-cols-0 ">

                  <h1 class='mt-6 lg:text-left w-full leading-tight'>KING COUNTY REPARATIONS PROJECT</h1>
                  </div>
                  </div> 
                 
                 
              <p className="lg:mt-4 mt-4 lg:p-0 px-2 ml-0 lg:ml-4 text-center lg:text-left text-base text-white sm:text-xl lg:text-lg xl:text-xl">
              Telling the story of the displacement of African Americans in King County, WA for the purpose of documenting their pain and their suffering in order to establish a case for reparations. </p>
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              <div className="grid grid-cols-0 lg:grid-cols-3  lg:ml-4 flex items-center lg:justify-left  gap-x-6 gap-y-6 justify-center">
            <a
              href="https://forms.gle/DpUVMJh9qgK9pLBr9"
              target='_blank'
              className="rounded-sm hover:bg-[#FCDD09]  px-3.5 py-3.5 lg:py-2  border-2 border-inside border-[#FCDD09]  text-center lg:text-xs text-xs font-semibold text-white shadow-sm   hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
              href="https://donorbox.org/king-county-reparations-project?default_interval=o"
              target='_blank'
              className=" text-center rounded-sm bg-zinc-950 px-3.5 py-3.5 lg:py-2 lg:py-2 border-2 border-inside border-green-600 lg:text-xs text-xs font-semibold text-white shadow-sm hover:bg-green-600 transition duration-150 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
              <div className="relative mx-auto w-full rounded-lg lg:max-w-md ">
               
                  <span className="sr-only">Watch our video to learn more</span>
                  <iframe id="vid" class='lg:mb-24  mb-0 mt-20 m-auto  object-fit' src="https://www.youtube.com/embed/2e5BQZ5ChQw?si=U3rKLc6yuEx7-_V-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
              <div className="bg-zinc-950 ">
      




                     <About />





    </div>
    <div class='w-full  sm:px-2  align-center justify-center vertical lg:grid lg:grid-cols-2 lg:gap-2'>
      <div className='grid grid-cols-0 mt-0' >      <p class='text-white text-center text-md px-2 lg:px-2 lg:text-md lg:pt-10 font-semibold max-w-lg lg:text-left text-center m-auto'>If you or your family were affected by home or business loss in the Central District, Seattle or other areas of King County, we would like to document your story.</p>
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
              href="https://donorbox.org/king-county-reparations-project?default_interval=o"
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