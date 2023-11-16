

const Button = ({label, iconURL,bgColor, borderColor, textColor,fullWidth}) => {
  return (
    <button className={`flex transition justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${bgColor ? `${bgColor} ${textColor} ${borderColor} hover:bg-coral-red hover:text-white hover:border-coral-red` : "bg-coral-red  text-white border-coral-red"} rounded-full ${fullWidth && 'w-full'} active:scale-90`} >
        {label}

        { iconURL && <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}

export default Button