import data from '@/data/data'
import Image from 'next/image'
import React from 'react'
import { CarouselPlugin } from '../Slider'

function Review() {
  
    return (
        <div>
            <CarouselPlugin data={data}/>
        </div>
    )
}

export default Review