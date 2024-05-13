

import {EventsCards} from "../Cards";

const SectionFour = () => {
    return (
        <div className={'w-[95%] mx-auto md:w-[90%] ' }>
            <h3 className={'text-center text-primary font-semibold text-3xl'}>Our Events</h3>
            <p className={'py-3 text-center mx-auto w-[60%] text-xl mb-10'}> We organise events and hold field trips and also offer alot of internship opportunities</p>

            <div className={'event flex justify-center mt-20 items-center flex-wrap gap-10 pb-6'}>
                <EventsCards  title={'Conferences'} linkText={'See Conference'} href={`/events/conference`}/>
                <EventsCards  title={'Field Trips'} linkText={'See our Field trips'} href={'/events/field-trips'}/>
                <EventsCards  title={'Defenses'} linkText={'See our Defenses'} href={'/events/defenses'}/>
                <EventsCards  title={'Internship opportunities'} linkText={'See Internship offers'} href={'/events/internship'}/>

            </div>
        </div>
    )
}

export default SectionFour