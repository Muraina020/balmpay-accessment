import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className='flex flex-col items-center my-15'>
    <h2>Features</h2>
    <p className='text-2xl text-gray-30 py-5 '>Why you should use BilmaPay</p>
 
        <div className='flex flex-col md:flex-row md:items-center gap-14 p-5 md:p-10 bg-white mt-8'>
        <div className='flex flex-col gap-1'>
                <h2 className='text-bold text-3xl text-black'>Buy Power - Nepa Light!</h2>
                <span className='text-xl text-gray-30 py-4'>Pay once and we will manage the subsequent payment for you.</span>
                <a href="/">Learn More ...</a>
            </div>
            <Image src="/mobileimg.png" alt='mobile' className="w-full md:w-[350px]" width={350} height={100}/>
        </div>
  

    <div className='flex flex-col md:flex-row md:gap-20 p-5 md:p-10 bg-white mt-5'>
        <Image src="/mobi.png" alt='mobi' className="w-full md:w-[300px]" width={300} height={80}/>
        <div className='flex flex-col gap-1'>
            <h2 className='text-bold text-3xl text-black'>Buy Power - Nepa Light!</h2>
            <span className='text-xl text-gray-30 py-4'>Pay once and we will manage the subsequent payment for you.</span>
            <a href="/">Learn More ...</a>
        </div>
    </div>

    <div className='flex flex-col md:flex-row gap-20 p-5 md:p-10 bg-white mt-5'>
        <div className='flex flex-col gap-1'>
            <h2 className='text-bold text-3xl text-black'>Buy Power - Nepa Light!</h2>
            <span className='text-xl text-gray-30 py-4'>Pay once and we will manage the subsequent payment for you.</span>
            <a href="/">Learn More ...</a>
        </div>
        <Image src="/tv.png" alt='tv' className="w-full md:w-[300px]" width={250} height={80}/>
    </div>
</section>

  )
}

export default Features