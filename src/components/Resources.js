import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    title: "King County Reparations Project Youtube Channel",
    url:
      "https://youtube.com/@kingcountyrp?si=-dLf6QUEGYvS-y8s",
  },
  {
    title: "King County Reparations Project Youtube Channel",
    url:
      "https://youtube.com/@kingcountyrp?si=-dLf6QUEGYvS-y8s",
  },


  // More questions...
]

export default function Example() {
  return (
    <div className="bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6   lg:px-8 ">
        <div className="px-5 py-3  lg:px-8">
        <h2 className="text-4xl lg:mt-32 mt-20 text-white lg:text-5xl">Resources</h2>
          
          <div className="mx-auto mt-20 max-w-4xl sm:mt-20 mb-32 lg:mt-22 lg:max-w-4xl">
                    
                   
                        <p className=" mb-12 text-md lg:px-8 leading-8 text-white ">
                          The project will focus on five main categories resulting in removal during an approximate timeline starting in the 1960’s until present day.</p>
                          <dl className="grid max-w-xl grid-cols-1 text-center m-auto gap-x-8 gap-y-10 lg:max-w-none sm: justify-centerzm-auto lg:grid-cols-2 lg:gap-y-16">
                            {faqs.map((faqs) => (
                              <div key={faqs.title} className="relative">
                                <dt className="text-base font-semibold leading-7 text-white border border-red-500 mb-4 py-3 px-2">
                                
                                  {faqs.title}
                                </dt>
                                <a id="watchvid" href={faqs.url} target="_blank" class=' text-white hover:text-red-600  '>Watch Video <span aria-hidden="true" class='text-red-600'>→</span></a>
                              </div>
                            ))}
                          </dl>
                         
                              
                        </div>




        </div>
      </div>
    </div>
  )
}
