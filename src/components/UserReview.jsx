import React from 'react'
import { AiFillStar } from "react-icons/ai"

const UserRev = () => {
    return (
        <div className='flex flex-col w-full md:w-[45%] gap-3 mt-10'>
            <div className="flex gap-1">
                {
                    Array(5).fill().map((_, i) => 
                    <AiFillStar className='text-[#835656]'/>
                    )
                }
            </div>
            <p className='text-sm font-extralight md:text-[16px] text-[black] leading-7'>
            Oakwood Resort is the perfect getaway for nature lovers. The trekking trails were breathtaking, and the bird watching was incredible. The resort's luxurious amenities and incredible hospitality made our stay unforgettable.
            </p>
            <div className='flex items-center gap-3'>
                <img className='w-[45px] h-[45px] rounded-full' src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp" alt='' />
                <h1 className='text-[#FEA116] md:text-[18px] text-[16px]'>USER USERNAME</h1>
            </div>
        </div>
    )
}

export default UserRev