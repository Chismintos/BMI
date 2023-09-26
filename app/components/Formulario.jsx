'use client'
import React, { useState } from 'react';

const Formulario = () => {
  const [estatura, setEstatura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState('')

  const buttonHandler = (e) => {
    e.preventDefault();
    setImc(peso / (estatura * estatura))
    
  }
    return (
    <div >
        <form className='flex flex-col items-center space-y-5 border border-gray-300 p-5 rounded-md '>
            <div className='flex flex-col w-full'>
                <label htmlFor='' className='uppercase font-bold' >Estatura</label>
                <input 
                    type="text" 
                    placeholder='Estatura en cm' 
                    className='bg-green-200 p-2 rounded-md'
                    value={estatura}
                    onChange={e => setEstatura(e.target.value)}
                    
                    ></input>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor='' className='uppercase font-bold' >Peso</label>
                <input 
                    type="text" 
                    placeholder='Peso en kg' 
                    className='bg-green-200 p-2 rounded-md'
                    value={peso}
                    onChange={e => setPeso(e.target.value)}
                    ></input>
            </div>
            
            <div className='flex w-full justify-end '>
                <input 
                    type='button' 
                    value={'Calcular IBM'} 
                    className='bg-green-300 rounded-md p-2 font-semibold hover:bg-red-300 transition-colors duration-300 cursor-pointer'
                    onClick={buttonHandler}
                    ></input>
            </div>
            <div>
                imc
            </div>
            
        </form>
    </div>
  )
}

export default Formulario;
