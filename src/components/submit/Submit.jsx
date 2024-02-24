import React from 'react'

const Submit = () => {
  return (
    <div>
      <div className="absolute md:block hidden left-0 bg-[#2CD7834F]/10 w-[338px] h-[338px] rounded-full blur-3xl"></div>
      <div className="absolute md:block hidden r bg-[#2CD7834F]/10 w-[338px] h-[338px] right-0 rounded-full blur-3xl"></div>
      <div className=" flex flex-col text-center justify-center items-center">
        <h1 className="text-[32px] md:text-[40px] font-[800] bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
          Submit AI Tool
        </h1>
        <p className="text-[18px] font-[500] text-black dark:text-[#FFF] md:px-[15rem] pt-5">
          These are the tools and posts you have favourited. You can remove them from your favourites by clicking the bookmark icon.
        </p>
        <div className='flex flex-col gap-5 px-3 py-5   md:p-10  my-10 w-full md:w-[80%] bg-custom-blue md:h-[670px] border border-primary-border rounded-md'>
          <input placeholder='In Short, please share what the AI tool can do' type="text" className='dark:placeholder-white focus:outline-none text-[13px] md:text-[16px] pl-3 md:pl-5 w-full pt-5 pb-[170px] bg-custom-blue border rounded-md dark:border-primary-border border-primary-dark' />
          <input placeholder='Link to the AI tool' type="text" className='dark:placeholder-white focus:outline-none text-[13px] md:text-[16px] pl-3 md:pl-5 w-full py-3 md:py-5  bg-custom-blue border rounded-md dark:border-primary-border border-primary-dark' />
          <input placeholder='Tool Category' type="text" className='dark:placeholder-white focus:outline-none text-[13px] md:text-[16px] pl-3 md:pl-5 w-full md:py-5 py-3 bg-custom-blue border rounded-md dark:border-primary-border border-primary-dark' />
          <input placeholder='Your Email Address' type="text" className='dark:placeholder-white focus:outline-none text-[13px] md:text-[16px] pl-3 md:pl-5 w-full md:py-5 py-3  bg-custom-blue border rounded-md dark:border-primary-border border-primary-dark' />
        <div className='my-6'>
          <button className='font-[500] md:text-[18px] w-[130px] h-[40px] md:h-[50px] text-white dark:text-white rounded-md  bg-gradient-to-r from-blue-400 via-green-500 to-blue-500'>
            Submit
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Submit