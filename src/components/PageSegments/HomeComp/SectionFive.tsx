import { commonImages } from "@/assets";
import {Button} from "@/components";
import Image from 'next/image'

const SectionFive = () => {
    return (
        <div className={'w-full my-16 bg-secondary/20 '}>
            <div className={'flex w-[95%] md:w-[90%] py-20 items-center gap-12 md:gap-20 justify-center  md:items-start mx-auto flex-col md:flex-row-reverse '}>
            <div className={'relative flex-1 md:w-[50%]'}>
                <div className={'size-[300px] relative md:size-[400px] overflow-hidden rounded-lg  z-10'}>
                    <Image fill priority src={commonImages.Aboutus5} alt={'about us'}
                         className={'size-full object-cover'}/>

                </div>
                <div className={'size-[80px] bg-accent absolute left-[-47px] top-[-47px]'}></div>
            </div>
            <div className={'flex-1'}>
                <h3 className={'font-semibold text-3xl leading-8 md:text-5xl mb-4  pl-2'}>We <span className={'text-secondary'}> Prioritize </span>field work <br className={'block md:hidden'}/> and best practices</h3>
                <p className={'text-xl mt-10'}>Making people do things the right way is essential to the environment and ecosystem as a whole</p>
                <div className={'mt-12'}>
                    <Button href={'/about'} text={'See what we do'}/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SectionFive