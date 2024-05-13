
import {commonImages} from '@/assets'
import Link from 'next/link';
import Image from 'next/image';
interface EventCardsProps{
    title:string;
    linkText:string;
    href:string;
    id?:string
}
const EventsCards = ({title,linkText,href}:EventCardsProps) => {
    return (
        <Link href={''}
            className={'card cursor-pointer  hover:scale-110 transition-all w-[200px] md:w-[250px] max-h-[300px] bg-white shadow-2xl py-3 px-2'}>
            <Link href={''} className={'relative bg-black/20 block w-full h-[200px] overflow-hidden rounded-lg mb-2'}>
                <Image fill priority  alt='image' src={commonImages.noImage} className={''}/>
            </Link>
            <Link href={''}>
                <h3 className={'block font-semibold text-primary md:text-lg pt-1 pb-1'}>{title}</h3>
                {/*<p className={'text-base pb-3 text-light'}>Lorem Ipsum is simply dummy text </p>*/}
            </Link>
            <Link href={href} className={'text-center text-secondary '}>{linkText}</Link>
        </Link>

    )
}

export default EventsCards