import Image from 'next/image'
import apple from '../assets/apple.jpg'
import Brown from '../assets/BrownOnion.jpg'
import kiwi from '../assets/kiwi.jpg'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

function OnSaleProduct() {

    const featuredProducts = [
        { name: "Apple", price: "5.50", img: apple },
        { name: "Brown Onion Pepper", price: "3.20", img: Brown },
        { name: "kiwi", price: "3.30", img: kiwi },
    ]
    return (
        <div className="mb-2 p-3 bg-white rounded-2xl">
            <h2 className="font-bold text-xl mb-2">On Sale</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {featuredProducts.map((product, index) => (
                    <Card key={index} className="overflow-hidden py-0">
                        <div className="bg-[#f5f5f0] flex justify-center">
                            <Image
                                src={product.img}
                                alt={product.name}
                                width={120}
                                height={120}
                                className=" w-auto object-contain"
                            />
                        </div>
                        <CardContent >
                            <h3 className="font-medium">{product.name}</h3>
                            <div className='flex items-center justify-between py-4'>
                                <p className="text-green-700 font-bold">${product.price}</p>
                                <div className="flex justify-end">
                                    <Button variant="outline" size="icon" className="w-8 rounded-full">
                                        <span className="sr-only">Add to cart</span>
                                        <span className="text-xl">+</span>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default OnSaleProduct