import { offer } from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"

const SpecialOffer = () => {
  return (
    <section
    className="flex justify-center flex-wrap items-center max-xl:flex-col-reverse gap-10"
    >

      <div className="flex-1" >
        <img 
        src={offer} 
        alt="offer"
        width={773}
        height={687}
        className="object-contain w-full" />

      </div>

      <div className=" flex flex-1 flex-col  " >

     
          <h2 className="font-palanquin text-4xl capitalize  lg:max-w-lg font-bold" > 
          We Provide You 
          <span className="text-coral-red "> Super </span>
          <span className="text-coral-red ">Quality </span>
            Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text" >
          Unlock exclusive deals and savings! Explore our Special Offers section to snag incredible discounts on your favorite items. Limited-time offers tailored to elevate your shopping experience await—dive in and seize the opportunity to indulge in premium products at unbeatable prices.
          </p>
          <p className=" mt-6 lg:max-w-lg info-text">
          Discover extraordinary savings on exceptional products - your chance to shop smart and save big!
          </p>
          <div className="mt-11 flex flex-wrap gap-4" >
            <Button 
            label="Show Now" 
            iconURL={arrowRight} 
            />
          
            <Button 
            label="Learn More" 
            bgColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            />
          </div>

      </div>

    </section>
  )
}

export default SpecialOffer