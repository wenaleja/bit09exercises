import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { EjercicioUno } from './EjercicioUno';
import { EjercicioDos } from './EjercicioDos';
import { EjercicioTres } from './EjercicioTres';



export const Ejercicios = () => {
  const [ejercicios, setEjercicios] = useState(null)
  return (
    <section>
       <h1 className='text-center py-5 text-info' >Ejercicios</h1>
      {!ejercicios ? (
        <>
        <Button variant='primary ms-5' onClick={()=> setEjercicios(<EjercicioUno />)}>Contador</Button>
         <br />
         <br />
         <br />
        <Button variant='primary ms-5' onClick={()=> setEjercicios(<EjercicioDos />)}>Ejercicio 2</Button>
         <br />
         <br />
         <br />
        <Button variant='primary ms-5' onClick={()=> setEjercicios(<EjercicioTres />)}>Ejercicio 3</Button>
        </>
      ) : (
        <div className='text-center'>
        {ejercicios}
        <br />
        <br />
        <Button  variant="outline-primary" onClick={()=> setEjercicios(null)}>Regresar</Button>
        </div>
      )}
    </section>
    
  )
}
