
import {FormationCards} from "../Cards";
import {Button} from "@/components";

const SectionThree = () => {
    return (
        <div className={'w-[95%] md:w-[90%] mb-20 mx-auto'}>
            <h3 className={'text-center text-3xl py-5 font-semibold pb-3'}>Our <span className={' text-secondary'}>Training </span> Programs</h3>
            <p className={'py-3 text-center mx-auto w-[60%] text-xl mb-10'}>We offer training programs to partner organisations  and individual organisation</p>
            <div className={'flex flex-wrap gap-6 justify-center md:justify-start items-center'}>
                <FormationCards title={'Title'} href={'/'}
                                desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}/>

                <FormationCards title={'Title'} href={'/'}
                                desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}/>

            </div>


            <div className={'flex mt-16 justify-center items-center'}>
                <Button href={'/programs'} text={'See All'}/>
            </div>
        </div>
    )
}

export default SectionThree