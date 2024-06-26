import ContactForm from './ContactForm'



export default function Contact() {
    return (
        
      <div className="bg-zinc-950 py-14 sm:py-32 lg:px-8">
                
                
                <div className="mx-auto max-w-4xl text-center ">
                  <h2 className="text-4xl  text-white lg:text-5xl">Contact us</h2>

                  <div class='text-white px-4 text-lg leading-8 lg:text-xl text-md lg:mt-14 mt-14'>
                    <p><span class='text-green-500 '>Email: </span>kingco.reparationsproject@gmail.com</p>
                  </div>




                  <div class='w-full lg:px-4 px-3  align-center justify-center vertical lg:gap-2  mt-4'>
                      <div className='grid grid-cols-0 mt-0' >      <p class='text-white text-center text-md px-2 px-4 lg:px-2 lg:text-md  text-center m-auto'>If you or your family were affected by home or business loss in the Central District, Seattle or other areas of King County, we would like to document your story.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 mt-10 flex items-center lg:justify-left  gap-x-2 lg:gap-x-6  gap-y-6 justify-center">
                  <a
                    href="https://forms.gle/DpUVMJh9qgK9pLBr9"
                    target='_blank'
                    className="rounded-sm hover:bg-[#FCDD09]   py-5 md:px-3.5 md:py-3.5  text-sm border-2 border-inside border-[#FCDD09]  text-center lg:text-sm  font-semibold text-white shadow-sm   hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                  INTEREST FORM     
                  </a>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSd1TQP1Yant_6o30MoEjhuKnXtkGWflcgOqwpd3So7h1-aMgw/viewform"
                    target='_blank'
                    className=" text-center rounded-sm bg-zinc-950  py-5 md:px-3.5 md:py-3.5  text-sm border-2 border-inside border-red-600 lg:text-sm  font-semibold text-white shadow-sm hover:bg-red-600 transition duration-150 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                  SHARE YOUR STORY
                  </a>
                  <a
                    href="https://donorbox.org/king-county-reparations-project?default_interval=o"
                    target='_blank'
                    className=" text-center rounded-sm bg-zinc-950  py-5  md:px-3.5 md:py-3.5 text-sm border-2 border-inside border-green-600 lg:text-sm text-sm font-semibold text-white shadow-sm hover:bg-green-600 transition duration-150 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                  MAKE A DONATION
                  </a>


                </div>  
                </div>
                </div>
                <div>
                </div>
                <ContactForm />


      </div>

   
    )
}