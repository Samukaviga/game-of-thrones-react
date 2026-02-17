import api from './api'

const getCharacteres = async () => {

    const response = await api.get('/characters');
    return response.data;


}

export { getCharacteres }