import Image from 'next/image'
import apple from '../assets/apple.jpg'
import Brown from '../assets/BrownOnion.jpg'
import kiwi from '../assets/kiwi.jpg'
import peper from '../assets/pepper.jpg'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import banner from '../assets/banner3.jpg'

function FeaturedProducts() {
    const featuredProducts = [
        { name: "Apple", price: "5.50", img: apple },
        { name: "Brown Onion Pepper", price: "3.20", img: Brown },
        { name: "kiwi", price: "3.30", img: kiwi },
        { name: "papper", price: "2.60", img: peper },
    ]

    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-6 items-start mt-6'>
                {/* 1 part: Image */}
                <div className='col-span-1 bg-white  rounded-2xl'>
                    <div className="bg-[#f5f5f0] rounded-lg p-2 flex justify-center">
                        <Image
                            src={banner}
                            alt="Vendor"
                            width={300}
                            height={400}
                            className="h-auto w-auto"
                        />
                    </div>
                </div>

                {/* 4 parts: Featured Products */}
                <div className="col-span-4 bg-white p-4 rounded-2xl">
                    <h2 className="font-bold text-xl mb-4">Featured Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {featuredProducts.map((product, index) => (
                            <Card key={index} className="overflow-hidden">
                                <div className=" flex justify-center">
                                    <Image
                                        src={product.img}
                                        alt={product.name}
                                        width={250}
                                        height={250}
                                        className=" object-contain"
                                    />
                                </div>
                                <CardContent className="flex justify-between items-center">
                                    <h3 className="font-medium">{product.name}</h3>
                                    <p className="text-green-700 font-bold">${product.price}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts
