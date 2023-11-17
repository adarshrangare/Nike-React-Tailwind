import {headerLogo} from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'
import {close} from '../assets/icons'

const Nav = () => {

    const [hamOpen, setHamOpen] = useState(false);
    const [hamIcon, sethamIcon] = useState(hamburger)
    function toggleHamButton(){
        console.log('clicked')
        
        if(hamOpen){
            sethamIcon(hamburger);
        } else{
            sethamIcon(close)
        }
        setHamOpen(!hamOpen);
    }

  return (

    <header className='padding-x py-8 absolute z-10 w-full'> 
        <nav className='.max-container flex justify-between items-center'>
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height = {29} />
            </a>

            <ul className={`transition duration-500 flex-1 flex justify-center items-center gap-16 max-lg:flex-col max-lg:items-end max-lg:gap-10 max-lg:fixed max-lg:top-[5%] max-lg:right-[15%] ${!hamOpen ? 'max-lg:translate-x-[200%]': 'max-lg:translate-x-0'} max-lg:w-[50vw] max-lg:p-10 max-lg:rounded-[10px] max-lg:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] max-lg:bg-white max-lg:z-30 max-lg:font-medium`}>
                {/* // NavLinks  */}
                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red'> {item.label} </a>
                    </li>
                ))}                    

            </ul>
            
            <div className='hidden max-lg:block cursor-pointer duration-1000 ' onClick={toggleHamButton}>
                <img src={hamIcon} alt="Hamburger" width={25} height ={25} className="transition duration-1000" />
            </div>

        </nav>
    </header>

  )
}

export default Nav