import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {

    const [qty, setQty] = useState(1)

    const { isInCart, addItem } = useContext(CartContext)

    const onAdd = () => {
        isInCart(product.id)
        addItem(product, qty)
    }

    return (
        <div className="item">
            <img src={product.img} className="item_img" />
            <div className="item_title">{product.producto}</div>
            <p className="item_price">Precio: ${product.price}</p>
            <div>
                <ItemCount qty={qty} setQty={setQty} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail