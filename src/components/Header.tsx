import React from "react"

const Header = () => {
    return (
        <header className="m-0 bg-cover flex justify-center items-center flex-col h-banner-height bg-[url('/terrunio.jpeg')]">
        <img 
            src="/terruSinFondo2.png" 
            alt="" 
            className="w-[80%] sm:w-[50%] md:w-[40%] max-h-full max-w-full object-contain"
        />
</header>

    )
}

export default Header