import React from 'react'
import img1 from '../assets/banner1.jpg'
import img2 from '../assets/banner2.jpg'
import img3 from '../assets/banner3.png'
import Image from 'next/image'

function Advertisement() {
  const banners = [
    { img: img1, text: "Get Every Vegetable <br> You Need" },
    { img: img2, text: "FRESH FROM OUR FARM <br> Get Every 30% Vegetable You Need" },
    { img: img3, text: "First Deal Vegetable <br> You Need" },
  ]

  return (
    <div className='w-[98%] my-10 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {banners.map((banner, index) => (
          <div key={index} className='relative h-64 w-full rounded-lg overflow-hidden'>
            <Image 
              src={banner.img} 
              alt='Banner' 
              fill 
              className='object-cover' 
            />
            <div className='absolute inset-0 bg-[#00000056] bg-opacity-30 flex items-center justify-center'>
              <h2
                className='text-white text-4xl font-bold px-4 text-center'
                dangerouslySetInnerHTML={{ __html: banner.text }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Advertisement
