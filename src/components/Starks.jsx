import React from 'react'
import { useCharacteres } from '../hooks/useCharacteres';
import StarkCard from './Card/StarkCard';

const Starks = () => {

    const { houseStark, loading, error } = useCharacteres();

    console.log(houseStark);

    return (
        <div className='bg-black text-center h-[500px]'>
            <h2 className='text-sky-300 text-5xl font-semibold'>Casa Stark</h2>
            <p className='text-gray-300 text-sm mt-2' >"O Inverno Está Chegando"</p>

            <div className='container px-2 flex flex-wrap justify-center mt-5 mb-10 gap-5'>

                { houseStark && houseStark.map((character) => (
                    
                    <StarkCard character={character} />

                ))}
                
            </div>






        </div>
    )
}

export default Starks