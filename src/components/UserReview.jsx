import { AiFillStar } from "react-icons/ai"
import "./style.css"
import { revData } from "../pages/data"
import { useEffect, useState } from "react"
import "./style.css"

const UserRev = ({index}) => {

    const [animation, setAnimation] = useState(false)

    useEffect(()=>{
        setAnimation(true);

        const timeout = setTimeout(() => {
            setAnimation(false)
        }, 1000);

        return () =>{
            clearTimeout(timeout)
        }
    },[index])

    return (
        <div className={`${animation ? 'animate' : ''} flex flex-col md:flex-row md:w-[100%] gap-3 mt-10 items-center justify-center`}>
            <div className="w-[500px]">
            {/* <div className="flex gap-1 items-center justify-center mb-2">
                {
                    Array(5).fill().map((_, i) => 
                    <AiFillStar key={i} className='text-[#835656]'/>
                    )
                }
            </div> */}
            <p className='u-rev text-sm md:text-[21px] text-center font-semibold md:px-0 text-[rgba(0,0,0,0.7)] leading-7'>
                " &nbsp;
                {
                    revData[index].rev
                }
                &nbsp;
                "
            </p>
            </div>
            <div className='flex w-[400px] flex-col items-center gap-3'>
                <img className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full' src={revData[index].picture} alt='' />
                <h1 className='text-[#FEA116] md:text-[18px] font-semibold mb-4 text-[16px] md:mb-0'>{revData[index].username}</h1>
            </div>
        </div>
    )
}

export default UserRev