import Image from 'next/image'
import React from 'react'

const Partner = () => {
  return (
    <div className='flex flex-col items-center my-10'>
    <h2>Our Partners</h2>
    <div className='flex gap-12 py-10'>
        <Image src="/vtpass.png" alt='vtpass' width={180} height={80}/>
        <Image src="/paystack1.png" alt='paystack' width={220} height={80}/>
        <Image src="/wemaicon.png" alt='wema' width={220} height={80}/>
    </div>
</div>

  )
}

export default Partner