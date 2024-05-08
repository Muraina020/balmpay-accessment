import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Header = () => {
  return (
    <section className="max-container padding-container flex flex-col md:flex-row gap-10 py-10 pb-32 md:gap-15 lg:py-12 xl:flex-row">
    <div className="flex flex-col md:flex-1 justify-center">
      <h1 className="bold-52 lg:bold text-center md:text-left">Earn money plus points while paying your bills</h1>
      <p className="regular-16 mt-6 text-gray-30 text-center md:text-left">
        Earn real cash and points while using BilmaPay for Airtime, Data, Cable TV Subscription, and Paying for your Utility Bills.
      </p>
  
      <div className="flex flex-col md:flex-row justify-center md:justify-start items-center mt-4">
        <Button
          type="button"
          title="submit"
          icon="/rocketLaunch.png"
          variant="btn_dark_green"
        />
        <button className='regular-16 text-blue-500 flexCenter hover:border rounded-full px-3 py-2 bg-white border-blue-500 hover:font-bold cursor-pointer pb-1.5 transition-all mt-3 md:mt-0'>How it works</button>
      </div>
    </div>
  
    <div className='flex flex-col justify-center items-center md:items-start gap-2 mt-5'>
      <div className="relative">
        <Image src="/ellipsebg.png" alt="close" width={280} height={280} />
        <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[200px] h-[200px]">
          <Image src="/mockup2.png" alt="close" width={250} height={250} />
        </div>
        <div className="absolute top-[50px] right-[-30px] transform -translate-x-1/2 -translate-y-1/2">
          <Image src="/ellipse1.png" alt="close" width={80} height={80} />
        </div>
        <div className="absolute top-[90px] right-[20px] transform -translate-x-1/2 -translate-y-1/2">
          <Image src="/star.png" alt="close" width={20} height={20} />
        </div>
        <div className="absolute top-[180px] left-[7px] transform -translate-x-1/2 -translate-y-1/2">
          <Image src="/ellipse2.png" alt="close" width={80} height={80} />
        </div>
        <div className="absolute top-[180px] left-[35px] transform -translate-x-1/2 -translate-y-1/2">
          <Image src="/star.png" alt="close" width={20} height={20} />
        </div>
      </div>
      <div className='flex gap-6 py-2'>
        <Image src="/appstore1.png" alt='appstore' width={150} height={60}/>
        <Image src="/googleplay1.png" alt='appstore' width={150} height={60}/>
      </div>
    </div>
  </section>
  
  

  )
}

export default Header