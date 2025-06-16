'use client'
import { Users } from 'lucide-react'
import Image from 'next/image'
import img1 from '../../assets/team/img1.jpg'
import img2 from '../../assets/team/img2.jpg'
import img3 from '../../assets/team/img3.jpg'
import img4 from '../../assets/team/img1.jpg'
import img5 from '../../assets/team/img2.jpg'
import img6 from '../../assets/team/img3.jpg'
import img7 from '../../assets/team/img1.jpg'
import img8 from '../../assets/team/img2.jpg'
import img9 from '../../assets/team/img3.jpg'
import img10 from '../../assets/team/img1.jpg'
import img11 from '../../assets/team/img2.jpg'
import img12 from '../../assets/team/img3.jpg'
import img13 from '../../assets/team/img1.jpg'
import img14 from '../../assets/team/img2.jpg'
import img15 from '../../assets/team/img3.jpg'


function Team() {
    const teamdata = [
        { name: 'Ariana Khan', specialist: 'Business Manager', img:img1 },
        { name: 'Tanvir Alam', specialist: 'Marketing Expert', img:img2 },
        { name: 'Farzana Nila', specialist: 'UI/UX Designer', img:img3 },
        { name: 'Sajid Rahman', specialist: 'Full Stack Developer', img:img4 },
        { name: 'Nadia Haque', specialist: 'Project Coordinator', img:img5 },
        { name: 'Rezaul Karim', specialist: 'DevOps Engineer', img:img6 },
        { name: 'Tania Chowdhury', specialist: 'Product Manager', img:img7 },
        { name: 'Imran Hossain', specialist: 'QA Specialist', img:img8 },
        { name: 'Mim Akter', specialist: 'HR Executive', img:img9 },
        { name: 'Shahriar Kabir', specialist: 'Content Strategist', img: img10 },
        { name: 'Rifat Mahmud', specialist: 'Digital Marketer', img: img11 },
        { name: 'Mahira Rahman', specialist: 'Graphic Designer', img: img12 },
        { name: 'Zubair Hasan', specialist: 'Frontend Developer', img: img13 },
        { name: 'Anika Sultana', specialist: 'Backend Developer', img: img14 },
        { name: 'Fahim Reza', specialist: 'Mobile App Developer', img: img15 },
      
    ];

    return (
        <div className='container mx-auto my-8'>
            <div className="text-center my-10">
                <div className="flex items-center justify-center mb-6">
                    <Users className="h-12 w-12 text-[#016630] mr-4" />
                    <h1 className="text-4xl text-[#016630] md:text-6xl font-bold">
                        Meet Our Team
                    </h1>
                </div>
                <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
                    The dedicated professionals behind BestFoodImporters, bringing you quality and excellence in every import
                </p>

                <div className='grid grid-cols-1 mx-auto md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center gap-5 mt-10'>
                    {teamdata.map((item, index) => (
                        <div key={index} className='relative mx-auto group w-[200px] h-[200px]'>
                            <Image
                                className='rounded-2xl w-full h-full text-center object-cover'
                                src={item.img}
                                width={200}
                                height={200}
                                alt='Team member'
                            />

                            {/* Overlay */}
                            <div className='absolute inset-0 bg-[#016630] rounded-2xl opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center flex-col text-white text-center px-2'>
                                <h2 className='text-lg font-bold'>{item.name}</h2>
                                <p className='text-sm'>{item.specialist}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team
