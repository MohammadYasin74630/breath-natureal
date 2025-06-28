import cornerBorder from "../assets/vector/Vector 4.svg"

function SectionHeading({className, children}) {
  return (
    <div className="relative md:w-max mx-auto text-center">
        <img className="absolute bottom-0" src={`${cornerBorder}`} alt="" />
        <h2 className={`max-lg:text-4xl lg:text-[56px] font-semibold px-8 py-5 ${className ? className : ""}`}>{children}</h2>
        <img className="absolute top-0 right-0 rotate-180" src={`${cornerBorder}`} alt="" />
    </div>
  )
}

export default SectionHeading