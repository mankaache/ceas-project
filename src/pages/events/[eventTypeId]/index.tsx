import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router";
import { commonImages } from "@/assets";


const EventID = () => {
  const Eventdeeds = [
    {
        id:'1',
        location:'Bamenda',
        desc:' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
    },{
        id:'2',
        location:'Yaounde',
        desc:' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
    },{
        id:'3',
        location:'Limbe',
        desc:' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
    },
]

const router = useRouter();
const { eventTypeId } = router.query;


return (
    <div className={'py-24 w-[96%] md:w-[85%] mx-auto'}>
        <h2 className={'font-bold text-3xl py-4 capitalize'}>{eventTypeId}</h2>

          <div className={' flex gap-5 flex-wrap items-center'}>
  
        {
            Eventdeeds.map((item)=>(
                <Link href={`/events/${eventTypeId}/${item.id}`} key={item.id} className={'card mt-6 w-[400px] h-[500px] max-h-[500px] bg-white shadow-2xl '}>
                     <p className={'bg-black/20 w-full h-[300px] relative overflow-hidden rounded-lg mb-2'}>
                                <Image src={commonImages.noImage} fill priority alt="image" />
                            </p>
                    <div className={'w-full py-3 px-2'}>
                        <h3 className={'font-semibold text-xl pt-2 pb-3'}>{item.location}</h3>
                        <p className={'text-base pb-3 text-light'}>{item.desc}</p>
                        <Link className={'pt-2 font-semibold inline-block text-center text-blue-500 w-full'} href={`/events/${eventTypeId}/${item.id}`}>View details</Link>
                    </div>
                </Link>
            ))
        }

    </div>
    </div>
)
}

export default EventID