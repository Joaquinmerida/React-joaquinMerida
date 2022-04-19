import { createContext , useState } from 'react'
import { toast } from 'react-toastify'

export const contexto = createContext()

const { Provider } = contexto


const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)

  const addItem = (producto, nuevaCantidad) => {
    const item = carrito.find(prod => prod.id === producto.id)

    if (item) {
      setTotal(total + item.precio * nuevaCantidad)
      item.nuevaCantidad = item.nuevaCantidad + nuevaCantidad
      const copiaCarrito = [...carrito]
      const index = copiaCarrito.findIndex(prod => prod.id === item.id)
      copiaCarrito[index]= item
      setCarrito(copiaCarrito)
    } else {
      const copia = carrito.slice(0)
      copia.push({...producto, nuevaCantidad })
      setCarrito(copia)
      setCantidad(cantidad + nuevaCantidad)
      setTotal(total + producto.precio * nuevaCantidad)
    }
  }

  const handleClear = (id) => {
    const producto = carrito.find(prod => prod.id === id);
    const nuevoCarrito = carrito.filter(prod => prod.id !== id)
    setCarrito(nuevoCarrito)
    setTotal(total - producto.precio * producto.nuevaCantidad)
  }

    const limpiarCarrito = () => {
        setCarrito([])
        setTotal(total * 0)
    }

    const valorDelContexto = {
        carrito: carrito,
        total: total,
        cantidad: cantidad,
        limpiarCarrito: limpiarCarrito,
        addItem: addItem,
        handleClear: handleClear,
    }

  return (
    <Provider value={valorDelContexto}>
    {children}
    </Provider>
  )
}

export default MiProvider