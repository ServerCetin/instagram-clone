import {useEffect, useRef} from "react";

export default function LeftPhone(){
    const ref = useRef()

    useEffect(() => {
        const images = ref.current.querySelectorAll("img")
        const imgCount = images.length
        let currentImage = 0
        let lastImage = 0
        let isItFirstTime = true

        const imageTransition = () => {
            !isItFirstTime && images[lastImage].classList.add('opacity-0')
            images[currentImage].classList.remove('opacity-0')
            lastImage = currentImage
            currentImage = currentImage === imgCount - 1 ? 0 : currentImage += 1
            isItFirstTime = false
        }

        imageTransition()
        const interval = setInterval(imageTransition, 3000)

        return () => {
            clearInterval(interval)
        }
    }, [ref])

    return(
        <div className="hidden md:block text-center bg-[center_top_0.0rem] h-[581.15px] w-[380.31px] bg-[url('/src/assets/img/home-phone.png')]">
            <div className="relative" ref={ref}>
                <img className="absolute right-4 top-7 opacity-0 transition-opacity duration-1000 ease-in" alt=''
                     src={require("../../../../assets/img/phone1.png")}/>
                <img className="absolute right-4 top-7 opacity-0 transition-opacity duration-1000 ease-in" alt=''
                     src={require("../../../../assets/img/phone2.png")}/>
                <img className="absolute right-4 top-7 opacity-0 transition-opacity duration-1000 ease-in" alt=''
                     src={require("../../../../assets/img/phone3.png")}/>
                <img className="absolute right-4 top-7 opacity-0 transition-opacity duration-1000 ease-in" alt=''
                     src={require("../../../../assets/img/phone4.png")}/>
            </div>
        </div>
    )

}