import Formulario from "./components/Formulario"
import { Footer } from "./components/Footer"
//COMPONENTE HOME
export default function Home() {
  return (
   <main className="flex flex-col items-center space-y-5">
    <section >
      <h1 className="font-bold text-3xl pt-4" >INDICE DE MASA CORPORAL</h1>
    </section>
    <section className="w-[80%]" >
      <Formulario/>
    </section>
    <section>
      <Footer/>
    </section>
    
   </main>
  )
}
