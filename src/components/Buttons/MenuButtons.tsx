import React from "react"
import MenuButton from "./MenuButton"

const MenuButtons = () => {
    return (
        <section className="pt-12 mb-0">
            <MenuButton url="/cartas/cartaCompleta" menu_type="Carta completa" />
            <MenuButton url="/cartas/cartaBebidas" menu_type="Carta de bebidas" />
        </section>

    )
}

export default MenuButtons