import { createContext , useState } from 'react'

export const contexto = createContext()

const { Provider } = contexto


const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)



    const limpiarCarrito = () => {
        setCarrito ([])
    }

    const addItem = (producto,cantidad) => {
      const copia = carrito.slice(0)
    }

    const valorDelContexto = {
        carrito: carrito,
        total: total,
        cantidad: cantidad
    }


  return (
    <Provider value={valorDelContexto}>
    {children}
    </Provider>
  )
}

export default MiProvider