import React from 'react'

const Skill = () => {
  return ( 
    <div className="flex items-center justify-center max-w-full mx-auto">
        <div  className="  w-[800px] h-[500px] pt-[50px] font-mono text-white">
            <h1 className=" w-4 text-6xl font-bold  duration-75  pb-10">Skill</h1>
            <div className='bg-slate-950 max-w-[600px]  min-h-[350px] mx-auto flex flex-col gap-9 items-center justify-center rounded-3xl'>
                
                <div className='bg-slate-800 gap-3 flex justify-center items-center w-[200px] md:w-[300px] h-[50px] rounded-full cursor-pointer'>
                    {/* <div className='bg-orange-400 w-3 h-3 rounded-full '></div> */}
                    <p className='font-extrabold'>HTML</p>
                </div>

                <div className='bg-slate-800 gap-3 flex justify-center items-center w-[200px] md:w-[300px] h-[50px] rounded-full cursor-pointer'>
                    {/* <div className='bg-blue-400 w-3 h-3 rounded-full '></div> */}
                    <p className='font-extrabold'>CSS</p>
                </div>

                <div className='bg-slate-800 gap-3 flex justify-center items-center w-[200px] md:w-[300px] h-[50px] rounded-full cursor-pointer'>
                    {/* <div className='bg-yellow-400 w-3 h-3 rounded-full '></div> */}
                    <p className='font-extrabold'>JavaScript</p>
                </div>

                <div className='bg-slate-800 gap-3 flex justify-center items-center w-[200px] md:w-[300px] h-[50px] rounded-full cursor-pointer'>
                    {/* <div className='bg-blue-700 w-3 h-3 rounded-full '></div> */}
                    <p className='font-extrabold'>React</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill