import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

export const EjercicioDos = () => {
    const [pato, setPato] = useState(" ")
    const [loading, setLoading] = useState (false)
    const [error, setError] = useState(false)

    const getPato = async () => {
        try {
            const res = await fetch ('https://random-d.uk/api/v2/random')
            setPato(await res.json())
        } catch (error) {
            setError(true)
        } finally{
            setTimeout(() =>{
                setLoading(false)
            }, 3000);
        }
    }

  return (
    <section>
    <h2 className='text-info'>Patos</h2>
    {error
       ? <alert variant="info"><p>Ha ocurrido un error</p></alert>
       : loading
       ? <Spinner animation="border" variant="primary"></Spinner>
       : pato && <Image src={pato.url} alt="pato" rounded/>
    }
    <br />
    <br />
    <Button variant="primary" onClick={getPato} >Ganar Patitos</Button>
    </section>
  )
}


