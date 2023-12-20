import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { createContext, useState } from "react"
import Men from "./pages/Men"
import Women from "./pages/Women"
import Accessories from "./pages/Accesories"

export const AppContext = createContext()

function App() {
  const [darkMode,setDarkMode] = useState(false) 
  const [totalPrice,setTotallPrice] = useState(0)
  const [likeCount,setLikeCount] = useState(0)
  const [likeArray, setLikeArray] = useState([{
    title: '',
    price: 0,
    src: ''
  }])
  const [selectedProduct, setSelectedProduct] = useState([{
    title: '',
    price: 0,
    src: '',
    description:''
  }])

  return (
    <AppContext.Provider value={{likeArray,setLikeArray,likeCount,setLikeCount,darkMode,setDarkMode,totalPrice,setTotallPrice,selectedProduct,setSelectedProduct}}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="men" element={<Men/>}/>
          <Route path="women" element={<Women/>}/>
          <Route path="accesories" element={<Accessories/>}/>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
