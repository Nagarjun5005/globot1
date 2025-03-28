import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import BotpressChatbot from './BotpressChatbot'

const Layout = ({ children }) => {
  return (
    <>
    <div className='flex flex-auto h-screen'>
        <Sidebar />
        <div className='grow'>
            <Navbar />
            <div className='m-5'>{children}</div>
            <BotpressChatbot/>
        </div>
    </div>
</>
  )
}

export default Layout