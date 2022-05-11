import Image from 'next/image'
import React from 'react'
import UnderConstruction from '../../public/danger-hard-hat.png'

const Learn: React.FC<Props> = () => {
  return (
    <div className='text-center text-2xl pt-6 max-w-xl m-auto'>
        <p>
            Archie&#8217;s website should updated every 1 or 2 weeks with new things. For example photos.
        </p>
        <p className='pt-2'>Archie&#8217;s website is currently under construction. It will be updated when it&#8217;s finished.</p>
        <div className='mt-6 relative h-48 w-72 m-auto'>
            <Image src={UnderConstruction} layout='fill' objectFit='contain' />
        </div>
    </div>
  )
}

type Props = {
  
}

export default Learn