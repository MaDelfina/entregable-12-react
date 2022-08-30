const ItemCount = ({ onAdd, qty, setQty }) => {

  const incrementador = () => {
    setQty(qty + 1);
  }

  const decrementador = () => {
    setQty(qty - 1);
  }

  return (
    <>
      {<div className='d-flex col-xl-6 justify-content-evenly mb-3'>
        <button className={`btn ${qty > 0 ? "btn-success" : "btn-danger"}`} onClick={decrementador}>-</button>
        <div>
          <p>{qty}</p>
        </div>
        <button className={`btn ${qty ? "btn-success" : "btn-danger"}`} onClick={incrementador}>+</button>
      </div>}
      <button className='btn btn-primary' onClick={() => { onAdd() }}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount;