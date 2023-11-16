import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer
    className="max-container"
    >
      <div
      className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col "
      >
        <div
        className="flex flex-col items-start"
        >
          <a href="/">

              <img 
              src={footerLogo}
               alt="footer Logo"
               width={150}
               height={46}
               className=""
                />

          </a>
          <p
          className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm"
          >Get shoes ready for hte new term at your nearest Nike Store. Find Your perfect Size in Store. Get Rewards</p>
          <div 
          className="flex items-center gap-5 mt-8 "
           >
            {socialMedia.map((icon)=>(
              <div className="flex items-center justify-center rounded-full bg-white w-12 h-12 cursor-pointer hover:bg-red-400  ">
                  <img 
                  src={icon.src}
                   alt={icon.alt}
                   width={24}
                   height={24} />
              </div>
            ))}

           </div>

        </div>
        
        <section
        className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">

              {footerLinks.map((section)=>(

                  <div key={section}>
                      <h4 className="text-white font-montserrat font-medium text-2xl leading-normal" >{section.title}</h4>
                      <ul>

                          {section.links.map((link)=>(
                              <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray">
                                <a href="">
                                  {link.name}
                                </a>
                              </li>
                          ))}

                      </ul>
                  </div>

              ))}

        </section>

      </div>
      
      <div
      className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center"
      >
          <div className="flex flex-1 justify-start items-center cursor-pointer font-montserrat " >
                  
              <img src={copyrightSign} alt="copyright" width={18} height={18} className="rounded-full mt-0" />    
              <p>&nbsp; Copyright. All rights reserved</p>
          </div>
          <p className="cursor-pointer font-montserrat " > Terms & Conditions</p>
      </div>

    </footer>
  )
}

export default Footer