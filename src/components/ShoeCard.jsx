
const ShoeCard = ({imgURL, changeMainShoeImage,bigShowIMG}) => {

    const handleClick = ()=>{
        console.log("clicked thumbnail")
        if(bigShowIMG !== imgURL.bigShoe){
            changeMainShoeImage(imgURL.bigShoe)
        }
    }

  return (
    <div className={`border-2 rounded-xl ${bigShowIMG===imgURL.bigShoe ? 'border-coral-red shadow-lg shadow-red-300 '  : 'border-transparent'} cursor-pointer max-sm:flex-1 `}
    onClick={handleClick}
    >
    
    <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4  ">
        <img 
        src={imgURL.thumbnail} 
        alt="thumbnail shoe" 
        width={127}
        height={103}
        className="object-contain"
        />
    </div>



    </div>
  )
}

export default ShoeCard