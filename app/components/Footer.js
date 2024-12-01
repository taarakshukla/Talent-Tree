import React from "react";
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className='bg-gray-950 text-white flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-10 gap-6'>
            <div className='flex flex-col items-center md:items-start gap-2 md:gap-6'>
                <div className='flex flex-col items-center md:items-start gap-2'>
                    <div className='text-sm md:text-base'>Copyright &copy; {currentYear} Talent Tree | All rights reserved!</div>
                    <div className='text-xs md:text-sm text-gray-500'>Made by Taarak Shukla with ❤</div>
                </div>
            </div>
            <div className='flex flex-row items-center gap-3'>
                <div className='text-sm md:text-base'>Follow me on</div>
                <Link href="https://www.linkedin.com/in/taarak-shukla-5b6793280" target="_blank" passHref>
                    <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="38" height="38" viewBox="0 0 48 48">
                            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                        </svg>
                        Linkedin
                    </button>
                </Link>
            </div>

        </footer>
    )
}

export default Footer