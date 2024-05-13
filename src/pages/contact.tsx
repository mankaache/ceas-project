/* eslint-disable react/no-unescaped-entities */

import {MdLocalPhone, MdMail} from "react-icons/md";
import {FaLinkedin, FaLocationDot, FaSquareInstagram, FaXTwitter} from "react-icons/fa6";

import {FaFacebook} from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
    return (
        <div className={'antialiased bg-secondary/30 py-20'}>
            <div className={'flex w-full min-h-screen justify-center items-center'}>
                <div className={'bg-secondary w-full sm:p-12 overflow-hidden flex md:space-x-6 md:space-y-0 flex-col md:flex-row space-y-6 max-w-[80%] p-8 rounded-xl shadow-xl'}>
                    <div className={'flex w-full flex-col space-y-8 justify-between'}>
                        <div>
                            <h1 className={'font-bold text-4xl text-white tracking-wide'}>Contact us</h1>
                            <p className={'pt-2 text-white text-base '}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle</p>
                        </div>
                        <div className={'flex flex-col space-y-4'}>
                            <div className={'flex text-white items-center gap-2'}>
                                <MdLocalPhone className={'text-accent'} size={20} />
                                <span className={'text-white'}>+237 676 678 789</span>
                            </div>
                            <div className={'flex text-white items-center gap-2'}>
                                <MdMail className={'text-accent'} size={20} />
                                <span className={'text-white'}>example@email.com</span>
                            </div>
                            <div className={'flex text-white items-center gap-2'}>
                                <FaLocationDot className={'text-accent'} size={20} />
                                <span className={'text-white'}>+237 676 678 789</span>
                            </div>
                        </div>

                        <div className={'flex gap-4 items-center *:text-white'}>
                            <Link href={'/'} ><FaFacebook size={20} />
                            </Link> <Link href={'/'} ><FaXTwitter size={20} />
                            </Link>
                            <Link href={'/'} ><FaSquareInstagram size={20} />
                            </Link><Link href={'/'} ><FaLinkedin size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className={'w-full relative'}>
                        <div className={'z-0 absolute w-40 h-40 bg-primary rounded-full -right-28 -top-28'}></div>
                        <div className={'z-0 absolute w-40 h-40 bg-primary rounded-full -left-28 -bottom-28'}></div>
                        <div className={'relative z-10 bg-white w-full rounded-xl shadow-lg p-8 text-gray-600'}>
                            <form className={'flex flex-col space-y-4 md:w-88'}>
                                <div>
                                    <label className={'text-sm'}>Your name</label>
                                </div>
                                <div>
                                    <input type={'text'} className={'ring-1 focus:ring-2 focus:ring-teal-300 ring-gray-300 w-full rounded-md px-4 py-2 outline-none '} placeholder={'your name'} />
                                </div>
                                <div>
                                    <label className={'text-sm'}>Email Address</label>
                                </div>
                                <div>
                                    <input type={'email'} className={'ring-1 focus:ring-2 focus:ring-teal-300 ring-gray-300 w-full rounded-md px-4 py-2 outline-none '} placeholder={'Your email'} />
                                </div>
                                <div>
                                    <label className={'text-sm'}>Message</label>
                                </div>
                                <div>
                                    <textarea rows={6} cols={7} className={'ring-1 focus:ring-2 focus:ring-teal-300 ring-gray-300 w-full rounded-md px-4 py-2 outline-none '} placeholder={'Your message'} ></textarea>
                                </div>
                                <button className={'inline-block self-end bg-secondary text-white font-bold rounded-lg px-8 py-3 uppercase text-sm'}>Send Message</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact