import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

function create(objetodoVideo) {
return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
        'Contend-type': 'application/json', 
    },
    body: JSON.stringify(objetodoVideo),
})
  .then(async (respostaDoServidor) => {

    if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;  
    }

    throw new Error('Dados não encontrados: ');
  });
}

export default {
    create,
};