import React from 'react'

const Showcase = () => {
  return (
    <section className='flex flex-col items-center px-12 my-10'>
       <h1 className='text-3xl text-bold text-black'>Our Metrics Tells the Story</h1>
       <p className='text-xl text-gray-20 py-2'>Our metrics gives you the inside scoop on our success</p>
    <div className='flex gap-10 py-10'>
       <div className='flex flex-col p-10 bg-white text-center shadow-2xl'>
        <h2 className='text-2xl text-bold text-black'>1k+</h2>
        <span className='text-[16px] text-bold'>People Used</span>
       </div>
       <div className='flex flex-col p-10 bg-white text-center shadow-2xl'>
        <h2 className='text-2xl text-bold text-black'>1.1k+</h2>
        <span className='text-[16px] text-bold'>App Downloads</span>
       </div>
       <div className='flex flex-col p-10 bg-white text-center shadow-2xl'>
        <h2 className='text-2xl text-bold text-black'>12k+</h2>
        <span className='text-[16px] text-bold'>Daily Utility Bills Processed</span>
       </div>
       <div className='flex flex-col p-10 bg-white text-center shadow-2xl'>
        <h2 className='text-2xl text-bold text-black'>15k+</h2>
        <span className='text-[16px] text-bold'>Total Utility Bills Processed</span>
       </div>
    </div>
</section>
  )
}

export default Showcase