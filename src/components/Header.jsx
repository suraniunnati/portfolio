import React from 'react'

function Header({toggleSidebar}) {
  return (
    <div className='h-[50px] bg-black p-5 text-white flex items-center md:hidden'>
        <i class="fa-solid fa-bars" onClick={toggleSidebar}></i>
         <img src="https://i.pinimg.com/736x/d6/10/d9/d610d9d365f203d7eda5a1cd752a8682.jpg" alt="" width={"150px"} className='h-[50px]'/>

    </div>
  )
}

export default Header