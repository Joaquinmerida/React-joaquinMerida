import { createContext , useState } from 'react'

export const contexto = createContext()

const { Provider } = contexto


const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(false)



    const limpiarCarrito = () => {
        setCarrito ([])
    }

    const valorDelContexto = {
        carrito: carrito,
        total: total,
    }


  return (
    <Provider value={valorDelContexto}>
    {children}
    </Provider>
  )
}

export default MiProvider