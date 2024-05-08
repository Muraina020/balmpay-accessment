import Image from 'next/image'
import React from 'react'

const Partner = () => {
  return (
    <section className='max-container padding-container flex flex-col items-center my-10'>
    <h2>Our Partners</h2>
    <div className='flex justify-center gap-[5px] md:gap-20 py-10 '>
    <Image src="/vtpass.png" alt='vtpass' className="w-[100px] md:w-[180px]" width={180} height={60}/>
    <Image src="/paystack1.png" alt='paystack' className="w-[120px] md:w-[270px]" width={270} height={100}/>
    <Image src="/wemaicon.png" alt='wema' className="w-[130px] md:w-[270px]" width={270} height={100}/>
</div>

</section>

  )
}

export default Partner