import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <section className="max-container padding-container flex flex-col md:flex-row gap-20 py-10 pb-32 md:gap-15 lg:py-12 xl:flex-row mt-12">
       <div className='flex flex-col gap-2'>
        <Image src="/bilmlogo.png" alt='logo' width={120} height={80}/>
        <div className='flex gap-4 text-[18px] text-bold py-4'>
          <a href="/">Feature</a>
          <a href="/">About</a>
          <a href="/">Careers</a>
          <a href="/">We're hiring</a>
          <a href="/">Blog</a>
          <a href="/">Contact</a>
        </div>
        <div className='flex gap-4 '>
          <a href="/"><Image src="/fab.png" alt='fab' width={25} height={25}/></a>
          <a href="/"><Image src="/tw.png" alt='tw' width={25} height={25}/></a>
          <a href="/"><Image src="/in.png" alt='in' width={25} height={25}/></a>
          <a href="/"><Image src="/ln.png" alt='ln' width={25} height={25}/></a>
          
        </div>
       </div>

       <div className='flex flex-col gap-2 '>
        <h3>Download the app</h3>
        <div className='flex gap-6 py-2'>
          <Image src="/appstore1.png" alt='appstore' width={170} height={50}/>
          <Image src="/googleplay1.png" alt='appstore' width={170} height={50}/>
        </div>
        <p className='mt-4'>Terms of service <span>Privacy Policy</span></p>
       </div>
    </section>
  )
}

export default Footer