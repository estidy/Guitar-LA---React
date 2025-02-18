import {useState} from 'react'
import Guitar from "./Components/Guitar"
import Header from "./Components/Header"
import { db } from './Data/db'

function App() {
  
const [data, setData] = useState(db)

  return (
    <>
    <Header />

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {data.map(()=>(
            <Guitar />
            ))}
            
        </div>
    </main>

    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
