import React from "react";
import Link from 'next/link';


interface MenuButtonProps {
    /** The menu's type */
    menu_type: string;
    /** The menu's URL (PDF inside /public) */
    url: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ menu_type, url }) => {

    const openPdf = () => {
        window.open(url, "_blank"); // abre el PDF en nueva pestaña
    };

    return (
        <button
            onClick={openPdf}
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
    );
};

export default MenuButton;
