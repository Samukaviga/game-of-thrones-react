import { useEffect, useState } from "react"
import { getCharacteres } from "../services/characterService"


export const useCharacteres = () => {

    const [response, setResponse] = useState(null)
    const [houseStark, setHouseStark] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {

        const handleCharacteres = async () => {
            try {
                setLoading(true)
                const data = await getCharacteres()

                const starkResponse = data.filter((char) => char.family === 'House Stark')

                setHouseStark(starkResponse);

                setResponse(data)

            } catch (e) {
                setError(e)
            } finally {
                setLoading(false)
            }

        }

        handleCharacteres()


    }, [])


    return { response, houseStark, loading, error }


}