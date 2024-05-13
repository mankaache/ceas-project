import {commonImages} from '@/assets'
import Image from 'next/image'

const OurTeam = () => {
    return (
        <div>
            <div className={'h-full w-full flex justify-center items-center flex-col py-20 px-6'}>
                <div className={'pt-7 '}>
                    <h2 className={'text-center text-4xl text-accent font-bold'}>Our Team Organisation</h2>
                    <p className={'w-[60%] mx-auto py-6 text-xl text-center'}>Below we present an organigram of how our team in structured and the different levels to authority in our company</p>
                </div>
                <div className={'flex relative justify-center gap-x-20 items-center flex-wrap pt-5 w-[700px] h-[600px]'}>

                   <Image fill priority src={commonImages.organigram} alt={'team'}  className={''}/>

                </div>
            </div>


        </div>
    )
}

export default OurTeam