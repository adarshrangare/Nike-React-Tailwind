import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section
    className="max-container">
        <h3 className="font-palanquin text-center text-4xl font-bold">
          What Our 
          <span className="text-coral-red "> Customers</span>
          Says?
        </h3>
        <p className="info-text text-center m-auto mt-4 max-w-lg" >
          Hear genuine stories from our satified Customers about their exceptional experiences woth use.
        </p>

      <div
      className="mt-24 flex flex-1 justify-evenly items-center gap-14 max-lg:flex-col "
      >
        {reviews.map((review)=>(
          <ReviewCard key={review.customerName} {...review}/>
        ))}
      </div>

    </section>
  )
}

export default CustomerReviews