import {star} from '../assets/icons'

const PopularProductCard = ({imgURL,name,price,ratting}) => {
  return (
    <div
    className="flex flex-1 flex-col w-full max-sm:w-full "
    >
        <img src={imgURL} alt={name}
        className="w-[280px] h-[280px] cursor-pointer "
        />
        <div
        className="mt-8 flex justify-start gap-2.5  " 
        >
            <img src={star} alt="ratting"
            width={24} height={24} /> 
            <p className='font-montserrat text-xl leading-normal text-slate-gray ' >
               {ratting} </p> 
               
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin cursor-pointer ' >{name}</h3> 
        <p className='text-coral-red font-montserrat font-semibold text-xl pl-2 leading-normal ' >{price}</p>

    </div>
  )
}

export default PopularProductCard