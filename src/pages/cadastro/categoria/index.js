import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {

    nome: '',
    descricao: '',
    cor: '',

  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,

    });
  }

  function handleChange(InfosdoEvento) {
    setValue(
      InfosdoEvento.target.getAttribute('name'),
      InfosdoEvento.target.value,
    );
  }

  useEffect(() => {
    const URL_TOP =  window.location.href.includes('localhost')
    ? 'http//localhost:8080/categoria'
    : 'https://marjaflix.herokuapp.com/categoria';
      fetch(URL_TOP)
       .then(async (respostaDoServidor) => {
          const resposta = await respostaDoServidor.json();
          setCategorias([
          ...resposta, 
          ]);
        });

  return (
    
    <PageDefault>
      <h1>
        {' '}
        Cadastro de categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(InfosdoEvento) {
        InfosdoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

  {categorias.lenght === 0 && (
  <div>
    {/*Carregando*/}
    Loading....
    </div>
  )}

  <ul>
  {categorias.map((categoria) => (
  <li key={`${categoria.nome}`}>
  {categoria.nome}
  </li>


  ))} 
  </ul> 

      <Link to="/">
        Ir para home
      </Link>

      </PageDefault> 
  )
} ) }

export default CadastroCategoria;
