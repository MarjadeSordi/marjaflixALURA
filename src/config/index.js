const URL_BACKEND_TOP = window.location.hostname.includes ('localhost')
? 'http://localhost:8080'
: 'https://marjaflix.herokuapp.com';

//'http://localhost:8080/categorias';
//http://localhost:8080/categorias?_embed=videos

export default {
    URL_BACKEND_TOP,
};
