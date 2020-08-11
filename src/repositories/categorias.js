import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND_TOP}/categorias?_embed=videos`;

function getAll() {
return fetch(`${URL_CATEGORIAS}`)
  .then(async (respostaDoServidor) => {

    if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;  
    }

    throw new Error('Dados não encontrados: ');
  });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIAS}?_embed=videos`)
    .then(async (respostaDoServidor) => {
  
      if (respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          return resposta;  
      }
  
      throw new Error('Dados não encontrados: ');
    });
  }


export default {
    getAllWithVideos,
    getAll,
};