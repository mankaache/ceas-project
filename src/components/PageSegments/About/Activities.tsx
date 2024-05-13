import {commonImages} from '@/assets'
import {Button} from "@/components";
import Link from 'next/link';
import Image from 'next/image';


const Activities = () => {
    return (
        <div className={'w-[96%] lg:w-[85%] mx-auto my-10 '}>
        <div className={'flex flex-col md:flex-row justify-center gap-12 p-7 items-center lg:items-start w-full bg-secondary/20'}>
            <div className={'relative size-[400px] flex-1'}>
                <Image fill priority src={commonImages.Aboutus2} alt={''} className={'w-full h-full'} />
            </div>
            <div className={'w-full py-10 flex-1'}>
                <h3 className={'font-semibold text-2xl '}>We have activities we carry out to promote <span className={'text-secondary'}>sustainaibility</span> </h3>
                <p className={'mb-5 mt-4'}>

                    We all have a role to play in ensuring a sustainable future. This means finding ways to meet our needs without harming the ability of future generations to meet theirs. To achieve this, we can engage in a variety of activities that promote sustainability. These might involve everyday practices like reducing waste and conserving resources, or larger-scale actions like supporting renewable energy initiatives or advocating for environmental policies.
                </p>
                <div className={'flex items-center gap-3'}>
                <Button href={'/'} text={'See our events'}/>
                    <Link href={'/'} className={'border px-4 py-3 hover:font-bold hover:border-2 border-secondary text-secondary rounded-lg bg-transparent'}>See our Training programs</Link>

                </div>
            </div>
        </div>
        </div>
    )
}

export default Activities