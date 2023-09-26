import React, { useState } from 'react';

const Formulario = ({setResultado, setError}) => {
  const [estatura, setEstatura] = useState('');
  const [peso, setPeso] = useState('');
  const [errorFormulario, setErrorFormulario] = useState(false)


  const buttonHandler = (e) => {
    e.preventDefault();

    if([estatura,peso].includes('')){
      setErrorFormulario(true)
      return

    }

    setErrorFormulario(false)
    setResultado(peso/((estatura/100)*(estatura/100)));
    setError(false)
  }

  const limpiar = () => {
    setPeso('');
    setEstatura('');
    setErrorFormulario('');
    setResultado('')
  }

    return (
    <div >
        <form className='flex flex-col items-center space-y-5 border border-gray-300 p-5 rounded-md '>
            
            {errorFormulario  && <div className='bg-red-500 rounded-md font-bold  '> ERROR DEBES LLENAR LOS CAMPOS</div> }

            <div className='flex flex-col w-full'>
                <label htmlFor='' className='uppercase font-bold' >Estatura</label>
                <input 
                    type="number" 
                    placeholder='Estatura en cm' 
                    className='bg-green-200 p-2 rounded-md'
                    value={estatura}
                    onChange={e => setEstatura(e.target.value)}
                    
                    ></input>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor='' className='uppercase font-bold' >Peso</label>
                <input 
                    type="number" 
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
                    className='bg-green-300 rounded-md p-2 font-semibold hover:bg-red-400 transition-colors duration-300 cursor-pointer'
                    onClick={buttonHandler}
                    ></input>
            </div>

            <div className='flex w-full justify-end '>
                <input 
                    type='button' 
                    value={'Limpiar'} 
                    className='bg-yellow-300 rounded-md p-2 font-semibold hover:bg-red-400 transition-colors duration-300 cursor-pointer'
                    onClick={limpiar}
                    ></input>
            </div>
        </form>
    </div>
  )
}

export default Formulario;
