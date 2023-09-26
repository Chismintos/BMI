// Footer.jsx

import React from 'react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className='bg-green-900 text-white py-12'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div>
            <Image
              src={'logoheader.svg'}
              width={300} // Ajusta el ancho del logo aquí
              height={300} // Ajusta el alto del logo aquí
              alt="logo pagina"
              style={{
                width: '80%', // Establece el ancho máximo al 100%
              }}
              priority
            />
          </div>
          <div>
            <h6 className='mb-2 text-[16px]'>Enlaces de Interés</h6>
            <ul className="list-none text-[13px]">
              <li>Participa</li>
              <li>Publicaciones Oficiales</li>
              <li>Marco Jurídico</li>
              <li>Plataforma Nacional de Transparencia</li>
            </ul>
          </div>
          <div>
            <h6 className='text-[16px]'>¿Qué es gob.mx?</h6>
            <p className='mb-2 text-[13px]'>Es el portal único de trámites, información y participación ciudadana.</p>
            <ul className="list-none text-[13px]">
              <li>Portal de datos abiertos</li>
              <li>Declaración de accesibilidad</li>
              <li>Aviso de privacidad integral</li>
              <li>Aviso de privacidad simplificado</li>
              <li>Términos y condiciones</li>
              <li>Política de seguridad</li>
              <li>Mapa del sitio</li>
            </ul>
          </div>
          <div>
            <h6>Denuncia contra servidores públicos</h6>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
