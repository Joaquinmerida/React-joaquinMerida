import { createContext , useState } from 'react'
import Item from '../components/item/components/Item'

export const contexto = createContext()

const { Provider } = contexto


const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)

  const addItem = (producto, nuevaCantidad) => {
    const copia = carrito.slice(0)
    copia.push({...producto, nuevaCantidad })
    setCarrito(copia)
    setCantidad(cantidad + nuevaCantidad)
    setTotal(total + producto.precio * nuevaCantidad)
  }

  const handleClear = (id) => {
    const copiaCarrito = [...carrito];
    const indexProd = carrito.findIndex(prod => prod.id === id);
    copiaCarrito.splice(indexProd, 1);
    setCarrito(copiaCarrito)
  }

    const limpiarCarrito = () => {
        setCarrito([])
    }

    const valorDelContexto = {
        carrito: carrito,
        total: total,
        cantidad: cantidad,
        limpiarCarrito: limpiarCarrito,
        addItem: addItem,
        handleClear: handleClear
    }


  return (
    <Provider value={valorDelContexto}>
    {children}
    </Provider>
  )
}

export default MiProvider