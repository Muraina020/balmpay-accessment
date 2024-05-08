import React from 'react'

const Showcase = () => {
  return (
    <section className='max-container padding-container flex flex-col items-center px-5 md:px-12 my-10'> 
    <h1 className='text-2xl md:text-3xl text-bold text-black text-center'>Our Metrics Tells the Story</h1>
    <p className='text-lg md:text-xl text-gray-20 py-2 text-center'>Our metrics gives you the inside scoop on our success</p> 
    <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 py-5 md:py-10'> 
    <div className='flex flex-col p-5 md:p-10 bg-white text-center shadow-2xl'>
        <h2 className='text-lg md:text-2xl font-bold text-black'>1k+</h2>
        <span className='text-[14px] md:text-[16px] font-bold'>People Used</span> 
    </div>
    <div className='flex flex-col p-5 md:p-10 bg-white text-center shadow-2xl'>
        <h2 className='text-lg md:text-2xl font-bold text-black'>1.1k+</h2> 
        <span className='text-[14px] md:text-[16px] font-bold'>App Downloads</span>
    </div>
    <div className='flex flex-col p-5 md:p-10 bg-white text-center shadow-2xl'>
        <h2 className='text-lg md:text-2xl font-bold text-black'>12k+</h2>
        <span className='text-[14px] md:text-[16px] font-bold'>Daily Utility Bills Processed</span> 
    </div>
    <div className='flex flex-col p-5 md:p-10 bg-white text-center shadow-2xl'>
        <h2 className='text-lg md:text-2xl font-bold text-black'>15k+</h2> 
        <span className='text-[14px] md:text-[16px] font-bold'>Total Utility Bills Processed</span>
    </div>
</div>

</section>

  )
}

export default Showcase