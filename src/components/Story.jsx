import React, { useState } from 'react'

const Story = () => {
    const [enable, setEnable] = useState(false)
    return (
        <div className='flex flex-col md:flex-row md:px-20 md:mt-[120px] gap-12 md:gap-0'>
            <div className="md:flex-[1.5] flex  items-center justify-center">
                <div className="flex w-[90%]  flex-col gap-3">
                    {/* <span className='text-[maroon] font-bold'>______ABOUT US</span> */}
                    <h1 className='md:text-5xl text-4xl text-[#FEA116] md:w-[70%] md:leading-[48px] font-bold'>The Story Of Behind Our Resort</h1>
                    <p className='md:mt-[50px] mt-8 md:w-[95%]'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat accusamus illo quasi at quos, voluptatibus rem eos ipsa. Perspiciatis, culpa nostrum! Ipsum laboriosam nihil harum fuga, velit architecto, assumenda nobis nesciunt rem nam et quas veniam repudiandae laudantium ducimus esse perferendis necessitatibus iusto! Consequatur pariatur ducimus facilis rerum esse? Vitae eum repellendus dolorum molestiae, ab eligendi rem omnis magni blanditiis.
                    </p>
                    <img src='img/f1.jpg' alt='' className='md:mt-[80px] mt-8 md:w-[95%] w-[100%] md:rounded-lg rounded-md ' />
                </div>
            </div>
            <div className="flex md:flex-[1] items-center justify-center md:items-start md:justify-start">
                <div className="flex md:w-[70%] w-[90%] flex-col md:ml-10 md:gap-10 gap-8">
                    <img src='/img/f3.jpg' alt='' className='md:h-[500px] h-[400px] md:rounded-lg rounded-md' />
                    <div className='flex flex-col'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse maxime ratione saepe ipsum quidem nisi culpa similique placeat tempore totam reprehenderit, dolores tempora! Qui sapiente deleniti cumque corporis praesentium pariatur.</p>
                        {
                            enable &&
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore ipsam adipisci dignissimos modi optio asperiores deserunt, illo eveniet quos, natus excepturi dolor </p>
                        }
                        <span className='text-[maroon] mt-3 font-bold cursor-pointer' onClick={() => setEnable(!enable)}>{enable ? "Read Less" : "Read More.."}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story
