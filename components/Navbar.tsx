import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='border-2 flexBetween max-container padding-container relative z-30 py-5'>
    <Link href="/" className='flex'>
        <Image src="/navlogo.png" alt="logo" width={74} height={29} className='w-[35px] h-[25px] md:w-[80px] md:h-[50px]'/>
        <span className='text-bold text-[18px] md:text-2xl text-black mt-[4px] md:mt-[10px]'>BilmaPay</span>
    </Link>

    <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className='regular-16 text-blue-500 flexCenter hover:border rounded-full px-3 py-2 bg-white border-blue-500 hover:font-bold cursor-pointer pb-1.5 transition-all '  >
             {link.label}
            </Link>
        ))}
    </ul>
    <div className='lg:flexCenter hidden'>
        <Button
        type="button"
        title="submit"
        icon="/rocketLaunch.png"
        variant="btn_dark_green"

        />
    </div>

    <Image
    src="/menuicon.png"
    alt='menu'
    width={30}
    height={30}
    className='inline-block cursor-pointer lg:hidden'
    />
    </nav>
  )
}

export default Navbar