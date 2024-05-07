import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Header = () => {
  return (
    <section className="max-container padding-container flex flex-row gap-10 py-10 pb-32 md:gap-15 lg:py-12 xl:flex-row">
    <div className="relative z-20 flex flex-1 justify-center">
      <div className="max-w-[520px]">
        <h1 className="bold-52 lg:bold">Earn money plus points while paying your bills</h1>
        <p className="regular-16 mt-6 text-gray-30">
          Earn real cash and points while using BilmaPay for Airtime, Data, Cable TV Subscription, and Paying for your Utility Bills.
        </p>

        <div className="flex flex-col w-full gap-3 sm:flex-row mt-4">
        <Button
        type="button"
        title="submit"
        icon="/rocketLaunch.png"
        variant="btn_dark_green"

        />
         <button className='regular-16 text-blue-500 flexCenter hover:border rounded-full px-3 py-2 bg-white border-blue-500 hover:font-bold cursor-pointer pb-1.5 transition-all '>How it works</button>
            
        </div>
      </div>
    </div>

    <div className='flex flex-col gap-2'>

    <div className="relative flex flex-1 justify-center">
      <div className="relative">
        <Image src="/ellipsebg.png" alt="close" width={280} height={280} />
        <div className="absolute top-[140px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <Image src="/group112.png" alt="close" width={300} height={300} />
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