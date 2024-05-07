import Image from 'next/image'
import React from 'react'

const Questions = () => {
  return (
   <section  className='max-container padding-container flex gap-12 p-5 bg-white mt-12'>
     <Image src="/questn.png" alt='questn' width={300} height={80}/>
        <div className='flex flex-col gap-1 pt-10'>
            <div className='flex flex-col p-5 bg-white relative shadow-sm'>
            <span className='absolute right-3 target:2'>
            <Image src="/uparrow.png" alt='uparrow' width={20} height={20}/>
            </span>
            <h3 className='text-bold text-xl text-black'>Who can use BilmaPay?</h3>
            <span className='text-[14px] text-gray-30'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</span>
            </div>

            <div className='flex flex-col p-5 bg-white relative shadow-sm'>
            <span className='absolute right-3 target:2'>
            <Image src="/downarrow.png" alt='uparrow' width={20} height={20}/>
            </span>
            <h3 className='text-bold text-xl text-black'>Why Use BilmaPay?</h3>
            </div>
            <div className='flex flex-col p-5 bg-white relative shadow-sm'>
            <span className='absolute right-3 target:2'>
            <Image src="/downarrow.png" alt='uparrow' width={20} height={20}/>
            </span>
            <h3 className='text-bold text-xl text-black'>What Makes Us Different?</h3>
            </div>
        </div>
   </section>
  )
}

export default Questions