import React from "react";
import Wrapper from "../shared/Wrapper";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div className=" dark:bg-gradient-to-r from-[#112B59] to-[#07174F]">
            <Wrapper>
                <div className=" flex-col md:justify-center items-center pl-5 md:px-10 pt-14 pb-7 ">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        <div>
                            <Link href={'/'}>
                                <Image src={'/images/ai.png'} alt="" width={500} height={500} className="w-[180px]" />
                            </Link>
                            <p className="text-[16px] font-[400] md:w-[300px] mt-4">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae ab illo inventore veritatis et quasi architecto beatae
                                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit.
                            </p>
                            <div className="flex items-center justify-start gap-3 mt-5 md:mb-10">
                                <div className="bg-custom-blue rounded-full w-[40px] h-[40px] flex items-center justify-center">
                                    <Link href={''}>
                                        <Image src={'/images/facebook.svg'} width={400} height={400} alt="" className="w-[12px]" />
                                    </Link>
                                </div>
                                <div className="bg-custom-blue rounded-full w-[40px] h-[40px] flex items-center justify-center">
                                    <Link href={''}>
                                        <Image src={'/images/instagram.svg'} width={400} height={400} alt="" className="w-[20px]" />
                                    </Link>
                                </div>
                                <div className="bg-custom-blue rounded-full w-[40px] h-[40px] flex items-center justify-center">
                                    <Link href={''}>
                                        <Image src={'/images/youtube.svg'} width={400} height={400} alt="" className="w-[20px]" />
                                    </Link>
                                </div>
                                <div className="bg-custom-blue rounded-full w-[40px] h-[40px] flex items-center justify-center">
                                    <Link href={''}>
                                        <Image src={'/images/twitter.svg'} width={400} height={400} alt="" className="w-[20px]" />
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className="md:w-[130px] md:mx-auto">
                            <h2 className="text-[24px] font-[500] pb-4 text-primary-blue">Company</h2>
                            <ul className="flex flex-col space-y-4 text-[16px] font-[400]">
                                <Link href={'/about-us'}>
                                    <li>About Us</li>
                                </Link>
                                <Link href={'/privacy-policy'}>
                                    <li>Privacy Policy</li>
                                </Link>
                                <Link href={'/latest-news'}>

                                    <li>Latest News</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="md:w-[180px] ">
                            <h2 className="text-[24px] font-[500] pb-4 text-primary-blue">Use Cases</h2>
                            <ul className="flex flex-col space-y-4 text-[16px] font-[400]">
                                <Link href={'/team'}>
                                    <li>For Team</li>
                                </Link>
                                <Link href={'/email-marketers'}>
                                    <li>For Email Marketers</li>
                                </Link>
                                <Link href={'/blog-writers'}>

                                    <li>For Blog Writers</li>
                                </Link>
                                <Link href={'/social-managers'}>

                                    <li>For Social Managers</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="md:w-[300px] md:ml-[-3rem]">
                            <h1 className="text-[24px] font-[500] pb-4 text-primary-blue ">
                                News & Updates
                            </h1>
                            <p className="text-[16px] font-[400]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <div className="flex my-5 ml-[-3rem] md:ml-0 ">
                                <div className="bg-gradient-to-br from-[#27B6D7] via-[#07174F54] to-[#27B6D7] bg-opacity-50 rounded-md mx-auto p-[1px]">
                                    <div className="relative  rounded-md flex-grow w-full md:w-[300px] bg-white dark:bg-gradient-to-r from-[#112B59] to-[#07174F]">
                                        <input
                                            type="text"
                                            placeholder="Email Address"
                                            className="md:w-[300px] w-[250px] focus:outline-none px-5 h-[50px] bg-transparent rounded-md"
                                        />
                                        <button
                                            type="button"
                                            className="absolute top-[10px] right-3 bottom-0  bg-primary-blue text-white h-[30px] px-2 md:px-4 py-1 rounded-md"
                                        >
                                            Subscribe
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                 
                </div>
            </Wrapper>
        </div>
    );
};

export default Footer;
