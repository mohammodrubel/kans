"use client"
import { default as img1, default as img6 } from '../assets/sale.png'
import img2 from '../assets/sale2.png'
import img3 from '../assets/sale3.png'
import img4 from '../assets/sale4.png'
import img5 from '../assets/sale5.png'
import BestSellingSection from './BestSellingSection'
import CategorySidebar from './CategorySidebar'
import MajorTopVendor from './MajorTopVendor'
import OnSaleSidebar from './OnSaleSidebar'
import ProductCard from './ProductCard'

function Banner() {
    const fruits = [
        {
            id: 1,
            name: "Apple",
            price: 1.99,
            image: img1,
        },
        {
            id: 2,
            name: "Banana",
            price: 0.99,
            image: img2,
        },
        {
            id: 3,
            name: "Orange",
            price: 1.49,
            image: img3,
        },
        {
            id: 4,
            name: "Strawberry",
            price: 2.99,
            image: img4,
        },
        {
            id: 5,
            name: "Watermelon",
            price: 3.99,
            image: img5,
        },
        {
            id: 6,
            name: "Pineapple",
            price: 2.49,
            image: img6,
        },
    ]

    console.log(fruits)

    return (
        <div className='w-[98%] mx-auto'>
            <div className='w-full mx-auto'>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto">
                    <div className="md:col-span-1">
                        <CategorySidebar />
                        <OnSaleSidebar />
                    </div>
                    <div className="md:col-span-2">
                    
                        <MajorTopVendor />
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto'>
                            {
                                fruits?.map((item, index) => (
                                    <ProductCard  item={item} key={index} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="md:col-span-1">
                        <BestSellingSection />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner