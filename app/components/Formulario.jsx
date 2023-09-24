import React from 'react'

export const Formulario = () => {
  return (
    <div>
        <form className='flex flex-col items-center space-y-5 border border-gray-500 p-5'>
            <div className='flex flex-col w-full'>
                <label htmlFor='' className='uppercase font-bold' >Estatura</label>
                <input type="text" placeholder='Estatura en cm' className='bg-blue-200 p-2 rounded-md'></input>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor='' className='uppercase font-bold' >Peso</label>
                <input type="text" placeholder='Peso en kg' className='bg-blue-200 p-2 rounded-md'></input>
            </div>
            
            <div className='flex w-full justify-end '>
                <input type='button' value={'Calcular IBM'} className='bg-blue-300 rounded-md p-2 font-semibold'></input>
            </div>
            

        </form>
    </div>
  )
}

export default Formulario;