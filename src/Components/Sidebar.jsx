import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaUser, FaProjectDiagram, FaSignOutAlt } from "react-icons/fa";
import { MdFeed } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { BsArrowLeftCircle } from 'react-icons/bs'
import Logo from '../Assests/glo-logo-large.png'
import HamburgerButton from './HamburgerMenuButton/HamburgerButton'

const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation()

  const Menus = [
    { title: 'Dashboard', path: '/', src: <FaHome /> },
    { title: 'Careers', path: '/careers', src: <MdFeed /> },
    { title: 'Profile', path: '/profile', src: <FaUser /> },
    { title: 'Referral Portal', path: '/referral', src: <IoPeopleSharp /> },
    { title: 'IJB', path: '/internaljobportal', src: <IoPeopleSharp /> },
    { title: 'Logout', path: '/login', src: <IoPeopleSharp />, gap: 'true' },
    
  ]

  return (
    <div>
      <div
        className={`${
          open ? 'w-60' : 'w-fit'
        } hidden sm:block relative h-screen duration-300 bg-gray-900 text-white border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
      >
        <BsArrowLeftCircle
          className={`${
            !open && 'rotate-180'
          } absolute text-3xl bg-white fill-slate-800 rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
          onClick={() => setOpen(!open)}
        />
        <Link to='/'>
          <div className={`flex ${open && 'gap-x-4'} items-center`}>
            <img src={Logo} alt='' className='pl-2' />
          </div>
        </Link>

        <ul className='pt-6'>
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-orange-500 dark:hover:bg-orange-500
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${
                  location.pathname === menu.path &&
                  'bg-orange-500 dark:bg-orange-500'
                }`}
              >
                <span className='text-2xl'>{menu.src}</span>
                <span
                  className={`${
                    !open && 'hidden'
                  } origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="pt-3">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
      <div className="sm:hidden">
        <div
          className={`${
            mobileMenu ? 'flex' : 'hidden'
          } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white bg-gray-50 dark:bg-slate-800 drop-shadow-md rounded-xl`}
        >
          {Menus.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <span
                className={`p-2 rounded-xl hover:bg-orange-500 dark:hover:bg-orange-500 ${
                  location.pathname === menu.path && 'bg-orange-500 dark:bg-orange-500'
                }`}
              >
                {menu.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
