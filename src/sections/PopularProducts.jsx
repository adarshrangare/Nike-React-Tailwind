import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard.jsx"

const PopularProducts = () => {
  return (
    <section
    id="products"
    className="max-container max-sm:mt-12 "
    >
      <div className=" flex flex-col justify-start gap-5 " >
        <h2 className="text-4xl font-palanquin font-bold " >Our <span className="text-coral-red ">Popular</span> Products </h2>
        <p className=" lg:max-w-lg mt-2 font-montserrat text-slate-gray " >
        Discover our handpicked gems - the favorites that steal the show! From innovative tech to timeless classics, explore what our customers adore and make them your own.
        </p>
      </div>

      <div 
      className="mt-16 grid lg:grid-cols-4 md:grid-col-3 sm:grid-col-2 grid-cols-1 gap-14 sm:gap-4" >

          {products.map((product)=>{
            return (
              <PopularProductCard key={product.name} {...product} />
            )
          })}

      </div>


    </section>
  )
}

export default PopularProducts