import { ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import customer1 from '../../assets/customarlogo/img1.png'
import customer2 from '../../assets/customarlogo/img2.png'
import customer3 from '../../assets/customarlogo/img3.png'
import customer4 from '../../assets/customarlogo/img4.png'
import customer5 from '../../assets/customarlogo/img5.png'
import customer6 from '../../assets/customarlogo/img6.png'
import customer7 from '../../assets/customarlogo/img7.png'
import customer8 from '../../assets/customarlogo/img8.png'
import customer9 from '../../assets/customarlogo/img9.png'
import Marquee from 'react-fast-marquee'

function Customar() {
    const clientLogos = [
        { name: "Client 1", logo: customer1 },
        { name: "Client 2", logo: customer2 },
        { name: "Client 3", logo: customer3 },
        { name: "Client 4", logo: customer4 },
        { name: "Client 5", logo: customer5 },
        { name: "Client 6", logo: customer6 },
        { name: "Client 7", logo: customer7 },
        { name: "Client 8", logo: customer8 },
        { name: "Client 9", logo: customer9 },
    ]

    return (
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                    Meet Some of Our Clients
                </h1>

                {/* Marquee Left to Right */}
                <Marquee direction="right" className="flex items-center gap-12 mb-10" speed={40} pauseOnHover>
                    {clientLogos.map((item, index) => (
                        <div key={index} className="bg-white p-4 m-4 rounded shadow-md">
                            <Image
                                src={item.logo}
                                width={100}
                                height={100}
                                alt={item.name}
                            />
                        </div>
                    ))}
                </Marquee>

                {/* Marquee Right to Left */}
                <Marquee direction="left" className="flex items-center gap-12" speed={40} pauseOnHover>
                    {clientLogos.map((item, index) => (
                        <div key={index} className="bg-white p-4 m-4 rounded shadow-md">
                            <Image
                                src={item.logo}
                                width={100}
                                height={100}
                                alt={item.name}
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}

export default Customar
