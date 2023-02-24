import React, {useEffect, useState} from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


export const EjercicioUno = () => {
  const [contador, setContador] = useState(0);
  const [color, setColor] = useState ("primary");

  useEffect(() => {
    if (contador > 0) setColor('danger');
    else if (contador < 0) setColor('success');
    else setColor('primary');
  }, [contador]);



  return (
    <section>
    <h2 className='text-info'>
        Contador: <Badge bg={color}>{contador}</Badge>
    </h2>
    <Button variant="outline-info ms-3 mt-3" onClick={() => setContador(contador - 1)}>
    <i className='bi bi-cloud-minus'></i>
    </Button>
    <Button variant="outline-info ms-3 mt-3" onClick={() => setContador(0)}>
    <i className='bi bi-cloud'></i>
    </Button>
    <Button variant="outline-info ms-3 mt-3" onClick={() => setContador(contador + 1)}>
    <i className='bi bi-cloud-plus'></i>
    </Button>
    </section>
  );
};
