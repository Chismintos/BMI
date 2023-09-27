'use client'

import Formulario from "./components/Formulario"
import React, { useState } from 'react';

//COMPONENTE HOME
export default function Home() {

  const [resultado, setResultado] = useState('');
  const [error, setError] = useState('')

  return (
   <main className="flex flex-col items-center space-y-5 mb-24">
    <section >
      <h1 className="font-bold text-3xl mt-8" >INDICE DE MASA CORPORAL</h1>
    </section>
    <section className="w-[80%] " >

      <Formulario

        // Se utiliza para pasar propiedades (props) al componente Formulario 
        // desde el componente Home en React. Cada una de las líneas representa una 
        // prop específica que se está pasando.

        setResultado = {setResultado}
        setError = {setError}
      />
    </section>


    {/* Operador && se utiliza para realizar evaluaciones logicas Y (AND) entre dos expresiones*/}

    {/* En resumen si hay un valor a la izquierda de && que se evalue como verdadero, se renderiza lo de 
        la derecha en el codigo, por contrario  si no tiene ningun valor o cadena vacia, false, undefiende,
        null o 0 no se renderizara en el elemento  */}
        
    {resultado && 
    
    <section className="text-2xl 
      font-bold p-3 
      bg-purple-300 
      rounded-md  ">
      {resultado}
    </section>


    }

   </main>
   
  )
}
