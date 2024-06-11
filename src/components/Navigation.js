import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../logo.webp'


const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'See the Film', href: '/see-the-film', current: false },
  { name: 'Events', href: '/events', current: false },  
  { name: 'Resources', href: '/resources', current: false },

  { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  return (
    <>
       <nav class="bg-zinc-950  sticky top-0 z-50">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
   
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
            <h1  class="text-white text-4xl lg:text-3xl font-semibold"><span >K</span><span class="text-[#Fcdd09]">C</span><span class='text-[#da1218]' >R</span><span class="text-green-600">P</span></h1>
        </div>

        <div class="hidden  sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <a href="/" class="text-white px-3 py-2 border-2  border-zinc-950  hover:border-red-600  rounded-sm text-sm lg:text-base font-medium" aria-current="page">Home</a>
            <a href="/about" class="text-white border-2 border-zinc-950  hover:border-red-600 rounded-sm px-3 py-2 text-sm lg:text-base font-medium">About the Project</a>
            <a href="/contact" class="text-white border-2 border-zinc-950 hover:border-red-600  rounded-sm px-3 py-2 text-sm lg:text-base font-medium">Contact</a>

          </div>
        </div>
      </div>
   
    </div>
  </div>

  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-2 px-2 pb-4 pt-2">
      <a href="/" class="text-white border-2 px-3 py-2  border-zinc-950  hover:border-red-600 text-base w-full inline-block font-medium" >Home</a>
      <a href="/about" class="text-white w-full inline-block border-2  border-zinc-950  hover:border-red-600 rounded-md px-3 py-2 text-base font-medium">About the Project</a>

      <a href="/contact" class="text-white w-full  border-2   inline-block border-zinc-950 hover:border-red-600  rounded-md px-3 py-2 text-base font-medium">Contact</a>
    </div>
  </div>
</nav>
  </>
  )
}




/****
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-white-500 bg-none border-2 border-red-600 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
     
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
   
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>










 *   <nav class="bg-[#FCDD09]  border-bottom border-yellow-500  ">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-white-500 bg-none border-2 border-red-600 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
     
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
   
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
            <h1 class="text-zinc-950 text-2xl font-bold">KCRP</h1>
        </div>

        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <a href="/" class="text-zinc-950 px-3 py-2 border-2  border-[#FCDD09]  hover:border-red-600  rounded-sm text-sm font-medium" aria-current="page">Home</a>
            <a href="/about" class="text-zinc-950 border-2 border-[#FCDD09]  hover:border-red-600 rounded-sm px-3 py-2 text-sm font-medium">About the Project</a>
            <a href="/contact" class="text-zinc-950 border-2 border-[#FCDD09]  hover:border-red-600  rounded-sm px-3 py-2 text-sm font-medium">Contact</a>
            <a href="/resources" class="text-zinc-950 border-2  border-[#FCDD09] hover:border-red-600  rounded-sm px-3 py-2 text-sm font-medium">Resources</a>
          </div>
        </div>
      </div>
   
    </div>
  </div>

  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-2 px-2 pb-4 pt-2">
      <a href="/" class="text-zinc-950 border-2 px-3 py-2  border-[#FCDD09]  hover:border-red-600 text-base w-full inline-block font-medium" >Home</a>
      <a href="/about" class="text-zinc-950 w-full inline-block border-2  border-[#FCDD09]  hover:border-red-600rounded-md px-3 py-2 text-base font-medium">About the Project</a>
      <a href="/contact" class="text-zinc-950 w-full inline-block border-[#FCDD09]  rounded-md px-3 py-2 text-base font-medium">Contact</a>
      <a href="/resources" class="text-zinc-950 w-full inline-block  border-[#FCDD09]  rounded-md px-3 py-2 text-base font-medium">Resources</a>
    </div>
  </div>
</nav>
 */


/* RESOURCES WHEN YOURE READY */
/*


            <a href="/resources" class="text-zinc-950 border-2  border-[#FCDD09] hover:border-red-600  rounded-sm px-3 py-2 text-sm font-medium">Resources</a>




            */