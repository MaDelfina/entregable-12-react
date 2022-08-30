import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext"

const CheckOut = () => {

  const [costumer, setCostumer] = useState({
    name: '',
    lastname: '',
    email: '',
    number: '',
  })

  const [submit, setSubmit]= useState(false)

  const { cart, getItemPrice} = useContext(CartContext)

  const navigate = useNavigate()

  const handlerChangeInput = (e) => {
    setCostumer({
      ...costumer,
      [e.target.name]: e.target.value,
    })
  }

  const handlerSubmit = (e) => {
    e.preventDefault()

    const order = {
      items: cart,
      buyer: { ...costumer },
      price: getItemPrice(),
    }

    setSubmit(true)
  }

  if (cart.length === 0) {

    setTimeout(() => {
      navigate('/')
    }, 3000)

    return (
      <div>
        <h1 className="carritoVacio">Tu carrito esta vacio!</h1>
      </div>
    )
  }

  return (
    <div className='col-xl-4 completar_datos'>
      <h2>Complete tus datos</h2>
      <form onSubmit={handlerSubmit}>
        <input
          placeholder='Nombre'
          name='name'
          value={costumer.name}
          onChange={handlerChangeInput}
        />
        <input
          placeholder='Apellido'
          name='lastname'
          value={costumer.lastname}
          onChange={handlerChangeInput}
        />
        <input
          placeholder='Correo Electrónico'
          name='email'
          value={costumer.email}
          onChange={handlerChangeInput}
        />
        <input
          placeholder='Numero de Telefono'
          name='number'
          value={costumer.number}
          onChange={handlerChangeInput}
        />
        <button type='submit' className='btn btn-success'>Confirmar Compra!</button>
      </form>
      <hr />
      {
        submit
        && <div className="datos">
          <h2>Los datos ingresados son:</h2>
          <h4>Nombre: {costumer.name}</h4>
          <h4>Apellido: {costumer.lastname}</h4>
          <h4>Correo Electrónico: {costumer.email}</h4>
          <h4>Telefono: {costumer.number}</h4>
        </div>
      }
    </div>
  )
}

export default CheckOut