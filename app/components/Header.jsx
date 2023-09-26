import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className='bg-green-900 text-black '>
      <div className='container mx-auto p-1'>
        <div className='flex justify-between items-center text-white font-bold ml-3 mr-3 h-12' >
          <div className='flex justify-center space-x-2 '>
            
            <Image 
              src={'logoheader.svg'} 
              width={200} height={200} 
              alt="logo pagina" 
              style={{width:110, height:100}}
              priority
            />
            
          </div>
          <nav className=' flex list-none space-x-6 text-[14px] font-arial '>
              <li className='text-sm hover:underline'>Registro para Vacunacion</li>
              <li className='text-sm hover:underline'>Informacion sobre COVID-19</li>
              <li className='text-sm hover:underline'>Tramites</li>
              <li className='text-sm hover:underline'>Gobierno</li>
            
              <button className='search-button'>
                <img
                  src='https://framework-gb.cdn.gob.mx/landing/img/lupa.png'
                  alt='Buscar'
                  className='w-3 h-3'
                />
              </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
