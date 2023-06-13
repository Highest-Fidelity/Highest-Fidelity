import { close, menu } from '../assets';
import { navLinks } from '../constants';
import { useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='flex items-center justify-between w-full py-6 navbar z-[300]'>
        <a href='/' className='text-xl font-normal text-gradient font-poppins'>
          HighestFidelity
        </a>
        
        <ul className='items-center justify-end flex-1 hidden list-none sm:flex'>
          {navLinks.map((nav, index) => (
            <li key={`${index}_lnk`} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
              {index === navLinks.length - 1 ? 
              (
                <div className="relative inline-flex group">
                  <div
                      className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                  </div>
                  <a href={nav.id} 
                      className="relative inline-flex text-[16px] items-center justify-center px-5 py-2.5 text-lg font-normal text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border border-[#1a1a1a]"
                      role="button">
                        Webshop
                  </a>
              </div>
              ) 
              :
              (
                <a href={`${nav.id}`}>
                {nav.title}
                </a>
              )
            }
            </li>  
          ))}
        </ul>
        <div className='flex items-center justify-end flex-1 sm:hidden'>
          <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain fixed z-[110]' onClick={() => setToggle((prev) => !prev)}/>
          <div className={`${toggle ? 'flex' : 'hidden'} bg-gray-900  w-[100%] fixed h-screen rounded-md sidebar right-0 bottom-0 overflow-x-hidden z-[100]`}>
            <ul className='left-0 flex flex-col items-center self-center w-full text-white aboslute'>
              {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0 ' : 'mb-4'} text-white`}>
                  <a href={nav.id} className='text-3xl' onClick={() => setToggle((prev) => !prev)}>
                  {nav.title}
                  </a>
                </li>  
              ))}
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar