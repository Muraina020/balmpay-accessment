import Image from 'next/image'
import React from 'react'

const Customers = () => {
  return (
    <section className='flex flex-col items-center px-12 my-10'>
    <h1 className='text-3xl text-bold text-black'>Real  Stories From Satisfied Customers</h1>
    <p className='text-xl text-gray-20 py-2'>See how BilmaPay is making an Impact</p>
 <div className='flex gap-10 py-10'>
    <div className='flex flex-col p-5 bg-white text-center shadow-2xl rounded-sm'>
        <div className='w-[30px] h-[30px] bg-green-200 rounded-full m-auto'></div>
     <h2 className='text-xl bold-20 text-black py-1'>Obi Pascal</h2>
     <span className='text-[16px] bold-md'>Fullstack Developer @JCK</span>
     <p className='text-[13px] text-gray-20 py-4'>“BilmaPay has made making payments seamless for me, i pay my bills with ease and with a less stressful and complex manner, the speed in proccessing payment is a life saver. Highly Recommend!</p>

     <div className="flex items-center gap-2 m-auto py-4">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/rate.png"
                key={index}
                alt="rate"
                width={24}
                height={24}
              />
            ))}
          </div>
    </div>
    <div className='flex flex-col p-5 bg-white text-center shadow-2xl rounded-sm'>
        <div className='w-[30px] h-[30px] bg-green-200 rounded-full m-auto'></div>
     <h2 className='text-xl bold-20 text-black py-1'>Austine Makaveli</h2>
     <span className='text-[16px] bold-md'>Sportbet Analyst @Freelancer</span>
     <p className='text-[13px] text-gray-20 py-4'>“BilmaPay has been a game changer for me. The swift deposit and withdrawal process have helped me make payments and deposits faster and with more consistency. Great job!"</p>

     <div className="flex items-center gap-2 m-auto py-4">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/rate.png"
                key={index}
                alt="rate"
                width={24}
                height={24}
              />
            ))}
          </div>
    </div>
    <div className='flex flex-col p-5 bg-white text-center shadow-2xl rounded-sm'>
        <div className='w-[30px] h-[30px] bg-green-200 rounded-full m-auto'></div>
     <h2 className='text-xl bold-20 text-black py-1'>Abdul Dauda</h2>
     <span className='text-[16px] bold-md'>Trader @Wuse Market</span>
     <p className='text-[13px] text-gray-20 py-4'>"BilmaPay has become a part of my business process. Whether I'm receiving payment from a new customer or need to receive payment from an existing one, this app has everything I need to get the job done quickly and efficiently."</p>

     <div className="flex items-center gap-1 m-auto py-4">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/rate.png"
                key={index}
                alt="rate"
                width={24}
                height={24}
              />
            ))}
          </div>
    </div>
    
 </div>
</section>
  )
}

export default Customers