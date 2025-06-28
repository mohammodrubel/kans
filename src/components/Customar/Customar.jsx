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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Meet Some of Our Clients
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Discover how leading food businesses have transformed their supply chains through our comprehensive
                            import and distribution network.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-[#016630] hover:bg-[#016630] text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                                Explore Success Stories
                                <ChevronRightIcon className="ml-2 h-5 w-5" />
                            </button>
                            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors">
                                View All Clients
                            </button>
                        </div>
                    </div>
                    <div className="bg-white p-10 rounded-2xl shadow-lg">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                            {clientLogos.map((client, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center h-20 opacity-70 hover:opacity-100 transition-opacity"
                                >
                                    <Image width={200} height={200} src={client.logo} alt="Image"
                                        className="max-h-16 max-w-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customar