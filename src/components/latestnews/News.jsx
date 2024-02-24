import Image from 'next/image'
import React from 'react'
import { BsBookmarkStar } from 'react-icons/bs'

const News = () => {
    const data = [
        {
            id: 1,
            src: "/images/news1.png",
            catIcon: '/images/caticon1.svg',
            category: 'Interesting',
            title: 'How hospitals are using A.I. to fight doctor',
            posted: '4 days ago'
        },
        {
            id: 2,
            src: "/images/news2.png",
            catIcon: '/images/caticon2.svg',
            category: 'Update',
            title: 'Eta disbands protein-folding team in shift towards',
            posted: '4 days ago'
        },
        {
            id: 3,
            src: "/images/news3.png",
            catIcon: '/images/caticon3.svg',
            category: 'Research',
            title: 'AI model can help determine where a patient’s cancer arose',
            posted: '4 days ago'
        },
        {
            id: 4,
            src: "/images/news4.png",
            catIcon: '/images/caticon1.svg',
            category: 'Interesting',
            title: 'How hospitals are using A.I. to fight doctor',
            posted: '4 days ago'
        },
        {
            id: 5,
            src: "/images/news5.png",
            catIcon: '/images/caticon1.svg',
            category: 'Interesting',
            title: 'How hospitals are using A.I. to fight doctor',
            posted: '4 days ago'
        },
        {
            id: 6,
            src: "/images/news6.png",
            catIcon: '/images/caticon1.svg',
            category: 'Interesting',
            title: 'How hospitals are using A.I. to fight doctor',
            posted: '4 days ago'
        },
    ]
    return (
        <div className="mt-16 mb-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-10">
            <div className='absolute top-[50rem] left-0 bg-[#2CD7834F]/10 w-[300px] md:w-[400px] h-[338px] rounded-full blur-3xl'></div>

            {data.map((item, index) => (
                <div
                    key={index}
                    className="w-[330px] md:w-[393px] rounded-md mx-auto border-[2px] border-primary-border"
                >
                    <div className="w-full p-1 backdrop-blur-2xl bg-white dark:bg-custom-blue h-full rounded-md">
                        <div className="flex flex-col mx-3 my-3">
                            <div className="">
                                <Image
                                    src={item.src}
                                    alt=""
                                    width={1080}
                                    height={1080}
                                    className="h-[245px] w-[353px] object-cover rounded-[10px]"
                                />
                                <div className="flex flex-col gap-5 items-start justify-start">
                                    <div className='flex mt-5  items-center '>
                                        <div className=' bg-gradient-to-br from-[#27B6D7] via-[#07174F54] to-[#27B6D7] bg-opacity-50 rounded-md p-[0.9px] '>
                                            <button className='dark:bg-primary-dark  w-[155px] bg-white flex justify-center items-center gap-3 h-[40px]   rounded-md'>
                                                <Image src={item.catIcon} width={300} height={300} className='w-[18px]' />
                                                {item.category}
                                            </button>
                                        </div>
                                        <div className='ml-[5rem] md:ml-[9rem]'>
                                            <button className="text-[16px] flex justify-center items-center gap-3 h-[40px]  py-1 w-full rounded-md">
                                                33
                                                <BsBookmarkStar size={20} />
                                            </button>
                                        </div>

                                    </div>
                                    <p className='text-[24px] font-[600] text-left'>{item.title}</p>
                                    <button className='font-[500] text-[18px] w-[180px]  h-[50px] text-white dark:text-white rounded-md  bg-gradient-to-r from-blue-400 via-green-500 to-blue-500'>
                                        Visit Website
                                    </button>
                                    <div className='border-t border-primary-border w-full'>
                                        <p className='text-left text-slate-400 font-[400] text-[16px] pt-4 pb-3'>
                                            Posted: {item.posted}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default News