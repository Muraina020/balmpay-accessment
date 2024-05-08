import Image from 'next/image'
import React from 'react'

const Questions = () => {
  return (
   <section  className='max-container padding-container flex flex-col md:flex-row gap-5 p-5 bg-white mt-12'>
    <div className='flex-1'>
     <Image src="/questn.png" alt='questn' width={400} height={100}/>
     </div>

        <div className='flex flex-1 flex-col gap-2 pt-10'>
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