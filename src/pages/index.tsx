
import {HomeCarousel, SectionFive, SectionFour, SectionThree, SectionTwo} from "@/components";


const Home = () => {
  return (
    <div>
      <div className={'h-[80vh]'}>
        <HomeCarousel/>
      </div>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <div className={'bg-blue-900  w-full  py-10 '}>
        <div className={' w-[80%] mx-auto flex justify-center gap-12 md:flex-row flex-col'}>
            <div className={'text-2xl text-base-color font  font-semibold'}>
                Sign up to our news letter and get latest <br className={'hidden md:block'}/> updates about our activites,events and many more
            </div>
            <div className="flex flex-1 items-center justify-center ">
                <div className="w-full p-5 ">
                    <div
                        className="w-full rounded-full bg-white/10 p-2 border border-gray-800 flex items-center justify-center">
                        <input className="pl-2 w-full bg-transparent text-black placeholder:text-black/50  outline-none" placeholder="Your Email address"/>
                        <button className="rounded-full text-white bg-primary p-2 w-[10rem]">Sign Up</button>
                    </div>
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Home