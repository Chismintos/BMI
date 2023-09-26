'use client'

import Formulario from "./components/Formulario"
import React, { useState } from 'react';

//COMPONENTE HOME
export default function Home() {

  const [resultado, setResultado] = useState('Sin resultado');
  useState('');

  const [error, setError] = useState('')

  return (
   <main className="flex flex-col items-center space-y-5 mb-24">
    <section >
      <h1 className="font-bold text-3xl mt-8" >INDICE DE MASA CORPORAL</h1>
    </section>
    <section className="w-[80%] " >
      <Formulario
        resultado = {resultado}
        setResultado = {setResultado}
        setError = {setError}
      />
    </section>

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
