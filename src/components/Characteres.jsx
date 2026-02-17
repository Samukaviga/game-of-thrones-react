import { useEffect, useState } from 'react';
import { useCharacteres } from '../hooks/useCharacteres';
import './Characteres.css';

const Characteres = () => {

    const [characteres, setCharacteres] = useState([]);
    const { response: items, loading, error } = useCharacteres();

    console.log(items)
  return (
    <div className="main">
        <div className='text-center flex flex-col justify-center items-center h-[800px]'>
             <h1 className="text-5xl font-bold uppercase tracking-[0.15em] text-amber-300 text-shadow-glow md:text-7xl ">Game of Thrones</h1>
            <h3 className='text-amber-100 text-2xl font-medium' >Personagens e suas casas</h3>
        </div>
       
        {loading && <p>Carregano...</p> }
        {error && <p>Algo deu errado...</p> }

    </div>
  )
}

export default Characteres