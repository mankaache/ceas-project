
import {commonImages} from '@/assets'
import Link from 'next/link';
import Image from 'next/image';
interface CardProps {
    title:string;
    desc:string;
    href:string;
    id?:string
}

const FormationCards = ({title,desc,href}:CardProps) => {
    return (

            <Link href={href} className={'card w-[300px] max-h-[400px] bg-white shadow-2xl py-4 px-2'}>
                <div className={'bg-black/20 w-full relative h-[200px] overflow-hidden rounded-lg mb-2'}>
                    <Image fill priority alt='image' src={commonImages.noImage} className={'w-full h-full object-cover'}/>
                </div>
                <div className={'w-full'}>
                    <h3 className={'font-semibold text-xl text-primary pt-2 pb-3'}>{title}</h3>
                    <p className={'text-base pb-3 text-light'}>{desc}</p>
                    <Link className={'pt-2 font-semibold inline-block text-center text-secondary w-full'} href={href}>View details</Link>
                </div>
            </Link>


    )
}

export default FormationCards