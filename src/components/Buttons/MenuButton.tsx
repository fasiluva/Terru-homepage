import React from "react";
import Link from 'next/link';


interface MenuButtonProps {
    /** The menu's type */
    menu_type: string;
    /** The menu's URL */
    url: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ menu_type, url }) => {
    return (
        <Link href={url}>
            <button 
                className="
                    block w-[80%] sm:w-[60%] md:w-[50%]
                    text-base sm:text-lg md:text-xl
                    p-3 
                    bg-caribbean-yellow 
                    border-solid border-button-orange border-2 
                    rounded-button-border-radius 
                    uppercase 
                    m-button-margin
                    mx-auto
                "
>
            {menu_type}
            </button>
        </Link>
    )
}

export default MenuButton