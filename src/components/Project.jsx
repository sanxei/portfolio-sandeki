import skola from "../assets/skola.jpg"

function Project() {
    return(
        <div className="flex items-center justify-center max-w-full mt-[100px]">
            <div className=" w-[800px] h-[600px] mt-[30px]  font-mono text-white">
                <h1 className="font-extrabold text-[60px]">Portfolio</h1>  
                <div className="mt-5 flex items-center justify-center mx-auto container max-w-[600px] h[400px]">
                    <div className="grid grid-cols-1">
                        <div className="bg-slate-950 rounded-lg p-5 flex flex-col items-center">
                            <div className="rounded-xl overflow-hidden">
                                <img src={skola} alt="" />
                            </div>
                            <p className="font-bold pt-2">Website SMKTI Airlangga</p>
                            <div className="flex gap-4">
                                <a className="bg-slate-800 rounded-md px-3 p-1 " href="https://github.com/sanxei/Website-Pendidikan-Airlangga">Code</a>
                                <a className="bg-slate-800 rounded-md px-3 p-1 " href="https://smkti-airlangga.netlify.app/">Live Demo</a>
                            </div>
                        </div>
                    </div>
               
                </div>
            </div>
            
        </div>
    )
}

export default Project