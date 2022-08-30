import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <article className="item">
      <img src={product.img} className="item_img" />
      <div className="item_title">{product.producto}</div>
      <p className="item_price">Precio: ${product.price}</p>
      <Link to={`/detalle/${product.id}`} className="detalle">Ver detalle</Link>
    </article>
  )
}
export default Item