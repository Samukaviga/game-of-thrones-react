import React from 'react'
import { useCharacteres } from '../hooks/useCharacteres';

const Starks = () => {

    const { houseStark, loading, error } = useCharacteres();

    console.log(houseStark);

    return (
        <div className='bg-black text-center h-[500px]'>
            <h2 className='text-sky-300 text-5xl font-semibold'>Casa Stark</h2>

            <div className='container px-2 flex flex-wrap justify-center mt-5 mb-10 gap-5'>

                { houseStark && houseStark.map((character) => (
                    <div key={character.id} className="group relative w-[250px] rounded-lg border-2 border-solid border-sky-300 overflow-hidden shadow-lg hover:scale-105 transition">

                    <img
                        src={character.imageUrl}
                        alt="Jon Snow"
                        className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <div className="absolute bottom-4 left-0 right-0 text-center">
                        <h3 className="text-xl font-semibold text-white">
                            {character.fullName}
                        </h3>
                    </div>

                </div>
                ))}
                

               

                

            </div>






        </div>
    )
}

export default Starks