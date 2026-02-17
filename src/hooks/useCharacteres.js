import { useEffect, useState } from "react"
import { getCharacteres } from "../services/characterService"


export const useCharacteres = () => {

    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {

        const handleCharacteres = async () => {
            try {
                setLoading(true)
                const data = await getCharacteres()
                setResponse(data)

            } catch (e) {
                setError(e)
            } finally {
                setLoading(false)
            }

        }

        handleCharacteres()


    }, [])


    return { response, loading, error }


}