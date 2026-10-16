import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  const sidebarLinks = [
    {
      name: "Dashboard",
      path: "/owner",
      icon: assets.dashboard
    },
    {
      name: "Add Room",
      path: "/owner/add-room",
      icon: assets.room
    },
    {
      name: "List Room",
      path: "/owner/list-room",
      icon: assets.bedroom
    },
  ]

  return (
    <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300'>

      {sidebarLinks.map((link, index) => (

        <NavLink
          to={link.path}
          key={index}
          end={link.path === '/owner'}
          className={({ isActive }) =>
            `flex items-center py-3 px-4 md:px-8 gap-3 transition-colors duration-200 ${isActive
              ? 'bg-blue-600/10 border-r-4 border-blue-600 text-blue-600'
              : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            }`
          }>
          <img
            src={link.icon}
            alt={link.name}
            className='w-6 h-6 mr-3' />

          <span className='hidden md:block'>
            {link.name}
          </span>
        </NavLink>

      ))}

    </div>
  )
}

export default Sidebar