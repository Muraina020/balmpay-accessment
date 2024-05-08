import React from 'react'
import Button from './Button'
import Image from 'next/image'

const BilmaPay = () => {
  return (
    <section className="max-container padding-container flex flex-col md:flex-row gap-10 py-10 pb-10 md:gap-20 lg:py-12 xl:flex-row mt-20">

<div className="relative z-20 flex justify-center">
          <div className="max-w-[520px]">
            <h1 className="bold-40 md:bold text-2xl">Download the BilmaPay App to get started</h1>
            <p className="regular-16 mt-6 text-gray-30">
            You can download the BilmaPay mobile app on Google Playstore to get started and enjoy benefits and discounts. Hurry!
            </p>
    
            <div className="flex flex-col w-full gap-3 sm:flex-row mt-4">
            <Button
            type="button"
            title="submit"
            icon="/rocketLaunch.png"
            variant="btn_dark_blue"
    
            />            
            </div>
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
    </div>
   
      </section>
      
  )
}

export default BilmaPay