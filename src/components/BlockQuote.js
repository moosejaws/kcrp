import BannerImg from '../banner1.jpg'

export default function BlockQuote() {
    return (
      <div className="bg-none py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 font-bold">
          <div className="relative overflow-hidden bg-gray-900/90 rounded-3xl px-6 py-20 shadow-xl sm:rounded-6xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <img
              className="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
              src={BannerImg}
              alt=""
            />
            <div className="absolute inset-0 bg-zinc-950/80 mix-blend-multiply" />
            <div className="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">
             
            </div>
            <div className="absolute  -top-20 transform-gpu blur-3xl" aria-hidden="true">
           
         
            </div>
            <div className="relative mx-auto max-w-2xl lg:mx-0">
              <figure>
                <blockquote className="mt-6  text-white sm:text-lg sm:leading-8">
                  <p>
                  <span class=' font-semibold'>"The King County Reparations Project is not just a film; it's a movement towards acknowledging past injustices and paving the way for a future where the African American community can reclaim its rightful place in the fabric of King County.”</span>

                  </p>
                </blockquote>
            
              </figure>
            </div>
          </div>
        </div>
      </div>
    )
  }
  