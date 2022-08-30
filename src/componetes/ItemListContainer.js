import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import Page from "../componetes/Page";

const ItemListContainer = ({greeting}) => {

  const [ListProducts, SetListProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    if (!id) {
      const productosCollection = collection(db, "productos")
      const consulta = getDocs(productosCollection)

      consulta
        .then(snapshot => {
          const productos = snapshot.docs.map(doc => {
            return {
              ...doc.data(),
              id: doc.id
            }
          })
          SetListProducts(productos)
          setLoading(false)
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      const productosCollection = collection(db, "productos")
      const filtro = query(productosCollection, where("category", "==", id))
      const consulta = getDocs(filtro)

      consulta
        .then(snapshot => {
          const productos = snapshot.docs.map(doc => {
            return {
              ...doc.data(),
              id: doc.id
            }
          })
          SetListProducts(productos)
          setLoading(false)
        })
        .catch(err => {
          console.log(err);
        })
      }
  }, [id])

  return (
    <>
      {
        loading
          ?
          <div className="cargando">Cargando...</div>
          :
          <Page>
            <h2 className="greeting">{greeting}</h2>
            <ItemList ListProducts={ListProducts} />
          </Page>
      }
    </>
  )
}

export default ItemListContainer