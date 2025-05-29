import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import tea from '../assets/tea.png'
import teaa from '../assets/teaa.png'

function Promotion() {
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-green-600 to-teal-500 rounded-lg p-6 text-white">
                    <div className='flex justify-between items-center'>
                        <div>
                            <h3 className="text-2xl font-bold mb-1">Green Tea</h3>
                            <h4 className="text-2xl font-bold mb-3">Longing</h4>
                            <p className="text-sm mb-4 opacity-90">
                                Cleaner's which enjoy health benefits
                                <br />
                                is bookloo1 und pastam honix
                            </p>
                            <Button variant="secondary" size="sm" className="bg-white text-green-800 hover:bg-gray-100">
                                SHOP NOW
                            </Button>
                        </div>
                        <div>
                            <Image src={tea} width={500} height={500} alt='tea' />
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
                    <div className='grid grid-cols-2   items-center justify-between'>

                        <div>
                            <h3 className="text-2xl md:text-4xl xl:text-6xl font-bold text-green-800 mb-1">On Trending</h3>
                            <h4 className="text-2xl md:text-4xl xl:text-6xl font-bold text-green-800 mb-3">Coconut Milk</h4>
                            <p className="text-sm text-green-700 mb-4">
                                Enjoy a cream, for short
                                <br />
                                and mild
                            </p>
                            <Button variant="secondary" size="sm" className="bg-white text-green-800 hover:bg-gray-100">
                                SHOP NOW
                            </Button>
                        </div>
                        <div>
                            <Image
                                src={teaa}
                                alt="Coconut Milk"
                                width={800}
                                height={800}
                                className="h-auto w-auto"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promotion