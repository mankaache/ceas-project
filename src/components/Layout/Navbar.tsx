import { MdMenu} from "react-icons/md";
import React from "react";

import {commonImages} from '../../assets'
import {SearchBar} from "./index";
import {IoIosArrowDown, IoMdClose} from "react-icons/io";
import { useRouter } from "next/router";
import Image from 'next/image'
import MdOutlineClose from 'react-icons/md'
import Link from "next/link";


const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  const [drop, setDrop] = React.useState(false)
  const [drop1, setDrop1] = React.useState(false)
  const router = useRouter()
const {pathname} = router
    const containsNav = pathname.includes('/admin')
  return (
      <div className={`font-[Poppins] bg-white shadow-lg pb-2 ${containsNav ? 'hidden': 'block'}`}>
        <header className="bg-white border-b border-gray-700 z-50">
          <nav className="flex justify-between items-center w-[95%]  mx-auto">
            <div className={'flex items-center w-'}>
              <Image width={20} height={20} className="w-20 cursor-pointer" src={commonImages.logo}
                   alt="..."/>
              <p className={'font-semibold text-lg block md:hidden lg:block'}>CEAS-GRNE</p>
            </div>
            <div
                className={`${open ? 'top-[12%]':''} nav-links z-10 duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-600%] w-[80%] md:w-auto flex items-center px-5`}>
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[3vw] gap-8">
                      <li >
                        <Link href={'/'} className={`hover:text-primary  whitespace-nowrap text-lg ${pathname === '/' ? 'text-primary underline py-1 font-semibold':''}`} >Home</Link>
                      </li>
                      <li>
                        <Link href={'/about'} className={`hover:text-primary  whitespace-nowrap text-lg ${pathname === '/about' ? 'text-primary underline py-1 font-semibold':''}`} >About</Link>
                      </li>
                      <li className={'relative'}>

                        <Link href={'/training-programs'}  className={`cursor-pointer flex items-center gap-1 hover:text-primary  whitespace-nowrap text-lg ${pathname === '/training-programs' ? 'text-primary underline py-1 font-semibold':''}`} >
                          <p> Training Programs</p>
                         </Link>
                             
                      </li>
                     
                <li className={'relative ' } onClick={()=> setDrop(!drop)}>

                  <div
                        className={`cursor-pointer flex items-center gap-1 hover:text-primary  whitespace-nowrap text-lg ${pathname === '/news' ? 'text-primary underline py-1 font-semibold' : ''}`}>
                    <p>Media</p>
                    <IoIosArrowDown/>
                  </div>
                  <div
                      className={`bg-white  mt-4 px-8 h-auto py-3  rounded-lg absolute z-50 transition-all shadow-2xl ${drop ? 'block': 'hidden'}`}>
                    <div className={'flex justify-center flex-col items-start mt-2 gap-4'}>
                        <Link href={'#'} className={'text-center block font-medium w-full whitespace-nowrap'}>Images</Link>
                        <Link href={'#'} className={'text-center block font-medium w-full whitespace-nowrap'}>Articles</Link>
                        <Link href={'#'} className={'text-center block font-medium w-full whitespace-nowrap'}>PDFs</Link>

                    </div>
                  </div>
                </li>
                <li className={'relative ' } onClick={()=> setDrop1(!drop1)}>

                  <div
                        className={`cursor-pointer flex items-center gap-1 hover:text-primary  whitespace-nowrap text-lg ${pathname === '/news' ? 'text-primary underline py-1 font-semibold' : ''}`}>
                    <p>News</p>
                    <IoIosArrowDown/>
                  </div>
                  <div
                      className={`bg-white  mt-4 px-8 h-auto py-3  rounded-lg absolute z-50 transition-all shadow-2xl ${drop1 ? 'block': 'hidden'}`}>
                    <div className={'flex justify-center items-start mt-2 gap-8'}>
                        <Link href={'/events'} className={'text-center font-medium w-full whitespace-nowrap'}>Our events</Link>

                    </div>
                  </div>
                </li>
                <li>

                  <Link href={'/contact'}
                        className={`hover:text-primary  whitespace-nowrap text-lg ${pathname === '/contact' ? 'text-primary underline py-1 font-semibold' : ''}`}>Contact</Link>
                </li>

              </ul>
            </div>
              <div className="flex items-center gap-6">
                  <div className={'flex justify-center items-center gap-6 pt-3'}>
                      <select className="border border-gray-800 cursor-pointer rounded-lg px-7 py-3 select-bordered w-26 max-w-xs">
                          <option selected>English</option>
                          <option>French</option>
                      </select>

                  </div>

                  <div className={'md:hidden'} onClick={() => setOpen(!open)}>
                      {open ? <IoMdClose  size={27}/> : <MdMenu size={27}/>
                      }
                  </div>
              </div>
          </nav>
        </header>
          <div className={'flex justify-center items-center gap-6 pt-3'}>
              <SearchBar/>
        </div>
      </div>
  )
}

export default Navbar