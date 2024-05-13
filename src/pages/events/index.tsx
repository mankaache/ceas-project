import Link from "next/link"
import { commonImages } from "@/assets"
import Image from 'next/image'
const Event = () => {
  const Events = [
    {
        id:'1',
        name:'Conference',
        eventType:'conference',
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
            ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type' +
            ' and scrambled it to make a type specimen book'
    }, {
        id:'2',
        name:'Field trips',
        eventType:'field-trips',
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
            ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type' +
            ' and scrambled it to make a type specimen book'
    }, {
        id:'3',
        name:'Defenses',
        eventType:'defenses',
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
            ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type' +
            ' and scrambled it to make a type specimen book'
    }, {
        id:'4',
        name:'Internship opportunities',
        eventType:'internship',
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
            ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type' +
            ' and scrambled it to make a type specimen book'
    },
]
return (
    <div>
        <div className={'w-[70%] mx-auto gap-10 grid grid-cols-2  items-center '}>

            {
                Events.map((item)=> (
                    <div className={'mt-6 mb-8 shadow-lg'} key={item.id}>
                        {/*<h3 className={'text-2xl font-semibold py-2'}>{item.name}</h3>*/}
                        <Link href={`/events/${item.eventType}`}
                              className={'card w-full cursor-pointer  hover:scale-100 transition-all h-[450px] max-h-[450px] bg-white py-3 px-2'}>
                            <p className={'bg-black/20 w-full h-[300px] relative overflow-hidden rounded-lg mb-2'}>
                                <Image src={commonImages.noImage} fill priority alt="image" />
                            </p>
                            <p>
                                <h3 className={'font-semibold md:text-lg pt-1 pb-1 px-2'}>{item.name}</h3>
                                {/*<p className={'text-base pb-3 text-light'}>Lorem Ipsum is simply dummy text </p>*/}
                            </p>
                            <Link href={`/events/${item.eventType}`} className={'px-2 leading-8 '}>{item.desc}</Link>
                        </Link>
                    </div>
                ))
            }

        </div>
    </div>
)
}

export default Event