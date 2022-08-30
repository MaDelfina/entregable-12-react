import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"

const Cart = () => {

  const { cart, deleteItem, emptyCart, getItemPrice } = useContext(CartContext)

  if (cart.length > 0) {
    return (
      <>
          {
            cart.map((element, index) => {
              return <div className="cartItem col-xl d-flex align-items-center justify-content-evenly" key={index}>
                <div>
                  <img src={element.img} alt={element.name} width={170} />
                </div>
                <div>
                  <h3>{element.name}</h3>
                  <h2 className="cart_precio">Precio: ${element.price}</h2>
                  <h3 className="cart_qty">Unidades: {element.qty}</h3>
                </div>
                <div>
                  <button onClick={() => deleteItem(element.id)} className="btn btn-danger">X</button>
                </div>
              </div>
            })
          }

        <div className="delete">
          <Link to={'/checkout'}>
            <button className="btn btn-success">Terminar compra!</button>
          </Link>
          <h4>
          <p className="total">Total: {getItemPrice()} </p>
          </h4>
          <button className='btn btn-danger d-flex align-items-right justify-content-evenly' onClick={() => emptyCart()}><span className="material-symbols-outlined">delete</span></button>
        </div>
      </>
    )
  }

  return (
    <>
    <div className="carrito_vacio">
      <h2>Carrito vacio</h2>
    </div>
      <div className="carrito_vacio">
        <Link to={'/'}>
          <button className="btn btn-success">Ver productos</button>
        </Link>
      </div>
    </>
  )
}

export default Cart