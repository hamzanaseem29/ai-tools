import DiscoverDynamic from '@/components/discoverdynamic/DiscoverDynamic'
import Layout from '@/components/shared/Layout'
import Wrapper from '@/components/shared/Wrapper'
import React from 'react'
import { Manrope } from "next/font/google";
const font = Manrope({ subsets: ["latin"] });
const index = () => {
  return (
    <div className={`dark:bg-primary-dark ${font.className}`}>
    <Wrapper>
        <div className='pb-10'>
            <Layout>
                <div className='border dark:border-primary-blue/20 py-2 px-8 rounded-md my-10'>
                    <p className='text-[18px] font-[500]  dark:text-primary-blue/20'>Home <span className='dark:text-white text-black'> {'>'} Discover </span>
                    </p>
                </div>
            </Layout>
            <div>
                <DiscoverDynamic />
            </div>
        </div>
    </Wrapper>
</div>
  )
}

export default index