import imageLeft from "../assets/left-financial.png"
import imageRight from "../assets/right-financial.png"
import logo from "../assets/logo.png"

export function BackgroundBase() {
    return(
        <div >
            <img src={logo} alt="logo" className="mt-10 sm:mt-10 sm:mb-10 rounded-3xl ml-10 w-24" />
            <img src={imageLeft} alt="left-financial" className="absolute bottom-10 left-10 sm:mt-20 sm:mb-20 md:mt-20 md:mb-20 lg:mt-10 lg:mb-10 rounded-full w-[20rem] sm:w-[18rem] md:w-[20rem] lg:w-[25rem]"/>
            <img src={imageRight} alt="right-financial" className="absolute top-10 right-10 sm:mt-20 sm:mb-20 md:mt-20 md:mb-20 lg:mt-10 lg:mb-10 rounded-full w-[20rem] sm:w-[18rem] md:w-[20rem] lg:w-[25rem]"/>
        </div>
        
    )
}