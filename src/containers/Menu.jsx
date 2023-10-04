import React from 'react'
import { RxDashboard } from 'react-icons/rx'
import { AiOutlineCalendar, AiOutlineProject } from 'react-icons/ai'
import { FiSettings} from 'react-icons/fi'

const Menu = () => {
  const menuItems = [
    {
      Icon: <RxDashboard className='group-hover:text-indigo-400 text-white' />,
      name: "Dashboard"
    },
    {
      Icon: <AiOutlineCalendar className='group-hover:text-indigo-400 text-white' />,
      name: "Calendar"
    },
    {
      Icon: <AiOutlineProject className='group-hover:text-indigo-400 text-white' />,
      name: "Projects"
    },
    {
      Icon: <FiSettings className='group-hover:text-indigo-400 text-white' />,
      name: "Settings"
    }
  ]
  return (
    <div className='w-[4.15%] h-full bg-indigo-400 cursor-pointer pt-20'>
      {menuItems.map((item, index) => (
        <div className='p-3 group hover:bg-white flex items-center justify-center m-3 rounded-full'>
          {item.Icon}
        </div>
      ))}
    </div>
  )
}

export default Menu