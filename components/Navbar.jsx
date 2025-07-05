"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/public/assets/logo.png"
import { Button } from './ui/button';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className='bg-black flex flex-row items-center px-5 md:px-50 py-6 md:py-10 text-gray-400 justify-between'>

      <Link href="/">
        <div className='flex flex-row gap-1.5'>
          <Image src={logo} height={40} width={40} alt='StrongX Logo' className='h-10 w-10' />
          <h2 className='text-yellow-300 font-bold text-3xl'>StrongX</h2>
        </div>
      </Link>

      <div className='hidden lg:flex flex-1 justify-center'>
        <ul className='flex flex-row space-x-4 text-xl cursor-pointer'>
          <li className='hover:text-yellow-300 transition-colors duration-300'>Home</li>
          <li className='hover:text-yellow-300 transition-colors duration-300'>About</li>
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
              <span>Services</span>
              <ChevronDown className="transition-transform duration-300 group-hover:rotate-180" size={20} />
            </div>

            <div className="absolute top-full mt-2 hidden group-hover:flex flex-col bg-zinc-800 p-4 rounded shadow-md z-50 min-w-[150px]">
              <ul className="space-y-2 text-white text-lg">
                <li className="hover:text-yellow-300">Gym</li>
                <li className="hover:text-yellow-300">Crossfit</li>
                <li className="hover:text-yellow-300">Martial Arts</li>
                <li className="hover:text-yellow-300">Yoga</li>
              </ul>
            </div>
          </li>

          <li className='hover:text-yellow-300 transition-colors duration-300'>Contact Us</li>
        </ul>
      </div>
      <Button className="hidden lg:block bg-yellow-300 text-black font-semibold hover:bg-amber-300 duration-300 transition-colors cursor-pointer">
        Try for FREE
      </Button>

      <div className='lg:hidden'>
        <button
          onClick={toggleMenu}
          className={`focus:outline-none transform transition-transform duration-300 ${isOpen ? 'rotate-z-[90deg]' : 'rotate-z-0'}`}
        >
          {!isOpen ?
            <Menu className="text-gray-500" size={32} /> : <X className="text-gray-500" size={32} />
          }
        </button>
      </div>

      {
        isOpen && (
          <div className='lg:hidden absolute top-[88px] md:top-[104px] left-0 flex flex-col w-full bg-black pb-8 items-start px-5'>
            <ul className='flex flex-col gap-2 text-2xl font-bold w-full'>
              <li>Home</li>
              <hr className='font-extralight text-slate-500' />
              <li>About</li>
              <hr className='font-extralight text-slate-500' />
              <li>Services</li>
              <hr className='font-extralight text-slate-500' />
              <li>Contact Us</li>
              <hr className='font-extralight text-slate-500' />
            </ul>
            <Button className="mt-5 bg-yellow-400 text-black font-semibold">
              Try for FREE
            </Button>
          </div>
        )
      }
    </div>
  )
}

export default Navbar