import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { db } from "../firebase";
import { collection, getDoc, doc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const productosCollection = collection(db, "productos")
        const referencia = doc(productosCollection, id)
        const consulta = getDoc(referencia)

        consulta
        .then((res)=>{
            const producto = res.data()
            producto.id = id
            setProduct(producto)
            setLoading(true)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [id])

    return (      
        <ItemDetail product={product} />
    )
}

export default ItemDetailContainer